import { SectionHeading } from "@/components/ui/SectionHeading";
import { faqs } from "@/lib/data";
import { HelpCircle } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Tattoo FAQs | Common Questions | Pixel Tattoo Surat",
    description: "Answers to common questions about tattoo pain, pricing, aftercare, and removal at Pixel Tattoo Surat.",
};

export default function FAQPage() {
    return (
        <main className="bg-white min-h-screen pt-24 pb-20">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <SectionHeading title="Common Questions" subtitle="FAQ" />
                    <p className="max-w-2xl mx-auto text-dark/60 mt-4">
                        Honest answers to help you feel confident about your tattoo journey.
                    </p>
                </div>

                <div className="max-w-3xl mx-auto space-y-12">
                    {faqs.map((section, idx) => (
                        <div key={idx}>
                            <h3 className="text-2xl font-heading font-bold text-dark mb-6 flex items-center gap-3 border-b border-brand/20 pb-2">
                                <span className="w-2 h-8 bg-brand rounded-full inline-block" />
                                {section.category}
                            </h3>
                            <div className="space-y-4">
                                {section.items.map((item, itemIdx) => (
                                    <div key={itemIdx} className="bg-neutral-50 rounded-sm p-6 border border-dark/5 hover:border-brand/30 transition-all">
                                        <h4 className="flex items-start gap-3 font-bold text-dark text-lg mb-2">
                                            <HelpCircle className="text-brand flex-shrink-0 mt-1" size={18} />
                                            {item.q}
                                        </h4>
                                        <p className="text-dark/70 leading-relaxed pl-8">
                                            {item.a}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
}
