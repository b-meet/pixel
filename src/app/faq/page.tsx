import { FAQ } from "@/components/FAQ";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Tattoo FAQ | Best Tattoo Studio in Surat | Pixel Tattoo",
    description: "Find answers to frequently asked questions about tattoos in Surat, including pricing, hygiene, custom designs, and safety at Pixel Tattoo.",
    keywords: ["Tattoo FAQ Surat", "Best Tattoo Studio Surat", "Tattoo Pricing Surat", "Hygienic Tattooing Surat"],
};

export default function FAQPage() {
    return (
        <main className="bg-white min-h-screen pt-20">
            <FAQ />
        </main>
    );
}
