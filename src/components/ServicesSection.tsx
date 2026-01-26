"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { SectionHeading } from "./ui/SectionHeading";
import { services } from "@/lib/data";
import { ArrowRight } from "lucide-react";

export const ServicesSection = () => {
    return (
        <section className="py-24 bg-neutral-50 overflow-hidden">
            <div className="container mx-auto px-6">
                <SectionHeading title="Our Expertise" subtitle="Services" />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <Link key={service.id} href={`/services/${service.slug}`} className="group">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1, duration: 0.5 }}
                                className="bg-white p-8 h-full border border-dark/5 hover:border-brand/50 transition-colors shadow-sm hover:shadow-md rounded-sm flex flex-col"
                            >
                                <div className="mb-6 p-4 bg-brand/10 w-fit rounded-full text-brand group-hover:bg-brand group-hover:text-white transition-colors duration-300">
                                    <service.icon size={32} strokeWidth={1.5} />
                                </div>

                                <h3 className="text-2xl font-heading font-bold text-dark mb-3 group-hover:text-brand transition-colors">
                                    {service.title}
                                </h3>

                                <p className="text-dark/60 mb-6 flex-grow leading-relaxed">
                                    {service.shortDesc}
                                </p>

                                <div className="flex items-center text-sm font-medium text-brand uppercase tracking-widest group-hover:translate-x-2 transition-transform">
                                    Explore <ArrowRight size={16} className="ml-2" />
                                </div>
                            </motion.div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};
