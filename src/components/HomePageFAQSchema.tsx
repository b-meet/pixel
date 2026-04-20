import { faqs } from "@/lib/data";

export const HomePageFAQSchema = () => {
    // Select the first 5 FAQs from the 'Surat Tattoo Studio FAQs' category
    const suratFaqs = faqs.find(f => f.category === "Surat Tattoo Studio FAQs")?.items.slice(0, 5) || [];

    const schema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": suratFaqs.map(faq => ({
            "@type": "Question",
            "name": faq.q,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.a
            }
        }))
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
};
