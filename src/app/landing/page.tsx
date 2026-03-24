"use client";

import { Star, Phone, Navigation, Globe, MapPin, Clock, CreditCard, BadgeCheck, MessageSquare, ChevronRight, Calendar, Info, ArrowRight, ChevronUp, Share2, Bookmark, Instagram } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";
import { studioInfo } from "@/lib/data";

export default function LandingPage() {
  const whatsappUrl = `https://wa.me/${(studioInfo.phone || "").replace(/[^0-9]/g, '')}`;

  return (
    <main className="bg-[#f1f3f4] min-h-screen pt-20 pb-20 font-sans text-[#202124] overflow-hidden">
      {/* Hero / Top Section */}
      <section className="bg-white border-b border-gray-200 mb-4 px-4 py-8 md:py-12">
        <div className="max-w-[1200px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col md:flex-row md:items-end justify-between gap-6"
          >
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-[#70757a] text-sm font-medium">
                <span>Tattoo shop in Surat, Gujarat</span>
              </div>
              <h1 className="text-3xl md:text-5xl font-medium flex items-center gap-2 text-[#202124]">
                Pixel Tattoo
                <BadgeCheck className="w-6 h-6 text-[#F5BB47]" fill="#F5BB4720" />
              </h1>

              <div className="flex items-center gap-2 text-sm">
                <div className="flex items-center gap-1">
                  <span className="font-bold">4.9</span>
                  <div className="flex text-[#fbbc04]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current border-none" />
                    ))}
                  </div>
                </div>
                <span className="text-[#70757a] underline decoration-dotted underline-offset-4 cursor-pointer">430 reviews</span>
              </div>

              <div className="flex items-center gap-2 text-sm text-[#188038] font-medium pt-1">
                Open <span className="text-[#70757a] font-normal">⋅ Closes 10 PM</span>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <a href="https://www.instagram.com/pixeltattoos/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-6 py-2.5 bg-brand text-dark rounded-full text-sm font-medium hover:opacity-90 transition-all shadow-sm">
                <Instagram className="w-4 h-4" /> Visit Instagram
              </a>
            </div>
          </motion.div>

          {/* Quick Action Buttons (Google Style) */}
          <div className="flex flex-wrap gap-3 mt-8">
            <a href="tel:07696870470" className="flex items-center gap-2 px-6 py-2.5 border-2 border-[#F5BB47] rounded-full text-black hover:bg-[#F5BB47]/5 transition-colors text-sm font-medium">
              <Phone className="w-4 h-4" /> Call
            </a>
            <a href="https://maps.google.com/?q=Pixel+Tattoo+Surat" target="_blank" rel="noreferrer" className="flex items-center gap-2 px-6 py-2.5 border-2 border-[#F5BB47] rounded-full text-black hover:bg-[#F5BB47]/5 transition-colors text-sm font-medium">
              <Navigation className="w-4 h-4" /> Directions
            </a>
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-6 py-2.5 border-2 border-[#F5BB47] rounded-full text-black hover:bg-[#F5BB47]/5 transition-colors text-sm font-medium">
              <WhatsAppIcon size={16} className="text-[#188038]" /> WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Main Grid */}
      <section className="max-w-[1200px] mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">

          {/* Left Column: Essential Info Cards */}
          <div className="lg:col-span-4 space-y-4">

            {/* About & Features Card */}
            <div className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm">
              <div className="p-6">
                <h2 className="text-xl font-medium mb-4 text-[#202124]">About</h2>
                <p className="text-[#3c4043] text-sm leading-relaxed mb-6">
                  Professional tattoo studio specializing in custom, minimalist, fine-line, black & grey, and cover-up tattoos. We also provide professional tattoo removal services. High hygiene standards and premium inks. Your safety is our top priority.
                </p>
                <div className="space-y-3 pt-4 border-t border-gray-100">
                  {['Professional tattoo removal', 'Custom design tattoos', 'Piercing services', 'Cover-up experts'].map((service, idx) => (
                    <div key={idx} className="flex items-center gap-3 text-sm text-[#3c4043]">
                      <BadgeCheck className="w-4 h-4 text-[#F5BB47]" />
                      <span>{service}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Location & Hours Card */}
            <div className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm">
              <div className="p-6 space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin className="w-5 h-5 text-[#F5BB47] shrink-0 mt-0.5" />
                  <div className="text-sm leading-relaxed">
                    <p className="text-[#202124]">Shop No. 8, 1st Floor, Prasham Complex, City Light Road, Opposite Lavanya Market, City Light Town, Athwa, Surat, Gujarat 395007, India.</p>
                  </div>
                </div>

                <div className="w-full h-40 bg-neutral-200 rounded-lg overflow-hidden relative border border-gray-200">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3720.669866299879!2d72.793101!3d21.1657608!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be045f4ba1cb8f7%3A0x5a2bb2db7e238b1a!2sPixel%20Tattoo!5e0!3m2!1sen!2sin!4v1706691234567!5m2!1sen!2sin"
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

                <div className="flex items-start gap-4 cursor-pointer group">
                  <Clock className="w-5 h-5 text-[#F5BB47] shrink-0 mt-0.5" />
                  <div className="flex-1 text-sm">
                    <div className="flex justify-between items-center text-[#202124]">
                      <span className="font-medium text-[#188038]">Open now</span>
                      <span className="text-[#70757a]">11 AM - 10 PM</span>
                      <ChevronRight className="w-4 h-4 text-[#70757a]" />
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <Phone className="w-5 h-5 text-[#F5BB47] shrink-0" />
                  <a href="tel:07696870470" className="text-sm text-[#202124] hover:text-[#F5BB47]">076968 70470</a>
                </div>
              </div>
            </div>

            {/* Services Card */}
            <div className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm">
              <div className="p-6">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-xl font-medium text-[#202124]">Services</h2>
                  <ChevronUp className="w-5 h-5 text-[#70757a]" />
                </div>
                <div className="space-y-6">
                  <div className="pb-4 border-b border-gray-100 text-[#3c4043] text-sm">3D-style tattoos</div>
                  <div className="pb-4 border-b border-gray-100 text-[#3c4043] text-sm">Abstract tattoos</div>
                  <button className="text-[#F5BB47] font-medium text-sm flex items-center gap-2 hover:bg-[#f8f9fa] w-full pt-2 rounded transition-colors">
                    <ArrowRight className="w-4 h-4" /> More services
                  </button>
                </div>
              </div>
            </div>

            {/* Insights Card */}
            <div className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm">
              <div className="p-6">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-xl font-medium text-[#202124]">Insights</h2>
                  <ChevronUp className="w-5 h-5 text-[#70757a]" />
                </div>
                <div className="space-y-6">
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-[#70757a] mb-2">Accessibility</h4>
                    <p className="text-sm text-[#3c4043] leading-relaxed">Wheelchair accessible entrance · Wheelchair accessible parking lot</p>
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-[#70757a] mb-2">Amenities</h4>
                    <p className="text-sm text-[#3c4043] leading-relaxed">Gender-neutral restroom · Wi-Fi · Free Wi-Fi</p>
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-[#70757a] mb-2">Crowd</h4>
                    <p className="text-sm text-[#3c4043] leading-relaxed">LGBTQ+ friendly</p>
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-[#70757a] mb-2">Payments</h4>
                    <p className="text-sm text-[#3c4043] leading-relaxed">Credit cards · Debit cards · Google Pay · NFC mobile payments · American Express · MasterCard · VISA</p>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Dynamic Content & Gallery */}
          <div className="lg:col-span-8 space-y-4">

            {/* Posts / Updates Section */}
            <div className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm">
              <div className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-medium text-[#202124]">Posts</h2>
                  <button className="text-[#F5BB47] text-sm font-medium hover:underline">View all</button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Post Card 1 */}
                  <div className="border border-gray-200 rounded-xl overflow-hidden group cursor-pointer hover:border-gray-300 transition-colors">
                    <div className="h-48 bg-gray-100 flex items-center justify-center text-gray-400">
                      Tattoo Process Image
                    </div>
                    <div className="p-4">
                      <p className="text-sm line-clamp-2 text-[#3c4043]">Your safety is our top priority. Our studio follows strict hygiene...</p>
                      <span className="text-xs text-[#70757a] mt-2 block">2 weeks ago</span>
                    </div>
                  </div>
                  {/* Post Card 2 */}
                  <div className="border border-gray-200 rounded-xl overflow-hidden group cursor-pointer hover:border-gray-300 transition-colors">
                    <div className="h-48 bg-gray-100 flex items-center justify-center text-gray-400">
                      Ink Selection Image
                    </div>
                    <div className="p-4">
                      <p className="text-sm line-clamp-2 text-[#3c4043]">Looking for a unique tattoo designed specially for you? At custom...</p>
                      <span className="text-xs text-[#70757a] mt-2 block">1 month ago</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Gallery Section */}
            <div className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm">
              <div className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-medium text-[#202124]">Gallery</h2>
                  <button className="text-[#F5BB47] text-sm font-medium hover:underline">View all</button>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
                  {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                    <div key={i} className="aspect-square bg-gray-100 rounded-lg overflow-hidden relative cursor-pointer hover:opacity-90 transition-opacity">
                      <div className="absolute inset-0 flex items-center justify-center text-gray-300 text-xs">Photo {i}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Reviews Section */}
            <div className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm">
              <div className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-medium text-[#202124]">Featured Reviews</h2>
                  <button className="text-[#F5BB47] text-sm font-medium hover:underline">View all</button>
                </div>
                <div className="space-y-8">
                  {[1, 2].map((i) => (
                    <div key={i} className="border-b border-gray-100 last:border-0 pb-8 last:pb-0">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 rounded-full bg-[#f1f3f4] flex items-center justify-center text-[#70757a] font-medium uppercase text-sm">
                          {i === 1 ? 'AS' : 'RP'}
                        </div>
                        <div>
                          <div className="text-sm font-medium text-[#202124]">{i === 1 ? 'Anjali Sharma' : 'Rahul Patel'}</div>
                          <div className="flex text-[#fbbc04] items-center gap-1 mt-0.5">
                            <div className="flex">
                              {[...Array(5)].map((_, idx) => (
                                <Star key={idx} className="w-3 h-3 fill-current border-none" />
                              ))}
                            </div>
                            <span className="text-xs text-[#70757a] ml-1">2 weeks ago</span>
                          </div>
                        </div>
                      </div>
                      <p className="text-sm text-[#3c4043] leading-relaxed">
                        {i === 1
                          ? "Absolutely an amazing experience! The artists are highly professional and the hygiene levels are top notch. My custom tattoo came out better than expected."
                          : "Best tattoo studio in Surat without a doubt. The fine line detailing is incredible. Highly recommended for first timers too!"}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}
