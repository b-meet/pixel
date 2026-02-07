"use client";

import { useState } from "react";
import { TurnstileWidget } from "@/components/TurnstileWidget";
import { verifyTest } from "./actions";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { CheckCircle, XCircle, ShieldCheck } from "lucide-react";

export default function TurnstileTestPage() {
    const [status, setStatus] = useState<"idle" | "verifying" | "success" | "error">("idle");
    const [message, setMessage] = useState("");

    const handleVerify = async (token: string) => {
        setStatus("verifying");
        setMessage("Token received! Verifying with server...");

        try {
            const result = await verifyTest(token);
            if (result.success) {
                setStatus("success");
                setMessage("Success! Turnstile verified this request as human.");
            } else {
                setStatus("error");
                setMessage("Verification failed. Check your Secret Key in .env");
            }
        } catch (e) {
            setStatus("error");
            setMessage("Server error during verification.");
        }
    };

    return (
        <div className="min-h-screen bg-light-gray flex flex-col items-center justify-center p-6">
            <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full text-center space-y-6">
                <div className="bg-brand/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto text-brand">
                    <ShieldCheck size={32} />
                </div>

                <h1 className="text-2xl font-bold text-dark">Turnstile Integration Test</h1>
                <p className="text-dark/60">
                    Complete the challenge below to test your Cloudflare Turnstile keys.
                </p>

                <div className="flex justify-center min-h-[70px]">
                    <TurnstileWidget onVerify={handleVerify} />
                </div>

                {status !== "idle" && (
                    <div className={`p-4 rounded-md flex items-start gap-3 text-left ${status === "success" ? "bg-green-50 text-green-800" :
                            status === "error" ? "bg-red-50 text-red-800" : "bg-blue-50 text-blue-800"
                        }`}>
                        {status === "success" ? <CheckCircle className="shrink-0 mt-0.5" size={18} /> :
                            status === "error" ? <XCircle className="shrink-0 mt-0.5" size={18} /> :
                                <div className="w-4 h-4 rounded-full border-2 border-current border-t-transparent animate-spin shrink-0 mt-0.5" />}
                        <div>
                            <p className="font-medium text-sm">{status === "verifying" ? "Verifying..." : status === "success" ? "Verification Passed" : "Verification Failed"}</p>
                            <p className="text-xs opacity-90 mt-1">{message}</p>
                        </div>
                    </div>
                )}

                <div className="pt-4 border-t border-dark/5">
                    <Link href="/">
                        <Button variant="outline" size="sm">Return Home</Button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
