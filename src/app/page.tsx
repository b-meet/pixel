import { Hero } from "@/components/Hero";
import { TrustSection } from "@/components/TrustSection";
import { ArtistSection } from "@/components/ArtistSection";
import { ServicesSection } from "@/components/ServicesSection";
import { TattooStyles } from "@/components/TattooStyles";
import { Portfolio } from "@/components/Portfolio";
import { FAQ } from "@/components/FAQ";
import { ContactSection } from "@/components/ContactSection";

export default function Home() {
  return (
    <main className="bg-white min-h-screen">
      <Hero />
      <TrustSection />
      <ServicesSection />
      <TattooStyles />
      <ArtistSection />
      <Portfolio />
      <FAQ />
      <ContactSection />
    </main>
  );
}
