import { studioInfo } from "@/lib/data";

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
            "streetAddress": "Shop No. 8, 1st Floor, Prasham Complex, City Light Road, Opposite Lavanya Market",
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
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                    "Saturday",
                    "Sunday"
                ],
                "opens": "11:00",
                "closes": "22:00"
            }
        ],
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.9",
            "reviewCount": "430"
        },
        "sameAs": [
            studioInfo.instagram,
            "https://www.facebook.com/pixeltattoos.in/",
            `https://www.google.com/maps?cid=${studioInfo.businessProfileId}`
        ],
        "areaServed": [
            {
                "@type": "City",
                "name": "Surat"
            },
            {
                "@type": "AdministrativeArea",
                "name": "Athwa"
            },
            {
                "@type": "AdministrativeArea",
                "name": "City Light"
            }
        ],
        "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Tattoo Services",
            "itemListElement": [
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Custom Tattoo Design",
                        "description": "Unique custom tattoo designs created from scratch in Surat."
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Laser Tattoo Removal",
                        "description": "Professional and safe laser tattoo removal services in Surat."
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Minimalist Tattoos",
                        "description": "Clean, fine-line minimalist tattoos specializing in precision."
                    }
                }
            ]
        }
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
};
