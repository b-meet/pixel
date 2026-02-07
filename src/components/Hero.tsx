"use client";

import { motion } from "framer-motion";
import { MoveDown, MapPin, Phone } from "lucide-react";
import { WhatsAppIcon } from "./icons/WhatsAppIcon";
import { Button } from "./ui/Button";
import Link from "next/link";
import { studioInfo } from "@/lib/data";

export const Hero = () => {
    return (
        <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-white">
            {/* Background Gradient / Glow */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--color-brand-glow)_0%,_transparent_60%)] opacity-30 scale-150 animate-pulse" />

            {/* Light overlay for text readability */}
            <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/50 to-white" />

            <div className="container relative z-10 px-6 text-center">
                {/* Location Badge */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="flex justify-center mb-6"
                >
                    <div className="flex items-center gap-2 px-4 py-2 bg-white/50 backdrop-blur-sm border border-dark/5 rounded-full text-sm font-medium tracking-wide text-dark/70">
                        <MapPin size={14} className="text-brand" />
                        <span>City Light Road, Surat</span>
                    </div>
                </motion.div>

                {/* Animated Subtitle */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-brand font-medium tracking-[0.3em] uppercase text-sm md:text-lg mb-6"
                >
                    Professional Tattoo Studio in Surat
                </motion.p>

                {/* Main Title */}
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="font-heading font-bold text-5xl md:text-7xl lg:text-8xl xl:text-9xl text-dark uppercase tracking-wider mb-8 leading-tight"
                >
                    Every Tattoo <br />
                    <span className="text-transparent bg-clip-text bg-linear-to-r from-dark via-dark/80 to-dark/50">
                        Tells A Story
                    </span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className="max-w-2xl mx-auto text-dark/60 text-lg mb-10 leading-relaxed"
                >
                    Custom Tattoos • Minimalist • Fine Line • Cover-ups • Removal
                    <br />
                    Crafting stories on skin with medical-grade safety standards.
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6"
                >
                    <a href={`tel:${studioInfo.phone}`} className="w-full sm:w-auto">
                        <Button variant="outline" size="md" className="w-full sm:w-auto gap-3 min-w-[160px] border-brand/40 hover:bg-brand/5">
                            <Phone size={18} className="text-brand" /> Call Us
                        </Button>
                    </a>
                    <a href={`https://wa.me/${(studioInfo.phone || "").replace(/[^0-9]/g, '')}`} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                        <Button variant="primary" size="md" className="w-full sm:w-auto gap-3 min-w-[160px] shadow-lg shadow-brand/20">
                            <WhatsAppIcon size={18} className="text-dark" /> Whatsapp
                        </Button>
                    </a>
                    <a href={studioInfo.googleMapsUrl} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                        <Button variant="outline" size="md" className="w-full sm:w-auto gap-3 min-w-[160px] border-brand/40 hover:bg-brand/5">
                            <MapPin size={18} className="text-brand" /> Location
                        </Button>
                    </a>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-dark/30"
            >
                <span className="text-xs uppercase tracking-widest">Scroll</span>
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                >
                    <MoveDown size={20} />
                </motion.div>
            </motion.div>
        </section>
    );
};
