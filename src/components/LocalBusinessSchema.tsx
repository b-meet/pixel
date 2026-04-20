import { studioInfo, allCategories } from "@/lib/data";

export const LocalBusinessSchema = () => {
    const schema = {
        "@context": "https://schema.org",
        "@type": "TattooParlor",
        "name": studioInfo.name,
        "image": [
            "https://pixeltattoos.in/asset/pixel-tattoo-cover-image.webp",
            "https://pixeltattoos.in/asset/tattoo-machine.webp"
        ],
        "@id": `https://pixeltattoos.in/#localbusiness`,
        "url": "https://pixeltattoos.in",
        "telephone": studioInfo.phone || "07696870470",
        "priceRange": "$$",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "Shop No. 8, 1st Floor, Prasham Apartment, City Light Road, Opposite Lavanya Market",
            "addressLocality": "Athwa",
            "addressRegion": "Surat, Gujarat",
            "postalCode": "395007",
            "addressCountry": "IN"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": 21.1657608,
            "longitude": 72.793101
        },
        "openingHoursSpecification": [
            {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                    "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"
                ],
                "opens": "11:00",
                "closes": "22:00"
            }
        ],
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.9",
            "reviewCount": "432"
        },
        "review": [
            {
                "@type": "Review",
                "author": { "@type": "Person", "name": "Neha Jangid" },
                "reviewRating": { "@type": "Rating", "ratingValue": "5" },
                "reviewBody": "Got my first tattoo from Pixel Tattoo and I’m honestly in love with it. His work is amazing and the detailing is so clean and precise. He’s very focused, patient, and makes you feel comfortable the whole time. I’d definitely recommend him to anyone thinking about getting a tattoo.😊"
            },
            {
                "@type": "Review",
                "author": { "@type": "Person", "name": "Sandy Patel" },
                "reviewRating": { "@type": "Rating", "ratingValue": "5" },
                "reviewBody": "The experience with Pixel tattoos was awesome. Dheyur helped me with the design of my tattoo and understood why I wanted what I wanted. He arranged and rearranged the prints several times until I was convinced. Their rates are also quite reasonable and they are super hospitable and warm. Great ambiance, hygiene, and professionalism."
            }
        ],
        "founder": {
            "@type": "Person",
            "name": "Dheyur",
            "jobTitle": "Lead Artist",
            "description": "Expert tattoo artist specializing in custom line work, geometric patterns, and realistic designs in Surat.",
            "sameAs": [
                studioInfo.instagram,
                "https://pixeltattoos.in/about"
            ]
        },
        "sameAs": [
            studioInfo.instagram,
            "https://www.facebook.com/pixeltattoos.in/",
            `https://www.google.com/maps?cid=${studioInfo.businessProfileId}`,
            "https://www.wikidata.org/wiki/Q15309", // Surat
            "https://www.wikidata.org/wiki/Q11060",  // Tattoo
            "https://en.wikipedia.org/wiki/Surat",
            "https://en.wikipedia.org/wiki/Tattoo"
        ],
        "areaServed": [
            { "@type": "City", "name": "Surat" },
            { "@type": "AdministrativeArea", "name": "Athwa" },
            { "@type": "AdministrativeArea", "name": "City Light" },
            { "@type": "AdministrativeArea", "name": "Adajan" },
            { "@type": "AdministrativeArea", "name": "Vesu" },
            { "@type": "AdministrativeArea", "name": "Piplod" },
            { "@type": "AdministrativeArea", "name": "Varachha" },
            { "@type": "AdministrativeArea", "name": "Katargam" }
        ],
        "knowsAbout": [
            ...allCategories.map(c => c.name),
            "Custom Tattoo Design",
            "Hygiene in Tattooing",
            "Tattoo Aftercare",
            "Fine Line Artistry",
            "Traditional Indian Tattoos"
        ],
        "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Custom Tattoo & Removal Services",
            "itemListElement": allCategories.map((cat, index) => ({
                "@type": "Offer",
                "itemOffered": {
                    "@type": "Service",
                    "name": cat.name,
                    "url": `https://pixeltattoos.in${cat.href}`,
                    "description": `Professional ${cat.name} services at Pixel Tattoo Surat. Custom designs tailored to your vision.`
                }
            }))
        }
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
};
