"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { SectionHeading } from "./ui/SectionHeading";

const works = [1, 2, 3, 4, 5, 6]; // Placeholders

export const Portfolio = () => {
    const targetRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

    const x = useTransform(scrollYProgress, [0, 1], ["1%", "-75%"]);

    return (
        <section id="portfolio" ref={targetRef} className="relative h-[300vh] bg-dark-gray">
            <div className="sticky top-0 flex h-screen items-center overflow-hidden">

                <div className="absolute top-10 left-6 md:left-20 z-10">
                    <SectionHeading title="Selected Works" subtitle="Portfolio" center={false} />
                </div>

                <motion.div style={{ x }} className="flex gap-4 md:gap-8 px-6 md:px-20 min-w-max">
                    {works.map((id) => (
                        <div
                            key={id}
                            className="relative h-[50vh] md:h-[70vh] w-[80vw] md:w-[60vh] bg-white rounded-sm overflow-hidden group shadow-lg"
                        >
                            {/* Image Placeholder */}
                            <div className="absolute inset-0 bg-neutral-200 flex items-center justify-center group-hover:scale-105 transition-transform duration-700">
                                <span className="text-dark/10 text-4xl font-heading font-bold">
                                    WORK {id}
                                </span>
                            </div>

                            {/* Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-dark/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                                <p className="text-brand font-bold uppercase tracking-widest text-sm">Full Sleeve</p>
                                <h3 className="text-white font-heading text-2xl">Geometric Lion</h3>
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};
