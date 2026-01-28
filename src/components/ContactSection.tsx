"use client";

import { MapPin, Phone, Mail, Instagram, Facebook } from "lucide-react";
import { SectionHeading } from "./ui/SectionHeading";
import { Button } from "./ui/Button";
import { studioInfo } from "@/lib/data";

export const ContactSection = () => {
    return (
        <section id="contact" className="py-24 bg-light-gray relative">
            <div className="container mx-auto px-6">
                <SectionHeading title="Visit The Studio" subtitle="Contact Us" />

                <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
                    {/* Contact Info */}
                    <div className="space-y-8">
                        <h3 className="text-3xl font-heading font-bold text-dark uppercase">
                            Get In Touch
                        </h3>
                        <p className="text-dark/60 text-lg leading-relaxed">
                            Ready to start your journey? Book a consultation or visit our studio in the heart of Surat.
                        </p>

                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <MapPin className="text-brand shrink-0 mt-1" />
                                <div>
                                    <h4 className="text-dark font-medium uppercase tracking-wider mb-1">Address</h4>
                                    <p className="text-dark/60">
                                        {studioInfo.fullAddress}
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <Phone className="text-brand shrink-0 mt-1" />
                                <div>
                                    <h4 className="text-dark font-medium uppercase tracking-wider mb-1">Phone</h4>
                                    <p className="text-dark/60">{studioInfo.phone}</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <Mail className="text-brand shrink-0 mt-1" />
                                <div>
                                    <h4 className="text-dark font-medium uppercase tracking-wider mb-1">Email</h4>
                                    <p className="text-dark/60">{studioInfo.email}</p>
                                </div>
                            </div>
                        </div>

                        <div className="pt-6">
                            <Button size="lg">Book Appointment</Button>
                        </div>
                    </div>

                    {/* Map Placeholder */}
                    <div className="h-[400px] w-full bg-white rounded-sm overflow-hidden relative border border-dark/10 group shadow-lg">
                        {/* Emulate Light Mode Map */}
                        <div className="absolute inset-0 bg-neutral-100" />
                        <div className="absolute inset-0 flex items-center justify-center">
                            <p className="text-dark/30 font-heading tracking-widest uppercase">Google Map Loading...</p>
                        </div>
                        {/* Overlay for interaction */}
                        <div className="absolute inset-0 ring-1 ring-dark/5 group-hover:ring-brand/50 transition-all pointer-events-none" />
                    </div>
                </div>
            </div>
        </section>
    );
};
