import { SectionHeading } from "@/components/ui/SectionHeading";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Tattoo Gallery | Pixel Tattoo Surat",
    description: "Explore our portfolio of custom tattoos including realism, minimalist, geometric, and cover-up work done at Pixel Tattoo Surat.",
};

import { GalleryCard } from "@/components/GalleryCard";
import { ArrowRight, Phone, MapPin } from "lucide-react";
import { studioInfo } from "@/lib/data";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";

const categories = [
    { name: "Custom Tattoo", href: "/services/custom-tattoo", color: "bg-red-900" },
    { name: "Minimalist", href: "/services/minimalist-tattoos", color: "bg-blue-900" },
    { name: "Fine Line", href: "/services/fine-line-tattoos", color: "bg-green-900" },
    { name: "Black & Grey", href: "/services/black-and-grey-tattoos", color: "bg-gray-900" },
    { name: "Cover Ups", href: "/services/cover-up-tattoos", color: "bg-purple-900" },
    { name: "Removal", href: "/services/tattoo-removal", color: "bg-red-950" },
    { name: "Small Tattoos", href: "/styles/small-tattoos", color: "bg-pink-900" },
    { name: "Religious", href: "/styles/religious-tattoos", color: "bg-yellow-900" },
    { name: "Geometric", href: "/styles/geometric-tattoos", color: "bg-indigo-900" },
    { name: "Travel", href: "/styles/travel-tattoos", color: "bg-cyan-900" },
    { name: "Animal", href: "/styles/animal-tattoos", color: "bg-orange-900" },
    { name: "Calligraphy", href: "/styles/calligraphy-tattoos", color: "bg-emerald-900" },
    { name: "Couple", href: "/styles/couple-tattoos", color: "bg-rose-900" },
    { name: "Dot Work", href: "/styles/dot-work-tattoos", color: "bg-teal-900" },
    { name: "Color", href: "/styles/color-tattoos", color: "bg-fuchsia-900" },
];

export default function GalleryPage() {
    return (
        <main className="bg-white min-h-screen pt-24 pb-20">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <SectionHeading title="Explore Our Art" subtitle="The Collection" />
                    <p className="max-w-2xl mx-auto text-dark/60 mt-4">
                        Discover our diverse range of tattoo styles. Select a category to see specific works.
                    </p>
                </div>

                {/* Category Grid Set 1 */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24">
                    {categories.slice(0, 6).map((cat) => (
                        <GalleryCard key={cat.name} {...cat} />
                    ))}
                </div>

                {/* Premium CTA 1: WhatsApp */}
                <div className="relative py-32 mb-24 overflow-hidden rounded-sm">
                    <div className="absolute inset-0 bg-neutral-900" />
                    <div className="absolute inset-0 bg-[url('/pattern.png')] opacity-5" />

                    <div className="relative z-10 container mx-auto px-6 text-center">
                        <span className="text-brand font-medium tracking-[0.2em] uppercase text-sm mb-4 block">Bespoke Designs</span>
                        <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-8 uppercase tracking-wide">
                            Your Vision, <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-neutral-400">Our Ink</span>
                        </h2>
                        <p className="text-white/60 mb-10 max-w-xl mx-auto font-light leading-relaxed">
                            Have a specific concept? Connect directly with our lead artists to discuss your custom piece.
                        </p>
                        <a href={`https://wa.me/${(studioInfo.phone || "").replace(/[^0-9]/g, '')}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 bg-brand text-dark px-10 py-4 rounded-none font-bold uppercase tracking-widest hover:bg-white transition-all duration-300">
                            <WhatsAppIcon size={20} /> Start Chat
                        </a>
                    </div>
                </div>

                {/* Category Grid Set 2 */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24">
                    {categories.slice(6, 12).map((cat) => (
                        <GalleryCard key={cat.name} {...cat} />
                    ))}
                </div>

                {/* Premium CTA 2: Call */}
                <div className="relative py-32 mb-24 overflow-hidden rounded-sm">
                    {/* Parallax-like fixed background effect opportunity, here just using simple relative for now */}
                    <div className="absolute inset-0 bg-neutral-100" />

                    <div className="relative z-10 container mx-auto px-6 text-center">
                        <span className="text-dark/50 font-medium tracking-[0.2em] uppercase text-sm mb-4 block">Consultation</span>
                        <h2 className="text-3xl md:text-5xl font-heading font-bold text-dark mb-8 uppercase tracking-wide">
                            Expert <span className="text-brand">Guidance</span>
                        </h2>
                        <p className="text-dark/60 mb-10 max-w-xl mx-auto font-light leading-relaxed">
                            Not sure where to start? Speak with our tattoo experts to refine your ideas and book a session.
                        </p>
                        <a href={`tel:${studioInfo.phone}`} className="inline-flex items-center gap-3 border border-dark text-dark px-10 py-4 rounded-none font-bold uppercase tracking-widest hover:bg-dark hover:text-white transition-all duration-300">
                            <Phone size={20} /> Call Studio
                        </a>
                    </div>
                </div>

                {/* Category Grid Set 3 */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24">
                    {categories.slice(12, 15).map((cat) => (
                        <GalleryCard key={cat.name} {...cat} />
                    ))}
                </div>

                {/* Premium CTA 3: Location */}
                <div className="relative py-32 mb-10 overflow-hidden rounded-sm group">
                    <div className="absolute inset-0 bg-dark" />
                    <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-neutral-700 via-dark to-dark" />

                    <div className="relative z-10 container mx-auto px-6 text-center">
                        <MapPin size={48} className="text-brand mx-auto mb-6 opacity-80" />
                        <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-6 uppercase tracking-wide">
                            Visit The Studio
                        </h2>
                        <p className="text-white/60 mb-10 max-w-xl mx-auto font-light leading-relaxed">
                            Experience our world-class hygiene standards and creative atmosphere in Surat.
                        </p>
                        <a href={studioInfo.googleMapsUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 bg-transparent border border-white/20 text-white px-10 py-4 rounded-none font-bold uppercase tracking-widest hover:border-brand hover:text-brand transition-all duration-300">
                            Get Directions <ArrowRight size={20} />
                        </a>
                    </div>
                </div>
            </div>
        </main>
    );
}
