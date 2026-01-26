"use client";

import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "outline" | "ghost";
    size?: "sm" | "md" | "lg";
    children: React.ReactNode;
}

export const Button = ({
    className,
    variant = "primary",
    size = "md",
    children,
    ...props
}: ButtonProps) => {
    const ref = useRef<HTMLButtonElement>(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
        const { clientX, clientY } = e;
        const { left, top, width, height } = ref.current?.getBoundingClientRect() || {
            left: 0,
            top: 0,
            width: 0,
            height: 0,
        };

        const x = (clientX - (left + width / 2)) * 0.3; // Magnetic strength
        const y = (clientY - (top + height / 2)) * 0.3;

        setPosition({ x, y });
    };

    const handleMouseLeave = () => {
        setPosition({ x: 0, y: 0 });
    };

    const variants = {
        primary: "bg-brand text-dark hover:bg-brand/90",
        outline: "border border-brand/50 text-brand hover:bg-brand/10",
        ghost: "text-brand/80 hover:text-brand",
    };

    const sizes = {
        sm: "px-4 py-2 text-sm",
        md: "px-8 py-3 text-base",
        lg: "px-10 py-4 text-lg",
    };

    return (
        <motion.button
            ref={ref}
            className={cn(
                "relative inline-flex items-center justify-center font-heading font-bold uppercase tracking-wider transition-colors outline-none",
                variants[variant],
                sizes[size],
                className
            )}
            animate={{ x: position.x, y: position.y }}
            transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            {...(props as any)}
        >
            <span className="relative z-10">{children}</span>
        </motion.button>
    );
};
