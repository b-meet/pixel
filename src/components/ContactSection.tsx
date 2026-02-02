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
                    {/* Map */}
                    <div className="h-[400px] w-full bg-white rounded-sm overflow-hidden relative border border-dark/10 group shadow-lg">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3720.669866299879!2d72.79386377610196!3d21.165529980455855!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be053b2d2db77d5%3A0xe9f7981504269804!2sPrasham%20complex!5e0!3m2!1sen!2sin!4v1706691234567!5m2!1sen!2sin"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Pixel Tattoo Studio Location"
                            className="grayscale hover:grayscale-0 transition-all duration-300"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};
