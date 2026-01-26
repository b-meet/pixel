import { SectionHeading } from "@/components/ui/SectionHeading";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Tattoo Gallery | Pixel Tattoo Surat",
    description: "Explore our portfolio of custom tattoos including realism, minimalist, geometric, and cover-up work done at Pixel Tattoo Surat.",
};

const galleryImages = [
    { id: 1, style: "Realism", description: "Portrait of a Lion", placeholderColor: "bg-neutral-800" },
    { id: 2, style: "Fine Line", description: "Floral Forearm", placeholderColor: "bg-neutral-700" },
    { id: 3, style: "Geometric", description: "Mandala Back Piece", placeholderColor: "bg-neutral-600" },
    { id: 4, style: "Minimalist", description: "Small Wrist Symbol", placeholderColor: "bg-neutral-500" },
    { id: 5, style: "Cover Up", description: "Rose covering text", placeholderColor: "bg-neutral-400" },
    { id: 6, style: "Black & Grey", description: "Sleeve Work", placeholderColor: "bg-neutral-300" },
    { id: 7, style: "Realism", description: "Eye Detail", placeholderColor: "bg-neutral-800" },
    { id: 8, style: "Fine Line", description: "Butterfly", placeholderColor: "bg-neutral-700" },
    { id: 9, style: "Geometric", description: "Sacred Geo Sleeve", placeholderColor: "bg-neutral-600" },
];

export default function GalleryPage() {
    return (
        <main className="bg-white min-h-screen pt-24 pb-20">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <SectionHeading title="Our Masterpieces" subtitle="Gallery" />
                    <p className="max-w-2xl mx-auto text-dark/60 mt-4">
                        Browse through our latest work. Filter by style to find inspiration for your next tattoo.
                    </p>
                </div>

                {/* Filter Tabs (Placeholder for interactivity) */}
                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {["All", "Realism", "Fine Line", "Geometric", "Black & Grey", "Minimalist"].map((filter) => (
                        <button key={filter} className="px-6 py-2 rounded-full border border-dark/10 hover:border-brand hover:text-brand transition-colors text-sm uppercase tracking-wider font-medium">
                            {filter}
                        </button>
                    ))}
                </div>

                {/* Gallery Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {galleryImages.map((img) => (
                        <div key={img.id} className="group relative aspect-square bg-neutral-100 overflow-hidden rounded-sm cursor-pointer">
                            {/* Placeholder */}
                            <div className={`absolute inset-0 ${img.placeholderColor} flex items-center justify-center`}>
                                <span className="text-white/20 font-heading text-4xl font-bold uppercase">{img.style}</span>
                            </div>

                            {/* Overlay */}
                            <div className="absolute inset-0 bg-dark/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-6 text-center">
                                <span className="text-brand text-xs uppercase tracking-widest font-bold mb-2">{img.style}</span>
                                <h3 className="text-white text-xl font-heading font-bold">{img.description}</h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
}
