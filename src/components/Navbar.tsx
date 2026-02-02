"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import NextImage from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "./ui/Button";

const navLinks = [
    { name: "Home", href: "/" },
    {
        name: "Services",
        href: "#",
        dropdown: [
            { name: "Custom Tattoo", href: "/services/custom-tattoo" },
            { name: "Minimalist", href: "/services/minimalist-tattoos" },
            { name: "Fine Line", href: "/services/fine-line-tattoos" },
            { name: "Black & Grey", href: "/services/black-and-grey-tattoos" },
            { name: "Cover Ups", href: "/services/cover-up-tattoos" },
            { name: "Removal", href: "/services/tattoo-removal" },
        ]
    },
    { name: "Gallery", href: "/gallery" },
    { name: "About", href: "/about" },
    { name: "Blog", href: "/blog" },
    { name: "FAQ", href: "/faq" },
];

export const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [openDropdown, setOpenDropdown] = useState<string | null>(null);
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
                        <div className="relative h-12 w-48 md:h-14 md:w-56">
                            <NextImage
                                src="/logo.png"
                                alt="Pixel Tattoo Logo"
                                fill
                                className="object-contain"
                                priority
                            />
                        </div>
                    </Link>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <div
                                key={link.name}
                                className="relative group"
                                onMouseEnter={() => link.dropdown && setOpenDropdown(link.name)}
                                onMouseLeave={() => link.dropdown && setOpenDropdown(null)}
                            >
                                <Link
                                    href={link.href}
                                    className="flex items-center gap-1 text-sm font-medium uppercase tracking-widest text-dark/80 hover:text-brand transition-colors relative py-2"
                                >
                                    {link.name}
                                    {link.dropdown && <ChevronDown size={14} />}
                                </Link>

                                {link.dropdown && (
                                    <AnimatePresence>
                                        {openDropdown === link.name && (
                                            <motion.div
                                                initial={{ opacity: 0, y: 10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                exit={{ opacity: 0, y: 10 }}
                                                transition={{ duration: 0.2 }}
                                                className="absolute top-full left-0 w-48 bg-white border border-dark/5 shadow-lg rounded-sm py-2"
                                            >
                                                {link.dropdown.map((subItem) => (
                                                    <Link
                                                        key={subItem.name}
                                                        href={subItem.href}
                                                        className="block px-4 py-2 text-sm text-dark/70 hover:text-brand hover:bg-neutral-50 transition-colors"
                                                    >
                                                        {subItem.name}
                                                    </Link>
                                                ))}
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                )}
                            </div>
                        ))}
                        <Link href="/#contact">
                            <Button size="sm">Book Now</Button>
                        </Link>
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
                                    {link.dropdown ? (
                                        <div className="space-y-4">
                                            <div className="text-2xl font-heading font-bold uppercase text-dark tracking-widest">
                                                {link.name}
                                            </div>
                                            <div className="pl-4 flex flex-col space-y-3 border-l-2 border-brand/20">
                                                {link.dropdown.map((subItem) => (
                                                    <Link
                                                        key={subItem.name}
                                                        href={subItem.href}
                                                        onClick={() => setIsMobileMenuOpen(false)}
                                                        className="text-lg text-dark/70 hover:text-brand"
                                                    >
                                                        {subItem.name}
                                                    </Link>
                                                ))}
                                            </div>
                                        </div>
                                    ) : (
                                        <Link
                                            href={link.href}
                                            onClick={() => setIsMobileMenuOpen(false)}
                                            className="block text-2xl font-heading font-bold uppercase text-dark hover:text-brand tracking-widest"
                                        >
                                            {link.name}
                                        </Link>
                                    )}
                                </div>
                            ))}
                            <Link href="/#contact" onClick={() => setIsMobileMenuOpen(false)}>
                                <Button className="w-full mt-4">Book Appointment</Button>
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};
