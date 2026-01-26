import { notFound } from "next/navigation";
import { tattooStyles } from "@/lib/data";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { Metadata } from "next";

// Force static generation for these paths
export function generateStaticParams() {
    return tattooStyles.map((style) => ({
        slug: style.slug,
    }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    const style = tattooStyles.find((s) => s.slug === slug);
    if (!style) return {};

    return {
        title: style.seo.title,
        description: style.seo.description,
        keywords: style.seo.keywords,
    };
}

export default async function StylePage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const style = tattooStyles.find((s) => s.slug === slug);

    if (!style) {
        notFound();
    }

    return (
        <main className="bg-white min-h-screen">
            <Navbar />

            {/* Hero Section */}
            <section className="relative h-[60vh] w-full flex items-center justify-center overflow-hidden bg-neutral-50">
                <div className={`absolute inset-0 ${style.heroImage} opacity-10`} />
                <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-white/60" />
                <div className="container relative z-10 px-6 text-center pt-20">
                    <h1 className="font-heading font-bold text-5xl md:text-7xl lg:text-8xl text-dark uppercase tracking-wider mb-4">
                        {style.name}
                    </h1>
                    <p className="text-dark/60 text-lg md:text-xl font-medium tracking-widest uppercase">
                        {style.shortDesc}
                    </p>
                </div>
            </section>

            {/* Content Section */}
            <section className="py-20 md:py-24">
                <div className="container mx-auto px-6 max-w-5xl">
                    <div className="grid md:grid-cols-2 gap-12 items-start">

                        {/* Left: Description & Features */}
                        <div className="space-y-8">
                            <h2 className="text-3xl font-heading font-bold text-dark">About {style.name}</h2>
                            <p className="text-dark/70 text-lg leading-relaxed font-sans">
                                {style.description}
                            </p>

                            <div className="bg-dark-gray p-8 rounded-lg border border-dark/5">
                                <h3 className="text-xl font-heading font-bold text-dark mb-6">Key Details</h3>
                                <div className="space-y-4">
                                    {style.features.map((feature) => (
                                        <div key={feature.label} className="flex justify-between items-center border-b border-dark/10 pb-2 last:border-0 last:pb-0">
                                            <span className="text-dark/50 font-medium">{feature.label}</span>
                                            <span className="text-dark font-semibold text-right">{feature.value}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="pt-4">
                                <Button size="lg">Book {style.name} Consultation</Button>
                            </div>
                        </div>

                        {/* Right: Gallery Preview */}
                        <div className="grid grid-cols-2 gap-4">
                            {style.gallery.map((img) => (
                                <div key={img} className="aspect-square bg-dark-gray rounded-sm overflow-hidden border border-dark/5 relative group">
                                    <div className="absolute inset-0 bg-neutral-200" />
                                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-dark/20 text-white font-heading text-sm uppercase tracking-widest">
                                        View
                                    </div>
                                </div>
                            ))}
                            {/* CTA Card in Grid */}
                            <div className="aspect-square bg-brand flex items-center justify-center p-6 text-center cursor-pointer hover:bg-brand/90 transition-colors">
                                <p className="font-heading font-bold text-dark uppercase tracking-wider">
                                    View Full Gallery
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* Related Styles (Simple Navigation) */}
            <section className="py-20 bg-dark-gray border-t border-dark/5">
                <div className="container mx-auto px-6">
                    <SectionHeading title="More Styles" subtitle="Explore" />
                    {/* Re-use grid logic or simplified list here. Using a simple link list for now to save complexity */}
                    <div className="flex flex-wrap justify-center gap-4">
                        {tattooStyles.filter(s => s.slug !== style.slug).map(s => (
                            <a key={s.id} href={`/styles/${s.slug}`} className="px-6 py-3 bg-white border border-dark/10 rounded-full text-dark hover:bg-dark hover:text-white transition-colors uppercase tracking-widest text-sm font-medium">
                                {s.name}
                            </a>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
