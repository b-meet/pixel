import { TattooStyles } from "@/components/TattooStyles";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Tattoo Design Styles in Surat | Pixel Tattoo Expertise",
    description: "Discover the best tattoo designs and styles in Surat. We specialize in Realism, Geometric, Minimalist, and custom scripts. View our curated style collection.",
};

import { BreadcrumbSchema } from "@/components/BreadcrumbSchema";

export default function StylesPage() {
    return (
        <main className="bg-white min-h-screen pt-24 pb-20">
            <BreadcrumbSchema items={[
                { name: "Home", item: "/" },
                { name: "Styles", item: "/styles" }
            ]} />
            <TattooStyles />
            <section className="container mx-auto px-6 mt-12 text-center">
                <p className="text-dark/60 max-w-2xl mx-auto italic">
                    "Every style has a story. Let us help you tell yours with precision and artistry."
                </p>
            </section>
        </main>
    );
}
