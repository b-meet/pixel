interface TurnstileVerifyResponse {
    success: boolean;
    "error-codes": string[];
    challenge_ts?: string;
    hostname?: string;
}

export async function verifyTurnstileToken(token: string): Promise<boolean> {
    const secretKey = process.env.TURNSTILE_SECRET_KEY;

    if (!secretKey) {
        console.error("TURNSTILE_SECRET_KEY is not defined");
        return false;
    }

    try {
        const formData = new FormData();
        formData.append("secret", secretKey);
        formData.append("response", token);

        const result = await fetch(
            "https://challenges.cloudflare.com/turnstile/v0/siteverify",
            {
                body: formData,
                method: "POST",
            }
        );

        const outcome: TurnstileVerifyResponse = await result.json();
        return outcome.success;
    } catch (err) {
        console.error("Turnstile verification error:", err);
        return false;
    }
}
