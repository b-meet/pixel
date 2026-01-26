import { notFound } from "next/navigation";
import Link from "next/link";
import { services, studioInfo } from "@/lib/data";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ArrowLeft, CheckCircle2, HelpCircle } from "lucide-react";
import { Metadata } from "next";

export async function generateStaticParams() {
    return services.map((service) => ({
        slug: service.slug,
    }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    const service = services.find((s) => s.slug === slug);

    if (!service) {
        return {
            title: "Service Not Found",
        };
    }

    return {
        title: `${service.title} in Surat | ${studioInfo.name}`,
        description: service.shortDesc + " " + service.fullDescription.substring(0, 100) + "...",
    };
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const service = services.find((s) => s.slug === slug);

    if (!service) {
        notFound();
    }

    return (
        <main className="bg-white min-h-screen pt-24 pb-20">
            {/* Breadcrumb / Back */}
            <div className="container mx-auto px-6 mb-8">
                <Link href="/#services" className="inline-flex items-center text-dark/60 hover:text-brand transition-colors text-sm font-medium uppercase tracking-wider">
                    <ArrowLeft size={16} className="mr-2" /> Back to Services
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
                            <Link href="/gallery">
                                <Button variant="outline" size="lg">View Gallery</Button>
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

            {/* Process Section */}
            <section className="bg-neutral-50 py-20 border-y border-dark/5">
                <div className="container mx-auto px-6">
                    <SectionHeading title="How We Work" subtitle="The Process" />

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
                        {service.process.map((step, index) => (
                            <div key={index} className="relative">
                                {/* Connector Line */}
                                {index !== service.process.length - 1 && (
                                    <div className="hidden lg:block absolute top-6 left-full w-full h-0.5 bg-dark/10 -ml-4 z-0" />
                                )}

                                <div className="relative z-10 bg-white p-6 rounded-sm border border-dark/5 shadow-sm h-full">
                                    <div className="w-12 h-12 bg-dark text-white rounded-full flex items-center justify-center font-heading font-bold text-xl mb-4 shadow-md">
                                        {index + 1}
                                    </div>
                                    <h3 className="font-heading font-bold text-xl text-dark mb-3">{step.title}</h3>
                                    <p className="text-dark/60 text-sm leading-relaxed">
                                        {step.desc}
                                    </p>
                                </div>
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

                    <div className="mt-12 text-center">
                        <Link href="/faq">
                            <span className="text-dark/50 text-sm hover:text-brand transition-colors cursor-pointer border-b border-dark/20 hover:border-brand">
                                View all FAQs
                            </span>
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}
