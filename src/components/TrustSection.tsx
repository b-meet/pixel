"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Star, Award, Users, Clover } from "lucide-react";
import { cn } from "@/lib/utils";

const stats = [
    { label: "Years Experience", value: "10+", icon: Award },
    { label: "Happy Clients", value: "5k+", icon: Users },
    { label: "Google Rating", value: "4.9", icon: Star },
    { label: "Hygenic", value: "100%", icon: Clover },
];

export const TrustSection = () => {
    return (
        <section className="py-24 relative overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0 bg-neutral-950">
                <Image
                    src="/asset/pixel-tattoo-cover-image.jpg"
                    alt="Tattoo Studio Background"
                    fill
                    className="object-cover opacity-90"
                    priority
                />
                <div className="absolute inset-0 bg-dark/80 mix-blend-multiply" />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className="flex flex-col items-center text-center group"
                        >
                            <div className="mb-4 p-4 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm group-hover:bg-brand/20 group-hover:border-brand/30 transition-all duration-300">
                                <stat.icon size={32} className="text-brand/80 group-hover:text-brand transition-colors duration-300" />
                            </div>
                            <h3 className="text-4xl md:text-5xl font-heading font-bold text-white mb-2">
                                {stat.value}
                            </h3>
                            <p className="text-white/60 uppercase tracking-widest text-xs md:text-sm font-medium group-hover:text-white/80 transition-colors">
                                {stat.label}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
