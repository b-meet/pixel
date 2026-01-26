import { notFound } from "next/navigation";
import Link from "next/link";
import { blogPosts } from "@/lib/data";
import { Button } from "@/components/ui/Button";
import { ArrowLeft, Calendar, Clock, Share2, Tag } from "lucide-react";
import { Metadata } from "next";

export async function generateStaticParams() {
    return blogPosts.map((post) => ({
        slug: post.slug,
    }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    const post = blogPosts.find((p) => p.slug === slug);

    if (!post) {
        return {
            title: "Post Not Found",
        };
    }

    return {
        title: `${post.title} | Pixel Tattoo Blog`,
        description: post.excerpt,
    };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const post = blogPosts.find((p) => p.slug === slug);

    if (!post) {
        notFound();
    }

    return (
        <main className="bg-white min-h-screen pt-24 pb-20">
            {/* Breadcrumb */}
            <div className="container mx-auto px-6 mb-8">
                <Link href="/blog" className="inline-flex items-center text-dark/60 hover:text-brand transition-colors text-sm font-medium uppercase tracking-wider">
                    <ArrowLeft size={16} className="mr-2" /> Back to Blog
                </Link>
            </div>

            <article className="container mx-auto px-6 max-w-4xl">
                {/* Header */}
                <header className="mb-12 text-center">
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand/10 text-brand rounded-full text-xs font-bold uppercase tracking-widest mb-6">
                        <Tag size={12} />
                        {post.category}
                    </div>

                    <h1 className="font-heading font-bold text-3xl md:text-5xl text-dark mb-6 leading-tight">
                        {post.title}
                    </h1>

                    <div className="flex items-center justify-center gap-6 text-sm text-dark/40 uppercase tracking-wider font-medium">
                        <span className="flex items-center gap-2"><Calendar size={14} /> {post.date}</span>
                        <span className="flex items-center gap-2"><Clock size={14} /> {post.readTime}</span>
                    </div>
                </header>

                {/* Featured Image */}
                <div className="aspect-video w-full bg-neutral-100 rounded-sm mb-12 flex items-center justify-center relative overflow-hidden border border-dark/5">
                    <span className="text-dark/10 font-heading text-6xl font-bold uppercase tracking-widest opacity-50">Article Image</span>
                </div>

                {/* Content Body */}
                <div className="prose prose-lg max-w-none text-dark/80 prose-headings:font-heading prose-headings:font-bold prose-headings:text-dark prose-a:text-brand prose-a:no-underline hover:prose-a:underline">
                    <p className="lead text-xl text-dark/60 mb-8 border-l-4 border-brand pl-6 italic">
                        {post.excerpt}
                    </p>
                    {/* Placeholder content logic since data.ts has truncated content */}
                    {post.content === "..." ? (
                        <>
                            <p>
                                Getting a tattoo is an exciting journey, but it comes with responsibilities. Whether you are getting your first piece or adding to your collection, understanding the process is key to a great result.
                            </p>
                            <h2>Choosing the Right Artist</h2>
                            <p>
                                In a city like Surat, you have options. But cleanliness, style, and rapport matter. Look for portfolios that match your desired style. If you want a portrait, don't go to someone who only posts tribal designs.
                            </p>
                            <h2>Preparing for Your Appointment</h2>
                            <ul>
                                <li>Get a good night's sleep.</li>
                                <li>Eat a healthy meal beforehand.</li>
                                <li>Stay hydrated.</li>
                                <li>Avoid alcohol for 24 hours.</li>
                            </ul>
                            <p>
                                Your body needs energy to handle the pain and heal effectively.
                            </p>
                            <h2>Aftercare is Everything</h2>
                            <p>
                                Once you leave the studio, the tattoo is 50% done. The other 50% is how you heal it. Follow your artist's instructions religiously. Keep it clean, keep it moisturized, and keep it out of the sun.
                            </p>
                        </>
                    ) : (
                        <div dangerouslySetInnerHTML={{ __html: post.content }} />
                    )}
                </div>

                {/* Footer / Share */}
                <div className="mt-16 pt-8 border-t border-dark/10 flex flex-col md:flex-row items-center justify-between gap-6">
                    <p className="text-dark/60 font-medium">
                        Found this helpful? Share it with a friend.
                    </p>
                    <div className="flex gap-4">
                        <Button variant="outline" size="sm" className="gap-2">
                            <Share2 size={16} /> Share Article
                        </Button>
                    </div>
                </div>

                {/* CTA */}
                <div className="mt-16 bg-neutral-50 p-8 md:p-12 rounded-sm border border-dark/5 text-center">
                    <h3 className="font-heading font-bold text-2xl mb-4">Ready to Ink Your Story?</h3>
                    <p className="text-dark/60 mb-8 max-w-xl mx-auto">
                        Book a free consultation at Pixel Tattoo Surat and let's turn your idea into a masterpiece.
                    </p>
                    <Link href="/#contact">
                        <Button size="lg">Book Consultation</Button>
                    </Link>
                </div>
            </article>
        </main>
    );
}
