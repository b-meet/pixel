import Link from "next/link";
import NextImage from "next/image";
import { studioInfo, services } from "@/lib/data";

export const Footer = () => {
    return (
        <footer className="bg-neutral-900 pt-20 pb-10 text-white border-t border-white/5">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Brand Column */}
                    <div>
                        <Link href="/" className="inline-block mb-6">
                            <div className="relative h-16 w-56">
                                <NextImage
                                    src="/logo.png"
                                    alt="Pixel Tattoo Logo"
                                    fill
                                    className="object-contain"
                                />
                            </div>
                        </Link>
                        <p className="text-gray-400 mb-6 leading-relaxed">
                            {studioInfo.description}
                        </p>
                        <div className="space-y-2 text-sm text-gray-400">
                            <p>{studioInfo.fullAddress}</p>
                            <p>{studioInfo.email}</p>
                            <p>{studioInfo.phone}</p>
                        </div>
                    </div>

                    {/* Services Column */}
                    <div>
                        <h3 className="text-lg font-bold mb-6 tracking-widest">SERVICES</h3>
                        <ul className="space-y-3">
                            {services.map((service) => (
                                <li key={service.id}>
                                    <Link
                                        href={`/services/${service.slug}`}
                                        className="text-gray-400 hover:text-brand transition-colors text-sm"
                                    >
                                        {service.title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Quick Links Column */}
                    <div>
                        <h3 className="text-lg font-bold mb-6 tracking-widest">EXPLORE</h3>
                        <ul className="space-y-3">
                            <li><Link href="/gallery" className="text-gray-400 hover:text-brand transition-colors text-sm">Tattoo Gallery</Link></li>
                            <li><Link href="/about" className="text-gray-400 hover:text-brand transition-colors text-sm">Our Story</Link></li>
                            <li><Link href="/blog" className="text-gray-400 hover:text-brand transition-colors text-sm">Blog & Tips</Link></li>
                            <li><Link href="/faq" className="text-gray-400 hover:text-brand transition-colors text-sm">FAQ</Link></li>
                            <li><Link href="/#contact" className="text-gray-400 hover:text-brand transition-colors text-sm">Book Consultation</Link></li>
                        </ul>
                    </div>

                    {/* Hours / Socials (Placeholder for now) */}
                    <div>
                        <h3 className="text-lg font-bold mb-6 tracking-widest">STUDIO HOURS</h3>
                        <ul className="space-y-2 text-gray-400 text-sm mb-8">
                            <li className="flex justify-between"><span>Mon - Sat</span> <span>11:00 - 20:00</span></li>
                            <li className="flex justify-between"><span>Sunday</span> <span>By Appointment</span></li>
                        </ul>
                        <div className="flex space-x-4">
                            <a href={studioInfo.instagram} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-brand transition-colors">Instagram</a>
                            <a href="#" className="text-gray-400 hover:text-brand transition-colors">Facebook</a>
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
