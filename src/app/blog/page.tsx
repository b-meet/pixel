import { SectionHeading } from "@/components/ui/SectionHeading";
import { blogPosts } from "@/lib/data";
import Link from "next/link";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Tattoo Blog & Tips | Pixel Tattoo Surat",
    description: "Expert advice on tattoo aftercare, design ideas, and removal from Surat's top tattoo artists.",
};

export default function BlogPage() {
    return (
        <main className="bg-white min-h-screen pt-24 pb-20">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <span className="text-brand font-medium tracking-[0.3em] uppercase text-sm mb-4 block">Knowledge Hub</span>
                    <SectionHeading title="Tattoo Insights" subtitle="Blog" />
                    <p className="max-w-2xl mx-auto text-dark/60 mt-4">
                        Everything you need to know about getting inked, healing, and removal.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {blogPosts.map((post) => (
                        <div key={post.id} className="group bg-white rounded-sm border border-dark/5 hover:border-brand/30 transition-colors overflow-hidden flex flex-col h-full shadow-sm hover:shadow-md">
                            {/* Image Placeholder */}
                            <div className="aspect-video bg-neutral-100 flex items-center justify-center relative overflow-hidden">
                                <span className="text-dark/10 font-heading font-bold uppercase tracking-widest">{post.category}</span>
                                <div className="absolute inset-0 bg-brand/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                            </div>

                            <div className="p-6 flex flex-col flex-grow">
                                <div className="flex items-center gap-4 text-xs text-dark/40 mb-3 uppercase tracking-wider font-medium">
                                    <span className="flex items-center gap-1"><Calendar size={12} /> {post.date}</span>
                                    <span className="flex items-center gap-1"><Clock size={12} /> {post.readTime}</span>
                                </div>

                                <h3 className="text-xl font-heading font-bold text-dark mb-3 group-hover:text-brand transition-colors line-clamp-2">
                                    <Link href={`/blog/${post.slug}`}>
                                        {post.title}
                                    </Link>
                                </h3>

                                <p className="text-dark/60 text-sm leading-relaxed mb-6 line-clamp-3">
                                    {post.excerpt}
                                </p>

                                <div className="mt-auto">
                                    <Link href={`/blog/${post.slug}`} className="inline-flex items-center text-sm font-bold text-brand uppercase tracking-widest hover:gap-2 transition-all">
                                        Read More <ArrowRight size={16} className="ml-1" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
}
