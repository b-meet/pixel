"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { SectionHeading } from "./ui/SectionHeading";
import { tattooStyles } from "@/lib/data";

export const TattooStyles = () => {
    return (
        <section className="py-24 bg-white border-y border-dark/5">
            <div className="container mx-auto px-6">
                <SectionHeading title="Our Styles" subtitle="Versatility" />

                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
                    {tattooStyles.map((style, index) => (
                        <Link key={style.id} href={`/styles/${style.slug}`} passHref>
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1, duration: 0.5 }}
                                className="group relative aspect-square overflow-hidden rounded-sm bg-dark-gray cursor-pointer"
                            >
                                {/* Background Placeholder */}
                                <div className={`absolute inset-0 ${style.heroImage} transition-transform duration-700 group-hover:scale-110`} />

                                {/* Overlay */}
                                <div className="absolute inset-0 bg-dark/20 group-hover:bg-dark/40 transition-colors duration-300" />

                                {/* Content */}
                                <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4">
                                    <h3 className="text-white font-heading font-bold text-xl md:text-2xl uppercase tracking-wider mb-1 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                        {style.name}
                                    </h3>
                                    <p className="text-white/80 text-sm font-medium opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300 delay-75">
                                        {style.shortDesc}
                                    </p>
                                </div>
                            </motion.div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};
