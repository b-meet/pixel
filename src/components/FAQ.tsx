"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { SectionHeading } from "./ui/SectionHeading";
import { cn } from "@/lib/utils";

const faqs = [
    {
        question: "Do you accept walk-ins?",
        answer: "We primarily work by appointment to ensure every client gets our undivided attention and the highest quality artwork. However, you can check our availability for same-day consultations."
    },
    {
        question: "How do I book a consultation?",
        answer: "You can book a consultation through our website or contact us via WhatsApp. We require a deposit to secure your booking, which is deducted from the final price."
    },
    {
        question: "Is it painful?",
        answer: "Pain varies by person and placement, but we use modern techniques and numbing solutions (upon request) to make the experience as comfortable as possible."
    },
    {
        question: "What is your pricing?",
        answer: "Our minimum charge covers sterilization and setup. Custom pieces are quoted based on size, detail, and placement. We provide a transparent quote during your consultation."
    }
];

export const FAQ = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section id="faq" className="py-24 bg-white relative z-10">
            <div className="container mx-auto px-6 max-w-4xl">
                <SectionHeading title="Common Questions" subtitle="FAQ" />

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div key={index} className="border border-dark/5 rounded-lg overflow-hidden bg-dark-gray">
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="w-full flex items-center justify-between p-6 text-left hover:bg-black/5 transition-colors"
                            >
                                <span className={cn("text-lg md:text-xl font-medium", openIndex === index ? "text-brand" : "text-dark")}>
                                    {faq.question}
                                </span>
                                <span className={cn("text-dark/50 transition-transform duration-300", openIndex === index && "rotate-180 text-brand")}>
                                    {openIndex === index ? <Minus size={20} /> : <Plus size={20} />}
                                </span>
                            </button>

                            <AnimatePresence>
                                {openIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <div className="p-6 pt-0 text-dark/70 leading-relaxed font-sans border-t border-dark/5">
                                            {faq.answer}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
