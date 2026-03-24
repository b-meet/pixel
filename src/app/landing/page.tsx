"use client";

import { Star, Phone, Navigation, Globe, MapPin, Clock, CreditCard, BadgeCheck, MessageSquare, ChevronRight, Calendar } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function LandingPage() {
  return (
    <main className="bg-white min-h-screen pt-24 pb-20 font-sans text-dark overflow-hidden">
      {/* Hero Header */}
      <section className="container mx-auto px-6 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-neutral-100 rounded-full text-sm font-medium mb-6">
            <BadgeCheck className="w-5 h-5 text-brand" />
            Verified Google Business Profile
          </div>
          <h1 className="font-heading font-bold text-5xl md:text-7xl mb-6 leading-tight">
            Pixel <span className="text-brand">Tattoo</span>
          </h1>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-dark/70 text-lg mb-8">
            <div className="flex items-center gap-2 bg-neutral-50 px-4 py-2 rounded-full border border-dark/5">
              <span className="font-bold text-dark">4.9</span>
              <div className="flex text-[#fbbc04]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current border-none" />
                ))}
              </div>
              <span className="text-sm border-l border-dark/10 pl-2">(430 Reviews)</span>
            </div>
            <div className="flex items-center gap-2 text-sm px-4 py-2 rounded-full border border-dark/5">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              Open Now <span className="text-dark/40">·</span> Closes 9 PM
            </div>
          </div>
        </motion.div>
      </section>

      {/* Main Grid */}
      <section className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">

          {/* Left Column: Essential Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="lg:col-span-4 space-y-6"
          >
            {/* Quick Actions */}
            <div className="grid grid-cols-2 gap-3 mb-8">
              <a href="tel:07696870470" className="flex flex-col items-center justify-center p-4 bg-dark text-white rounded-xl hover:bg-brand transition-colors group">
                <Phone className="w-6 h-6 mb-2 group-hover:scale-110 transition-transform" />
                <span className="text-sm font-medium">Call Us</span>
              </a>
              <a href="https://maps.google.com/?q=Pixel+Tattoo+Surat" target="_blank" rel="noreferrer" className="flex flex-col items-center justify-center p-4 bg-neutral-100 text-dark rounded-xl border border-dark/5 hover:bg-neutral-200 transition-colors group">
                <Navigation className="w-6 h-6 mb-2 group-hover:scale-110 transition-transform" />
                <span className="text-sm font-medium">Directions</span>
              </a>
            </div>

            {/* Hours Card */}
            <div className="bg-white p-6 rounded-2xl border border-dark/5 shadow-sm">
              <h3 className="font-heading font-bold text-xl mb-4 flex items-center gap-2">
                <Clock className="w-5 h-5 text-brand" /> Business Hours
              </h3>
              <div className="space-y-3 text-sm text-dark/70">
                <div className="flex justify-between items-center py-2">
                  <span className="font-medium text-dark">Mon - Sun</span>
                  <span>11:00 AM - 10:00 PM</span>
                </div>
              </div>
            </div>

            {/* Location Card */}
            <div className="bg-white p-6 rounded-2xl border border-dark/5 shadow-sm">
              <h3 className="font-heading font-bold text-xl mb-4 flex items-center gap-2">
                <MapPin className="w-5 h-5 text-brand" /> Location
              </h3>
              <p className="text-dark/70 text-sm leading-relaxed mb-4">
                Shop No. 8, 1st Floor, Prasham Complex, City Light Road, Opposite Lavanya Market, City Light Town, Athwa, Surat, Gujarat 395007, India.
              </p>
              <div className="w-full h-32 bg-neutral-200 rounded-lg flex items-center justify-center text-dark/30 text-sm overflow-hidden relative">
                {/* Placeholder for actual Google Map Embed */}
                <div className="absolute inset-0 bg-dark/5" />
                <MapPin className="w-8 h-8 opacity-20" />
              </div>
            </div>

            {/* Payments */}
            <div className="bg-neutral-50 p-6 rounded-2xl border border-dark/5">
              <h3 className="font-heading font-bold text-sm text-dark/50 uppercase tracking-widest mb-3 flex items-center gap-2">
                <CreditCard className="w-4 h-4" /> Accepted Payments
              </h3>
              <p className="text-dark/70 text-sm leading-relaxed">
                Credit cards, Debit cards, Google Pay, NFC mobile payments, American Express, MasterCard, and VISA.
              </p>
            </div>
          </motion.div>

          {/* Right Column: Content & Gallery */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-8 space-y-8"
          >
            {/* About Section */}
            <div className="bg-white p-8 rounded-2xl border border-dark/5 shadow-sm">
              <h2 className="font-heading font-bold text-2xl mb-4 text-dark">About Pixel Tattoo</h2>
              <p className="text-dark/70 leading-relaxed max-w-3xl mb-6">
                Professional tattoo studio specializing in custom, minimalist, fine-line, black & grey, and cover-up tattoos. We also provide professional tattoo removal services. High hygiene standards and premium inks. Your safety is our top priority.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {['Professional tattoo removal', 'Custom design tattoos', 'Piercing services', 'Cover-up experts'].map((service, idx) => (
                  <div key={idx} className="flex items-center gap-3 bg-neutral-50 px-4 py-3 rounded-xl border border-dark/5">
                    <div className="w-8 h-8 rounded-full bg-brand/10 flex items-center justify-center text-brand shrink-0">
                      <BadgeCheck className="w-4 h-4" />
                    </div>
                    <span className="text-sm font-medium">{service}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Dynamic Gallery Placeholder */}
            <div>
              <div className="flex items-center justify-between mb-6">
                <h2 className="font-heading font-bold text-2xl text-dark">Latest Updates & Gallery</h2>
                <button className="text-sm font-medium text-brand hover:underline flex items-center gap-1">
                  View All <ChevronRight className="w-4 h-4" />
                </button>
              </div>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="aspect-square bg-neutral-100 rounded-xl overflow-hidden relative group cursor-pointer border border-dark/5">
                    <div className="absolute inset-0 bg-dark/20 group-hover:bg-transparent transition-colors duration-300" />
                    <div className="absolute bottom-3 left-3 flex items-center gap-1 text-white text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                      <Star className="w-3 h-3 fill-current" /> Google Update
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Recent Reviews Placeholder */}
            <div className="pt-4">
              <h2 className="font-heading font-bold text-2xl text-dark mb-6">Featured Reviews</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[1, 2].map((i) => (
                  <div key={i} className="bg-neutral-50 p-6 rounded-2xl border border-dark/5">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-neutral-200 flex items-center justify-center text-dark/30 font-bold">
                          {i === 1 ? 'A' : 'R'}
                        </div>
                        <div>
                          <div className="text-sm font-medium text-dark">{i === 1 ? 'Anjali Sharma' : 'Rahul Patel'}</div>
                          <div className="text-xs text-dark/50">2 weeks ago</div>
                        </div>
                      </div>
                      <div className="flex text-[#fbbc04]">
                        {[...Array(5)].map((_, idx) => (
                          <Star key={idx} className="w-3 h-3 fill-current border-none" />
                        ))}
                      </div>
                    </div>
                    <p className="text-sm text-dark/70 leading-relaxed">
                      {i === 1
                        ? "Absolutely an amazing experience! The artists are highly professional and the hygiene levels are top notch. My custom tattoo came out better than expected."
                        : "Best tattoo studio in Surat without a doubt. The fine line detailing is incredible. Highly recommended for first timers too!"}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
