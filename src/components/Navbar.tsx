"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import NextImage from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "./ui/Button";
import { WhatsAppIcon } from "./icons/WhatsAppIcon";
import { studioInfo } from "@/lib/data";

const navLinks = [
    { name: "The Studio", href: "/" },
    { name: "The Ink Gallery", href: "/tattoo-categories" },
    { name: "Inside Pixel", href: "/about" },
    { name: "The Ink Stories", href: "/blog" },
    { name: "FAQ", href: "/faq" },
];

export const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5 }}
                className={cn(
                    "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent",
                    isScrolled
                        ? "bg-white/95 backdrop-blur-md py-4 border-dark/5 shadow-sm"
                        : "bg-transparent py-6"
                )}
            >
                <div className="container mx-auto px-6 flex items-center justify-between">
                    <Link href="/" className="relative z-50 group">
                        <div className="relative h-10 w-36 md:h-14 md:w-56 transition-all duration-300">
                            <NextImage
                                src="/logo.png"
                                alt="Pixel Tattoo Logo"
                                fill
                                className="object-contain object-left"
                                priority
                            />
                        </div>
                    </Link>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <div key={link.name} className="relative group">
                                <Link
                                    href={link.href}
                                    className="flex items-center gap-1 text-sm font-medium uppercase tracking-widest text-dark/80 hover:text-brand transition-colors relative py-2"
                                >
                                    {link.name}
                                </Link>
                            </div>
                        ))}
                        <a href={`https://wa.me/${(studioInfo.phone || "").replace(/[^0-9]/g, '')}`} target="_blank" rel="noopener noreferrer">
                            <Button size="sm" className="gap-2">
                                <WhatsAppIcon size={16} className="text-dark" /> WhatsApp
                            </Button>
                        </a>
                    </div>

                    {/* Mobile Toggle */}
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="md:hidden text-dark hover:text-brand transition-colors relative z-50 p-2"
                    >
                        {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </motion.nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: "100%" }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: "100%" }}
                        transition={{ type: "tween", duration: 0.3 }}
                        className="fixed inset-0 z-40 bg-white flex flex-col pt-24 px-6 md:hidden overflow-y-auto"
                    >
                        <div className="flex flex-col space-y-6">
                            {navLinks.map((link, index) => (
                                <div key={link.name}>
                                    <Link
                                        href={link.href}
                                        onClick={() => setIsMobileMenuOpen(false)}
                                        className="block text-2xl font-heading font-bold uppercase text-dark hover:text-brand tracking-widest"
                                    >
                                        {link.name}
                                    </Link>
                                </div>
                            ))}
                            <a href={`https://wa.me/${(studioInfo.phone || "").replace(/[^0-9]/g, '')}`} target="_blank" rel="noopener noreferrer" onClick={() => setIsMobileMenuOpen(false)}>
                                <Button className="w-full mt-4 gap-2">
                                    <WhatsAppIcon size={18} className="text-dark" /> WhatsApp Us
                                </Button>
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};
