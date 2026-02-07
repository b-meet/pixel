"use server";

import { verifyTurnstileToken } from "@/lib/verifyTurnstile";

export async function verifyTest(token: string) {
    try {
        const success = await verifyTurnstileToken(token);
        return { success };
    } catch (error) {
        return { success: false, error: "Verification failed" };
    }
}
