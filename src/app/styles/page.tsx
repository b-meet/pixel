import { TattooStyles } from "@/components/TattooStyles";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Tattoo Styles | Our Expertise | Pixel Tattoo Surat",
    description: "Explore the wide range of tattoo styles we specialize in at Pixel Tattoo Surat, from hyper-realism to minimalist fine-line art.",
};

export default function StylesPage() {
    return (
        <main className="bg-white min-h-screen pt-24 pb-20">
            <TattooStyles />
            <section className="container mx-auto px-6 mt-12 text-center">
                <p className="text-dark/60 max-w-2xl mx-auto italic">
                    "Every style has a story. Let us help you tell yours with precision and artistry."
                </p>
            </section>
        </main>
    );
}
