import { studioInfo } from "@/lib/data";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { CheckCircle2, Heart, ShieldCheck, User } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "About Pixel Tattoo | Best Tattoo Studio in Surat",
    description: "Learn about Pixel Tattoo's journey, our commitment to hygiene, and the artists behind the ink. We believe every tattoo tells a unique story.",
};

export default function AboutPage() {
    return (
        <main className="bg-white min-h-screen pt-24 pb-20">
            {/* Hero Section */}
            <section className="container mx-auto px-6 mb-20">
                <div className="max-w-4xl mx-auto text-center">
                    <span className="text-brand font-medium tracking-[0.3em] uppercase text-sm mb-4 block">Our Story</span>
                    <h1 className="font-heading font-bold text-4xl md:text-6xl text-dark mb-8 leading-tight">
                        More Than Just <span className="text-brand">Ink</span>. <br />
                        It's About <span className="italic font-serif text-dark/80">Self-Expression</span>.
                    </h1>
                    <p className="text-xl text-dark/60 leading-relaxed font-light">
                        Founded in 2018 in the heart of Surat, Pixel Tattoo began with a simple mission: to create a space where art meets safety, and where every client feels heard, respected, and inspired.
                    </p>
                </div>
            </section>

            {/* Values Section */}
            <section className="bg-neutral-50 py-20 border-y border-dark/5">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                        <div className="bg-white p-8 rounded-sm shadow-sm border border-dark/5 text-center">
                            <div className="w-16 h-16 bg-brand/10 text-brand rounded-full flex items-center justify-center mx-auto mb-6">
                                <ShieldCheck size={32} />
                            </div>
                            <h3 className="font-heading font-bold text-xl mb-4">Hospital-Grade Hygiene</h3>
                            <p className="text-dark/60">
                                Your safety is non-negotiable. We adhere to strict sterilization protocols, strictly single-use needles, and premium certified inks.
                            </p>
                        </div>
                        <div className="bg-white p-8 rounded-sm shadow-sm border border-dark/5 text-center">
                            <div className="w-16 h-16 bg-brand/10 text-brand rounded-full flex items-center justify-center mx-auto mb-6">
                                <Heart size={32} />
                            </div>
                            <h3 className="font-heading font-bold text-xl mb-4">Client-First Approach</h3>
                            <p className="text-dark/60">
                                No ego, no judgment. Whether it's your first tattoo or your 50th, we treat you with patience, respect, and care.
                            </p>
                        </div>
                        <div className="bg-white p-8 rounded-sm shadow-sm border border-dark/5 text-center">
                            <div className="w-16 h-16 bg-brand/10 text-brand rounded-full flex items-center justify-center mx-auto mb-6">
                                <User size={32} />
                            </div>
                            <h3 className="font-heading font-bold text-xl mb-4">Custom Artistry</h3>
                            <p className="text-dark/60">
                                We don't copy-paste. We design custom pieces tailored to your anatomy, story, and aesthetic preferences.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Meet the Artist */}
            <section className="py-20 container mx-auto px-6">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="relative h-[600px] bg-dark-gray rounded-sm overflow-hidden order-2 md:order-1">
                        <div className="absolute inset-0 bg-neutral-200 flex items-center justify-center">
                            <span className="text-dark/20 uppercase tracking-widest">Artist Photo</span>
                        </div>
                    </div>

                    <div className="order-1 md:order-2">
                        <SectionHeading title="The Artist" subtitle="Meet the Master" center={false} />
                        <h3 className="text-2xl font-bold text-dark mb-4">Ravi Patel (Founder & Lead Artist)</h3>
                        <p className="text-dark/70 mb-6 leading-relaxed">
                            With a background in Fine Arts and over 8 years in the tattoo industry, Ravi brings a unique perspective to tattooing. His specialty lies in hyper-realism and intricate fine-line work.
                        </p>
                        <p className="text-dark/70 mb-8 leading-relaxed">
                            "I believe a tattoo is a collaboration. It's an honor to be trusted with someone's skin and story. My goal is to give you a piece of art that you'll be proud to wear forever."
                        </p>

                        <div className="space-y-3 mb-8">
                            <div className="flex items-center gap-3 text-dark/80">
                                <CheckCircle2 size={18} className="text-brand" /> <span>Certified Safety & Hygiene Pro</span>
                            </div>
                            <div className="flex items-center gap-3 text-dark/80">
                                <CheckCircle2 size={18} className="text-brand" /> <span>Award Winning Artist (2023)</span>
                            </div>
                            <div className="flex items-center gap-3 text-dark/80">
                                <CheckCircle2 size={18} className="text-brand" /> <span>Specialist in Cover-ups</span>
                            </div>
                        </div>

                        <Link href="/#contact">
                            <Button>Book with Ravi</Button>
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}
