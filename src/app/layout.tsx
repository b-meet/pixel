import type { Metadata } from "next";
import { Montserrat, Oswald } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Pixel Tattoos | Best Tattoo Studio in Surat & Custom Artists",
  description: "Experience the art of storytelling at Pixel Tattoos, Surat's premium tattoo studio. Expert custom artists, sterile environment, and award-winning designs. Book your consultation.",
  keywords: "Best Tattoo Studio in Surat, Best Tattoo Artist Near Me, Tattoo Studio Near Me, Custom Tattoo Artists India, Pixel Tattoos Surat, Tattoo Price Surat",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} ${oswald.variable} antialiased`}
      >
        <SmoothScroll>
          <Navbar />
          {children}
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
