"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { SectionHeading } from "./ui/SectionHeading";
import { cn } from "@/lib/utils";
import { studioInfo, faqs as rawFaqs } from "@/lib/data";
import { WhatsAppIcon } from "./icons/WhatsAppIcon";
import { Button } from "./ui/Button";
import { MessageSquare } from "lucide-react";

// Flatten global FAQs for the main display while preserving order
const faqs = rawFaqs.flatMap(category => 
    category.items.map(item => ({
        question: item.q,
        answer: item.a,
        category: category.category
    }))
);

export const FAQ = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    // JSON-LD Schema
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqs.map((faq) => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
            }
        }))
    };

    return (
        <section id="faq" className="py-24 bg-white relative z-10 overflow-hidden">
            <div className="container mx-auto px-6 max-w-4xl">
                <SectionHeading
                    title="Best Tattoo Studio in Surat – Frequently Asked Questions"
                    subtitle="Expert Advice"
                />

                <div className="space-y-4">
                    {faqs.map((faq, index) => {
                        const isOpen = openIndex === index;

                        return (
                            <details
                                key={index}
                                className="group border border-dark/5 rounded-xl overflow-hidden bg-dark-gray transition-all duration-300 hover:border-brand/30"
                                open={isOpen}
                                onClick={(e) => {
                                    e.preventDefault();
                                    setOpenIndex(isOpen ? null : index);
                                }}
                            >
                                <summary
                                    className="list-none flex items-center justify-between p-6 cursor-pointer select-none outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-inset transition-all"
                                    role="button"
                                    aria-expanded={isOpen}
                                    aria-controls={`faq-content-${index}`}
                                    onKeyDown={(e) => {
                                        if (e.key === 'Enter' || e.key === ' ') {
                                            e.preventDefault();
                                            setOpenIndex(isOpen ? null : index);
                                        }
                                    }}
                                >
                                    <span className={cn(
                                        "text-lg md:text-xl font-heading font-bold uppercase tracking-wide transition-colors duration-300",
                                        isOpen ? "text-brand" : "text-dark"
                                    )}>
                                        {faq.question}
                                    </span>
                                    <span className={cn(
                                        "transition-transform duration-500 ease-out flex-shrink-0 ml-4",
                                        isOpen ? "rotate-180 text-brand scale-110" : "text-dark/40"
                                    )}>
                                        <ChevronDown size={24} strokeWidth={2.5} />
                                    </span>
                                </summary>

                                <AnimatePresence initial={false}>
                                    {isOpen && (
                                        <motion.div
                                            id={`faq-content-${index}`}
                                            role="region"
                                            aria-labelledby={`faq-header-${index}`}
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
                                        >
                                            <div className="p-6 pt-0 text-dark/70 leading-relaxed font-sans border-t border-dark/5 bg-white/50 backdrop-blur-sm">
                                                <p className="text-base md:text-lg">
                                                    {faq.answer}
                                                </p>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </details>
                        );
                    })}
                </div>

                {/* CTA Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="mt-16 bg-brand/5 border border-brand/20 rounded-2xl p-8 md:p-12 text-center relative overflow-hidden"
                >
                    <div className="relative z-10">
                        <div className="w-16 h-16 bg-brand/10 rounded-full flex items-center justify-center mx-auto mb-6 text-brand" aria-hidden="true">
                            <MessageSquare size={32} />
                        </div>
                        <h3 className="text-2xl md:text-3xl font-heading font-bold text-dark mb-4">
                            Still have questions?
                        </h3>
                        <p className="text-dark/70 text-lg mb-8 max-w-xl mx-auto leading-relaxed">
                            Book your tattoo consultation on WhatsApp now and get expert advice for your next piece.
                        </p>
                        <Button
                            href={`https://wa.me/${(studioInfo.phone || "").replace(/[^0-9]/g, "")}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            variant="primary"
                            size="lg"
                            className="bg-brand text-dark shadow-lg shadow-brand/20 group"
                        >
                            <WhatsAppIcon size={24} className="group-hover:rotate-12 transition-transform" aria-hidden="true" />
                            Message on WhatsApp
                        </Button>
                    </div>

                    {/* Decorative elements */}
                    <div className="absolute top-0 right-0 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-brand/10 rounded-full blur-2xl pointer-events-none" aria-hidden="true" />
                    <div className="absolute bottom-0 left-0 translate-x-1/2 translate-y-1/2 w-32 h-32 bg-brand/10 rounded-full blur-2xl pointer-events-none" aria-hidden="true" />
                </motion.div>
            </div>

            {/* Background Accent */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none -z-10 opacity-[0.03]" aria-hidden="true">
                <div className="absolute top-0 right-0 w-96 h-96 bg-brand rounded-full blur-[120px]" />
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand rounded-full blur-[120px]" />
            </div>

            {/* SEO Schema Injection - Placed in Component Footer as requested */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
        </section>
    );
};
