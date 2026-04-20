import { Metadata } from "next";
import { studioInfo } from "@/lib/data";

export const metadata: Metadata = {
    title: "Terms and Conditions | Pixel Tattoo Surat",
    description: "Terms and Conditions for Pixel Tattoo Surat. Guidelines for booking, age requirements, and studio policies.",
};

export default function TermsAndConditionsPage() {
    return (
        <main className="bg-neutral-900 text-white min-h-screen pt-32 pb-20">
            <div className="container mx-auto px-6 max-w-4xl">
                <h1 className="text-4xl md:text-5xl font-heading font-black mb-12 tracking-tighter text-brand">
                    TERMS & CONDITIONS
                </h1>

                <div className="space-y-12 text-gray-300 leading-relaxed font-sans">
                    <section>
                        <h2 className="text-xl font-bold text-white mb-4 uppercase tracking-widest border-l-4 border-brand pl-4">
                            1. Acceptance of Terms
                        </h2>
                        <p>
                            By accessing this website and utilizing our services, you agree to comply with and be bound by the following terms and conditions. If you do not agree with any part of these terms, please do not use our website or services.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-white mb-4 uppercase tracking-widest border-l-4 border-brand pl-4">
                            2. Age Requirement
                        </h2>
                        <p>
                            You must be at least **18 years of age** to receive a tattoo at {studioInfo.name}. Valid government-issued photo identification is mandatory for all clients. We do not provide tattooing services to minors, even with parental consent.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-white mb-4 uppercase tracking-widest border-l-4 border-brand pl-4">
                            3. Health & Safety Disclosure
                        </h2>
                        <p className="mb-4">
                            Your safety is our priority. All clients must truthfully disclose any medical conditions or allergies during the consultation, including but not limited to:
                        </p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Diabetes or heart conditions</li>
                            <li>Blood-borne diseases (e.g., HIV, Hepatitis)</li>
                            <li>Skin conditions or severe allergies</li>
                            <li>Pregnancy or nursing</li>
                        </ul>
                        <p className="mt-4">
                            We reserve the right to refuse service if we believe a procedure may compromise your health or studio safety.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-white mb-4 uppercase tracking-widest border-l-4 border-brand pl-4">
                            4. Consultations & Deposits
                        </h2>
                        <ul className="list-disc pl-6 space-y-2">
                            <li><strong>Free Consultations</strong>: All consultations—whether via WhatsApp OR in-studio—are <strong>100% free of charge</strong>.</li>
                            <li><strong>CAUTION</strong>: We will <strong>never</strong> ask for any payment online before you have had a consultation or visited our studio. Please do not send money if asked online without a prior in-person visit or session already in progress.</li>
                            <li><strong>Cancellations</strong>: We require at least <strong>24 hours notice</strong> for rescheduling.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-white mb-4 uppercase tracking-widest border-l-4 border-brand pl-4">
                            5. Style & Intellectual Property
                        </h2>
                        <p>
                            All custom designs created by {studioInfo.name} artists remain the intellectual property of the studio. While you own the tattoo on your skin, the artistic design remains the property of the artist and may be used in our portfolios and social media.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-white mb-4 uppercase tracking-widest border-l-4 border-brand pl-4">
                            6. Studio Conduct
                        </h2>
                        <p>
                            We maintain a professional and sterile environment. We reserve the right to refuse service to anyone under the influence of alcohol or drugs, or anyone exhibiting disrespectful behavior.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-white mb-4 uppercase tracking-widest border-l-4 border-brand pl-4">
                            7. Content Disclaimer
                        </h2>
                        <p>
                            This website serves as an <strong>informational bridge</strong> only. Information regarding pricing, procedures, and styles is subject to change. No online interactions constitute a legal contract until a formal consultation is completed at our physical studio.
                        </p>
                        <p className="mt-4 font-bold text-brand italic">
                            Effective Date: April 2026
                        </p>
                    </section>
                </div>
            </div>
        </main>
    );
}
