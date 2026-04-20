import { Metadata } from "next";
import { studioInfo } from "@/lib/data";

export const metadata: Metadata = {
    title: "Privacy Policy | Pixel Tattoo Surat",
    description: "Privacy Policy for Pixel Tattoo Surat. Learn how we handle your information and our commitment to a data-free website experience.",
};

export default function PrivacyPolicyPage() {
    return (
        <main className="bg-neutral-900 text-white min-h-screen pt-32 pb-20">
            <div className="container mx-auto px-6 max-w-4xl">
                <h1 className="text-4xl md:text-5xl font-heading font-black mb-12 tracking-tighter text-brand">
                    PRIVACY POLICY
                </h1>

                <div className="space-y-12 text-gray-300 leading-relaxed font-sans">
                    <section>
                        <h2 className="text-xl font-bold text-white mb-4 uppercase tracking-widest border-l-4 border-brand pl-4">
                            1. Commitment to Privacy
                        </h2>
                        <p>
                            At {studioInfo.name}, we believe that your privacy is paramount. This website is designed to be an informational bridge between our studio and our clients. We have taken proactive steps to ensure that your visit to our site is as private as possible.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-white mb-4 uppercase tracking-widest border-l-4 border-brand pl-4">
                            2. Zero Data Collection
                        </h2>
                        <p className="mb-4">
                            Unlike traditional business websites, <strong>we do not collect, capture, or store</strong> any personal information through this website.
                        </p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>We do not have any contact forms.</li>
                            <li>We do not ask for your name, email, or phone number online.</li>
                            <li>We do not track your personalized browsing behavior.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-white mb-4 uppercase tracking-widest border-l-4 border-brand pl-4">
                            3. No Backend Database
                        </h2>
                        <p>
                            To ensure the highest level of security and privacy, this website operates <strong>without a backend database</strong>. There is no digital storage of user information associated with this domain, eliminating the risk of data breaches or leaks from our platform.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-white mb-4 uppercase tracking-widest border-l-4 border-brand pl-4">
                            4. External Interactions
                        </h2>
                        <p>
                            Our website serves as a bridge to connect you with our studio. Any interaction you initiate—whether via <strong>WhatsApp, Instagram, or Phone</strong>—takes place on those respective platforms.
                        </p>
                        <p className="mt-4">
                            Please note that once you click an external link to contact us, you are subject to the Privacy Policy and Terms of Use of that specific platform (e.g., Meta&apos;s Privacy Policy for WhatsApp and Instagram).
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-white mb-4 uppercase tracking-widest border-l-4 border-brand pl-4">
                            5. Cookies & Tracking
                        </h2>
                        <p>
                            We do not use tracking cookies or third-party analytics that identify you personally. We may use basic, anonymous server-side logs for site performance monitoring, which do not contain any personally identifiable information (PII).
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-white mb-4 uppercase tracking-widest border-l-4 border-brand pl-4">
                            6. Contact Us
                        </h2>
                        <p>
                            If you have any questions about our privacy approach, you can contact us directly at our studio or via our official communication channels listed on the homepage.
                        </p>
                        <p className="mt-4 font-bold text-brand italic">
                            Last Updated: April 2026
                        </p>
                    </section>
                </div>
            </div>
        </main>
    );
}
