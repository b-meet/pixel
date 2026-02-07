import Link from "next/link";
import NextImage from "next/image";
import { studioInfo, allCategories } from "@/lib/data";

export const Footer = () => {
    return (
        <footer className="bg-neutral-900 pt-20 pb-10 text-white border-t border-white/5">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
                    {/* Brand Column (Left - 3 Cols) */}
                    <div className="lg:col-span-3">
                        <Link href="/" className="inline-block mb-6">
                            <div className="relative h-16 w-56">
                                <NextImage
                                    src="/logo.png"
                                    alt="Pixel Tattoo Logo"
                                    fill
                                    className="object-contain object-left"
                                />
                            </div>
                        </Link>
                        <p className="text-gray-400 mb-6 leading-relaxed text-sm pr-4">
                            {studioInfo.description}
                        </p>
                        <div className="space-y-2 text-sm text-gray-400">
                            <p>{studioInfo.fullAddress}</p>
                            <p>{studioInfo.email}</p>
                            <p>{studioInfo.phone}</p>
                        </div>
                    </div>

                    {/* Services Column (Middle - 5 Cols) */}
                    <div className="lg:col-span-5">
                        <h3 className="text-lg font-bold mb-6 tracking-widest text-brand">SERVICES</h3>
                        <ul className="grid grid-cols-2 gap-x-4 gap-y-2">
                            {allCategories.map((cat) => (
                                <li key={cat.name}>
                                    <Link
                                        href={cat.href}
                                        className="text-gray-400 hover:text-white transition-colors text-sm"
                                    >
                                        {cat.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Explore Column (Right - 2 Cols) */}
                    <div className="lg:col-span-2">
                        <h3 className="text-lg font-bold mb-6 tracking-widest text-brand">EXPLORE</h3>
                        <ul className="space-y-3">
                            <li><Link href="/" className="text-gray-400 hover:text-white transition-colors text-sm">The Studio</Link></li>
                            <li><Link href="/tattoo-categories" className="text-gray-400 hover:text-white transition-colors text-sm">The Ink Gallery</Link></li>
                            <li><Link href="/about" className="text-gray-400 hover:text-white transition-colors text-sm">Inside Pixel</Link></li>
                            <li><Link href="/blog" className="text-gray-400 hover:text-white transition-colors text-sm">The Ink Stories</Link></li>
                            <li><Link href="/faq" className="text-gray-400 hover:text-white transition-colors text-sm">FAQ</Link></li>
                        </ul>
                    </div>

                    {/* Hours & Socials (Far Right - 2 Cols) */}
                    <div className="lg:col-span-2">
                        <div className="flex flex-col gap-8">
                            <div>
                                <h3 className="text-lg font-bold mb-6 tracking-widest text-brand">HOURS</h3>
                                <ul className="space-y-2 text-gray-400 text-sm">
                                    <li className="flex justify-between"><span>Mon-Sat</span> <span>11-8</span></li>
                                    <li className="flex justify-between"><span>Sun</span> <span>Book</span></li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="text-lg font-bold mb-6 tracking-widest text-brand">FOLLOW</h3>
                                <div className="flex flex-col space-y-2">
                                    <a href={studioInfo.instagram} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors text-sm font-medium uppercase tracking-wider">Instagram</a>
                                    <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm font-medium uppercase tracking-wider">Facebook</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-gray-600 text-sm">
                        © {new Date().getFullYear()} {studioInfo.name}. All rights reserved.
                    </p>
                    <div className="flex gap-6 text-sm text-gray-600">
                        <Link href="#" className="hover:text-brand">Privacy Policy</Link>
                        <Link href="#" className="hover:text-brand">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};
