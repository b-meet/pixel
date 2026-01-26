"use client";

import { motion } from "framer-motion";
import { Star, Award, Users, Clover } from "lucide-react";
import { cn } from "@/lib/utils";

const stats = [
    { label: "Years Experience", value: "10+", icon: Award },
    { label: "Happy Clients", value: "5k+", icon: Users },
    { label: "Google Rating", value: "4.9", icon: Star },
    { label: "Custom Designs", value: "100%", icon: Clover },
];

export const TrustSection = () => {
    return (
        <section className="py-20 bg-dark-gray relative overflow-hidden border-y border-dark/5">
            <div className="container mx-auto px-6">
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
                            <div className="mb-4 p-4 rounded-full bg-white shadow-sm group-hover:bg-brand/10 transition-colors duration-300">
                                <stat.icon size={32} className="text-dark/50 group-hover:text-brand transition-colors duration-300" />
                            </div>
                            <h3 className="text-4xl md:text-5xl font-heading font-bold text-dark mb-2">
                                {stat.value}
                            </h3>
                            <p className="text-dark/60 uppercase tracking-widest text-xs md:text-sm font-medium">
                                {stat.label}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
