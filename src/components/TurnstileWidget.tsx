"use client";

import { useEffect, useRef, useState } from "react";

interface TurnstileWidgetProps {
    onVerify: (token: string) => void;
    onError?: () => void;
    siteKey?: string;
    theme?: "light" | "dark" | "auto";
}

declare global {
    interface Window {
        turnstile: any;
    }
}

export const TurnstileWidget = ({
    onVerify,
    onError,
    siteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY,
    theme = "auto",
}: TurnstileWidgetProps) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [widgetId, setWidgetId] = useState<string | null>(null);

    useEffect(() => {
        if (!containerRef.current || !siteKey) return;

        // Check if script is loaded
        if (typeof window !== "undefined" && window.turnstile) {
            if (widgetId) window.turnstile.remove(widgetId);

            const id = window.turnstile.render(containerRef.current, {
                sitekey: siteKey,
                theme,
                callback: (token: string) => {
                    onVerify(token);
                },
                "error-callback": () => {
                    if (onError) onError();
                },
            });
            setWidgetId(id);
        }

        return () => {
            if (widgetId && window.turnstile) {
                window.turnstile.remove(widgetId);
            }
        }
    }, [siteKey, theme]);

    return <div ref={containerRef} className="min-h-[65px]" />;
};
