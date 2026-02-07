import { notFound } from "next/navigation";
import Link from "next/link";
import { services, studioInfo, tattooStyles } from "@/lib/data";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ArrowLeft, CheckCircle2, HelpCircle, Phone } from "lucide-react";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";
import { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { MasonryGallery } from "@/components/MasonryGallery";

// Generate params for both services and styles
export async function generateStaticParams() {
    const serviceParams = services.map((service) => ({
        slug: service.slug,
    }));
    const styleParams = tattooStyles.map((style) => ({
        slug: style.slug,
    }));
    return [...serviceParams, ...styleParams];
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;

    // Check Services
    const service = services.find((s) => s.slug === slug);
    if (service) {
        return {
            title: `${service.title} in Surat | ${studioInfo.name}`,
            description: service.shortDesc + " " + service.fullDescription.substring(0, 100) + "...",
        };
    }

    // Check Styles
    const style = tattooStyles.find((s) => s.slug === slug);
    if (style) {
        return {
            title: style.seo.title,
            description: style.seo.description,
            keywords: style.seo.keywords,
        };
    }

    return {
        title: "Page Not Found",
    };
}

export default async function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;

    // Try to find as Service first
    const service = services.find((s) => s.slug === slug);
    if (service) {
        return (
            <main className="bg-white min-h-screen pt-24 pb-20">
                {/* Breadcrumb / Back */}
                <div className="container mx-auto px-6 mb-8">
                    <Link href="/tattoo-categories" className="inline-flex items-center text-dark/60 hover:text-brand transition-colors text-sm font-medium uppercase tracking-wider">
                        <ArrowLeft size={16} className="mr-2" /> Back to Categories
                    </Link>
                </div>

                {/* Service Header */}
                <section className="container mx-auto px-6 mb-20">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand/10 text-brand rounded-full text-xs font-bold uppercase tracking-widest mb-6">
                                <service.icon size={14} />
                                {service.title} Service
                            </div>
                            <h1 className="font-heading font-bold text-4xl md:text-6xl text-dark mb-6 leading-tight">
                                {service.title} <br />
                                <span className="text-brand">in Surat</span>
                            </h1>
                            <p className="text-xl text-dark/70 leading-relaxed mb-8">
                                {service.fullDescription}
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Link href="/#contact">
                                    <Button size="lg">Book Consultation</Button>
                                </Link>
                            </div>
                        </div>
                        {/* Placeholder Image Area */}
                        <div className="aspect-[4/5] bg-neutral-100 rounded-sm overflow-hidden flex items-center justify-center border border-dark/5 relative">
                            <div className="absolute inset-0 bg-gradient-to-tr from-brand/5 to-transparent mix-blend-multiply" />
                            <service.icon size={64} className="text-dark/10" />
                            <span className="text-dark/20 font-heading text-xl uppercase tracking-widest mt-4">Image Placeholder</span>
                        </div>
                    </div>
                </section>

                {/* Masonry Gallery Section */}
                <section className="bg-neutral-50 py-20 border-y border-dark/5">
                    <div className="container mx-auto px-6">
                        <SectionHeading title="Recent Work" subtitle="Gallery" />

                        <div className="columns-1 md:columns-2 lg:columns-3 gap-2 space-y-2 mt-12">
                            {/* Placeholder Images for Masonry Grid - iterating to create a visual effect */}
                            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => (
                                <div key={item} className="break-inside-avoid rounded-sm overflow-hidden">
                                    <div className={`w-full bg-neutral-200 ${item % 3 === 0 ? 'aspect-[3/4]' : item % 2 === 0 ? 'aspect-square' : 'aspect-[4/5]'}`}></div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Service FAQ */}
                <section className="py-20">
                    <div className="container mx-auto px-6 max-w-4xl">
                        <div className="text-center mb-16">
                            <span className="text-brand font-medium tracking-[0.2em] uppercase text-sm">Got Questions?</span>
                            <h2 className="font-heading font-bold text-3xl md:text-4xl text-dark mt-2">
                                About {service.title}
                            </h2>
                        </div>

                        <div className="space-y-6">
                            {service.faq.map((item, index) => (
                                <div key={index} className="bg-white border border-dark/10 rounded-sm p-6 hover:border-brand/30 transition-colors">
                                    <h3 className="flex items-start gap-4 font-bold text-dark text-lg mb-3">
                                        <HelpCircle className="text-brand mt-1 flex-shrink-0" size={20} />
                                        {item.q}
                                    </h3>
                                    <p className="text-dark/70 leading-relaxed pl-9">
                                        {item.a}
                                    </p>
                                </div>
                            ))}
                        </div>

                        <div className="mt-12 text-center mb-20">
                            <Link href="/faq">
                                <span className="text-dark/50 text-sm hover:text-brand transition-colors cursor-pointer border-b border-dark/20 hover:border-brand">
                                    View all FAQs
                                </span>
                            </Link>
                        </div>

                        {/* Randomized CTA */}
                        {service.slug.length % 2 === 0 ? (
                            <div className="bg-neutral-900 rounded-sm p-8 md:p-12 text-center text-white relative overflow-hidden group">
                                <div className="absolute inset-0 bg-brand/10 opacity-0 group-hover:opacity-20 transition-opacity" />
                                <h3 className="font-heading font-bold text-2xl md:text-3xl mb-4">Ready to ink your story?</h3>
                                <p className="text-white/60 mb-8 max-w-lg mx-auto">Start a conversation with our artists directly on WhatsApp.</p>
                                <a href={`https://wa.me/${(studioInfo.phone || "").replace(/[^0-9]/g, '')}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 bg-brand text-dark px-8 py-3 font-bold uppercase tracking-widest hover:bg-white transition-all duration-300">
                                    <WhatsAppIcon size={20} /> Chat on WhatsApp
                                </a>
                            </div>
                        ) : (
                            <div className="bg-neutral-100 border border-dark/10 rounded-sm p-8 md:p-12 text-center text-dark relative overflow-hidden group">
                                <div className="absolute inset-0 bg-dark/5 opacity-0 group-hover:opacity-10 transition-opacity" />
                                <h3 className="font-heading font-bold text-2xl md:text-3xl mb-4">Have questions? Let's talk.</h3>
                                <p className="text-dark/60 mb-8 max-w-lg mx-auto">Call us directly to discuss your ideas and get expert advice.</p>
                                <a href={`tel:${studioInfo.phone}`} className="inline-flex items-center gap-3 border-2 border-dark text-dark px-8 py-3 font-bold uppercase tracking-widest hover:bg-dark hover:text-white transition-all duration-300">
                                    <Phone size={20} /> Call Now
                                </a>
                            </div>
                        )}
                    </div>
                </section>
            </main>
        );
    }

    // Try to find as Style
    const style = tattooStyles.find((s) => s.slug === slug);
    if (style) {
        return (
            <main className="bg-white min-h-screen pt-24 pb-20">
                {/* Breadcrumb / Back */}
                <div className="container mx-auto px-6 mb-8">
                    <Link href="/tattoo-categories" className="inline-flex items-center text-dark/60 hover:text-brand transition-colors text-sm font-medium uppercase tracking-wider">
                        <ArrowLeft size={16} className="mr-2" /> Back to Categories
                    </Link>
                </div>

                {/* Hero Section */}
                <section className="relative h-[60vh] w-full flex items-center justify-center overflow-hidden bg-neutral-50 rounded-sm mb-20">
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
                <section className="container mx-auto px-6 max-w-5xl mb-20">
                    <div className="grid md:grid-cols-2 gap-12 items-start">

                        {/* Left: Description & Features */}
                        <div className="space-y-8">
                            <h2 className="text-3xl font-heading font-bold text-dark">About {style.name}</h2>
                            <p className="text-dark/70 text-lg leading-relaxed font-sans">
                                {style.description}
                            </p>

                            <div className="bg-neutral-50 p-8 rounded-lg border border-dark/5">
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
                                <Link href="/#contact">
                                    <Button size="lg">Book {style.name} Consultation</Button>
                                </Link>
                            </div>
                        </div>

                        {/* Right: Gallery Preview */}
                        {/* Right: Gallery Preview (Masonry Style) */}
                        <div className="columns-2 gap-2 space-y-2">
                            {style.gallery.map((img: number) => (
                                <div key={img} className="break-inside-avoid bg-neutral-100 rounded-sm overflow-hidden border border-dark/5">
                                    <div className="aspect-[3/4] bg-neutral-200" />
                                </div>
                            ))}
                            {/* CTA Card in Grid */}
                            <div className="break-inside-avoid bg-brand flex items-center justify-center p-6 text-center cursor-pointer hover:bg-brand/90 transition-colors aspect-square rounded-sm">
                                <p className="font-heading font-bold text-dark uppercase tracking-wider">
                                    View Full Gallery
                                </p>
                            </div>
                        </div>

                    </div>
                </section>
            </main>
        );
    }

    return notFound();
}
