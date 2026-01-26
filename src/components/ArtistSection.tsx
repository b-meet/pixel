"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "./ui/SectionHeading";
import { Button } from "./ui/Button";

export const ArtistSection = () => {
    return (
        <section id="artist" className="py-24 md:py-32 bg-white relative">
            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">

                    {/* Text Content */}
                    <div className="order-2 md:order-1">
                        <SectionHeading
                            title="The Artist"
                            subtitle="Master of Ink"
                            center={false}
                            className="mb-8"
                        />

                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="space-y-6 text-dark/70 font-sans leading-relaxed text-lg"
                        >
                            <p>
                                Behind every masterpiece at Pixel Tattoos is a dedication to perfection.
                                With over a decade of experience, we specialize in transforming personal stories into
                                permanent art.
                            </p>
                            <p>
                                Our philosophy is simple: <strong className="text-dark">Every line matters.</strong> Whether
                                it's intricate geometric patterns, realism, or minimalist fine-line work,
                                we approach each canvas with reverence and precision.
                            </p>
                            <p>
                                As Surat's premier custom tattoo studio, we don't just ink skin; we curate
                                experiences that last a lifetime.
                            </p>

                            <div className="pt-8">
                                <a href="#portfolio">
                                    <Button variant="outline">View Gallery</Button>
                                </a>
                            </div>
                        </motion.div>
                    </div>

                    {/* Image Placeholder */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="order-1 md:order-2 relative h-[500px] md:h-[600px] w-full rounded-sm overflow-hidden bg-dark-gray shadow-xl"
                    >
                        {/* Placeholder for Artist Image */}
                        <div className="absolute inset-0 bg-neutral-200 flex items-center justify-center">
                            <span className="text-dark/20 uppercase tracking-widest">Artist Portrait</span>
                        </div>

                        {/* Decorative Frame */}
                        <div className="absolute inset-4 border border-dark/5 z-10" />

                        {/* Glow Effect */}
                        <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-brand/20 rounded-full blur-[100px] pointer-events-none" />
                    </motion.div>

                </div>
            </div>
        </section>
    );
};
