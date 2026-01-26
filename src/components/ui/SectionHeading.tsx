"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
    title: string;
    subtitle?: string;
    className?: string;
    center?: boolean;
}

export const SectionHeading = ({
    title,
    subtitle,
    className,
    center = true,
}: SectionHeadingProps) => {
    return (
        <div className={cn("mb-12", center && "text-center", className)}>
            {subtitle && (
                <motion.span
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-brand font-medium tracking-[0.2em] uppercase text-sm md:text-base block mb-3"
                >
                    {subtitle}
                </motion.span>
            )}
            <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-3xl md:text-5xl lg:text-6xl font-heading font-bold uppercase text-dark tracking-widest leading-tight"
            >
                {title}
            </motion.h2>
            <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: center ? 80 : 60 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className={cn(
                    "h-1 bg-brand mt-6 rounded-full",
                    center ? "mx-auto" : ""
                )}
            />
        </div>
    );
};
