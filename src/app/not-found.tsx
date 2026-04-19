import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { studioInfo } from "@/lib/data";
import { Home, MessageSquare, MapPin } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export default function NotFound() {
    return (
        <main className="relative min-h-screen bg-[#121212] flex flex-col items-center justify-center overflow-hidden">
            {/* Premium Antigravity BG */}
            <div className="grain-overlay" />
            <div className="absolute inset-0 radial-glow-area pointer-events-none" />
            
            {/* Background Grid Accent */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none -z-10 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]"></div>


            <div className="container mx-auto px-6 relative z-10 flex flex-col items-center text-center">
                {/* Content Section */}
                <div className="max-w-2xl">
                    <h1 className="font-heading font-bold text-4xl md:text-6xl text-white uppercase tracking-wider mb-6">
                        Lost in the <span className="text-brand">Ink</span>
                    </h1>
                    <p className="text-white/60 text-lg md:text-xl mb-12 leading-relaxed max-w-lg mx-auto">
                        This skin doesn't have a design yet. It seems you've drifted beyond our studio's borders.
                    </p>

                    {/* CTAs */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link href="/">
                            <Button size="lg" className="w-full sm:w-auto gap-2">
                                <Home size={18} /> Back to Studio
                            </Button>
                        </Link>
                        
                        <a href={`https://wa.me/${(studioInfo.phone || "").replace(/[^0-9]/g, "")}`} target="_blank" rel="noopener noreferrer">
                            <Button variant="outline" size="lg" className="w-full sm:w-auto border-white/20 text-white hover:bg-white/10 gap-2">
                                <MessageSquare size={18} /> Chat with Artists
                            </Button>
                        </a>

                        <a href={studioInfo.googleMapsUrl} target="_blank" rel="noopener noreferrer">
                            <Button variant="outline" size="lg" className="w-full sm:w-auto border-white/20 text-white hover:bg-white/10 gap-2">
                                <MapPin size={18} /> Find Shop
                            </Button>
                        </a>
                    </div>
                </div>
            </div>

            {/* Footer Tagline */}
            <div className="absolute bottom-12 text-white/20 text-xs font-bold uppercase tracking-[0.4em] pointer-events-none">
                Pixel Tattoo Surat • Precision & Artistry
            </div>
        </main>
    );
}
