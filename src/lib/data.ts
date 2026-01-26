import { CloudLightning, Feather, Image as ImageIcon, Layers, PenTool, RefreshCw, Scissors, Sparkles } from "lucide-react";

export const studioInfo = {
    name: "Pixel Tattoo",
    location: "City Light, Surat",
    fullAddress: "City Light Road, Athwa, Surat, Gujarat",
    phone: "+91 98765 43210", // Placeholder
    email: "contact@pixeltattoo.com", // Placeholder
    instagram: "@pixeltattoo_surat",
    description: "Surat's premier tattoo studio specializing in custom, minimalist, and fine line tattoos. We combine artistic precision with medical-grade hygiene.",
    stats: [
        { label: "Years Experience", value: "8+" },
        { label: "Tattoos Inked", value: "5000+" },
        { label: "Happy Clients", value: "3500+" },
        { label: "Awards Won", value: "12" }
    ]
};

export const services = [
    {
        id: "custom-tattoo",
        slug: "custom-tattoo",
        title: "Custom Tattoo Design",
        shortDesc: "Unique art tailored to your story.",
        icon: PenTool,
        fullDescription: "Your story is unique, and your tattoo should be too. At Pixel Tattoo, we don't just copy images from the internet. We collaborate with you to design a one-of-a-kind piece that perfectly captures your vision, personality, and body flow. Whether it's a complex sleeve or a meaningful symbol, we craft it from scratch.",
        process: [
            { title: "Consultation", desc: "We discuss your ideas, references, and placement." },
            { title: "Sketching", desc: "Our artists create a digital draft for your approval." },
            { title: "Refining", desc: "We tweak details until it's perfect." },
            { title: "Inking", desc: "We bring the design to life on your skin." }
        ],
        faq: [
            { q: "Can you design something if I only have a vague idea?", a: "Absolutely! That's our specialty. Just bring us your thoughts, feelings, or rough sketches, and we'll translate them into art." },
            { q: "Do you charge extra for custom designs?", a: "Design work is included in your tattoo quote. We require a deposit to start drawing, which is deducted from the final price." }
        ]
    },
    {
        id: "minimalist",
        slug: "minimalist-tattoos",
        title: "Minimalist Tattoos",
        shortDesc: "Less is more. Elegant and subtle.",
        icon: Feather,
        fullDescription: "Minimalism is about making a big impact with few elements. We specialize in clean, understated designs that speak volumes. Perfect for first-timers or those who appreciate the beauty of simplicity, our minimalist tattoos are precise, sharp, and timeless.",
        process: [
            { title: "Concept", desc: "Simplifying complex ideas into essential lines." },
            { title: "Placement", desc: "Finding the perfect spot for subtle visibility." },
            { title: "Precision", desc: "Using fine needles for crisp, clean results." }
        ],
        faq: [
            { q: "Do minimalist tattoos fade faster?", a: "All tattoos fade slightly over time, but with proper care and our high-quality ink, your minimalist tattoo will stay crisp for years." }
        ]
    },
    {
        id: "fine-line",
        slug: "fine-line-tattoos",
        title: "Fine Line Tattoos",
        shortDesc: "Delicate, intricate, and precise single-needle art.",
        icon: Scissors,
        fullDescription: "Fine line tattooing is an art form that requires a steady hand and exceptional technical skill. We use single needles or very small groupings to create designs that look like they were drawn with a mechanical pen. From delicate florals to micro-portraits, the details are breathtaking.",
        process: [
            { title: "Design", desc: "Creating intricate details suitable for thin lines." },
            { title: "Stencil", desc: "Perfect transfer to ensure zero margin for error." },
            { title: "Execution", desc: "Slow, steady needle movement for consistent line weight." }
        ],
        faq: [
            { q: "Does fine line hurt more?", a: "Actually, it often hurts less! We use smaller needles which cause less trauma to the skin compared to bold traditional lines." }
        ]
    },
    {
        id: "black-grey",
        slug: "black-and-grey-tattoos",
        title: "Black & Grey Tattoos",
        shortDesc: "Classic shading, depth, and realism.",
        icon: CloudLightning, // Abstract rep for shading/depth
        fullDescription: "Black and Grey is the soul of tattooing. Using only black ink and water (wash), we create incredible depth, dimension, and texture. This style is versatile, ranging from soft shading to high-contrast realism, and stands the test of time beautifully.",
        process: [
            { title: "Contrast Mapping", desc: "Planning light and dark areas for maximum depth." },
            { title: "Layering", desc: "Building up smooth gradients of grey." },
            { title: "Detailing", desc: "Adding white highlights for that popping 3D effect." }
        ],
        faq: [
            { q: "Will black and grey look good on my skin tone?", a: "Yes! Black and grey is universally flattering and reads well on all skin tones when executed with proper contrast." }
        ]
    },
    {
        id: "cover-up",
        slug: "cover-up-tattoos",
        title: "Cover-Up Tattoos",
        shortDesc: "Transforming old ink into new masterpieces.",
        icon: Layers,
        fullDescription: "Got a tattoo you no longer love? Don't settle for living with it. Our cover-up specialists understand the science of pigment and composition needed to hide old ink completely. We don't just 'blast over' it; we incorporate the old lines into a new, stunning design.",
        process: [
            { title: "Assessment", desc: "Analyzing the old tattoo's darkness and scarring." },
            { title: "Strategy", desc: "Choosing a design with enough texture and depth to conceal." },
            { title: "Transformation", desc: "Applying the new art. You won't believe it's a cover-up." }
        ],
        faq: [
            { q: "Does the new tattoo have to be very dark?", a: "Not necessarily, but it often needs to be deeper in color or more detailed than the original to mask it effectively." }
        ]
    },
    {
        id: "removal",
        slug: "tattoo-removal",
        title: "Tattoo Removal",
        shortDesc: "Safe, effective laser removal services.",
        icon: RefreshCw,
        fullDescription: "Sometimes the best choice is a fresh start. We offer professional laser tattoo removal using state-of-the-art technology. Whether you want to fade a tattoo for a cover-up or remove it entirely, our process is safe, hygienic, and effective.",
        process: [
            { title: "Consult", desc: "Patch test and estimating sessions needed." },
            { title: "Laser Session", desc: "Quick pulses of light break down the ink particles." },
            { title: "Healing", desc: "Your body naturally flushes out the ink over weeks." }
        ],
        faq: [
            { q: "Is it painful?", a: "It feels like a rubber band snapping against skin. We can use numbing cream to manage discomfort." },
            { q: "How many sessions?", a: "It varies by size and ink depth, typically between 6-12 sessions for complete removal." }
        ]
    }
];

export const tattooStyles = [
    {
        id: "realism",
        slug: "realism",
        name: "Idealism / Realism",
        shortDesc: "Photographic detail",
        description: "Realism tattoos are designed to look as convincing and lifelike as possible. High-quality realism requires an artist with exceptional technical skill and an eye for detail, mastering shading and perspective to bring the image to life on skin.",
        heroImage: "bg-neutral-800",
        features: [
            { label: "Pain Level", value: "Moderate to High (Long sessions)" },
            { label: "Healing Time", value: "2-3 Weeks" },
            { label: "Best Placement", value: "Forearm, Outer Arm, Calf, Back" },
        ],
        gallery: [1, 2, 3],
        seo: {
            title: "Best Realism Tattoo Artist in Surat | Pixel Tattoo",
            description: "Looking for hyper-realistic tattoos in Surat? Pixel Tattoos specializes in portrait, 3D, and photographic realism. Book a consultation.",
            keywords: ["Realism Tattoo Surat", "3D Tattoo Artist", "Portrait Tattoo India", "Hyper Realistic Tattoos"]
        }
    },
    {
        id: "geometric",
        slug: "geometric",
        name: "Geometric",
        shortDesc: "Sacred symmetry",
        description: "Geometric tattoos rely on crisp lines and perfect shapes to create intricate patterns. From sacred geometry to modern abstract designs, these tattoos are timeless and visually striking.",
        heroImage: "bg-neutral-800",
        features: [
            { label: "Pain Level", value: "Low to Moderate" },
            { label: "Healing Time", value: "2 Weeks" },
            { label: "Best Placement", value: "Chest, Back, Forearm" },
        ],
        gallery: [4, 5, 6],
        seo: {
            title: "Geometric Tattoo Studio Surat | Sacred Geometry",
            description: "Expert geometric and mandala tattoos in Surat. Precision linework and sacred geometry designs at Pixel Tattoos.",
            keywords: ["Geometric Tattoo Surat", "Mandala Tattoo Artist", "Sacred Geometry Tattoo", "Line Art Tattoo"]
        }
    },
    // ... Keeping other styles if needed, or mapping them to services conceptually
];

export const testimonials = [
    {
        id: 1,
        name: "Rahul M.",
        role: "Software Engineer",
        content: "Best tattoo studio in Surat! The hygiene standards are top-notch, and the artist really listened to my idea. My fine line tattoo looks incredible.",
        rating: 5
    },
    {
        id: 2,
        name: "Priya S.",
        role: "Fashion Designer",
        content: "I was nervous about my first tattoo, but the team at Pixel made me feel so comfortable. The custom design they made for me is better than I imagined!",
        rating: 5
    },
    {
        id: 3,
        name: "Amit K.",
        role: "Client",
        content: "Got a cover-up done here. You can't even tell there was an old tattoo underneath. Amazing work!",
        rating: 5
    }
];

export const blogPosts = [
    {
        id: 1,
        slug: "tattoo-aftercare-surat-summer",
        title: "Tattoo Aftercare Tips for Surat's Hot Climate",
        excerpt: "Surat's heat and humidity can affect your healing process. Here is how to keep your new ink fresh and infection-free during summer.",
        date: "October 15, 2025",
        readTime: "5 min read",
        category: "Aftercare",
        content: "..." // Full content to be added on the page
    },
    {
        id: 2,
        slug: "first-tattoo-ideas",
        title: "Top 20 Tattoo Ideas for First-Timers",
        excerpt: "Planning your first ink? We've curated a list of timeless, meaningful, and beginner-friendly tattoo ideas that you won't regret.",
        date: "November 2, 2025",
        readTime: "7 min read",
        category: "Inspiration",
        content: "..."
    },
    {
        id: 3,
        slug: "tattoo-removal-process",
        title: "Tattoo Removal: What to Expect?",
        excerpt: "Thinking about erasing some ink? Here is the honest truth about pain, cost, and results of laser tattoo removal in Surat.",
        date: "December 10, 2025",
        readTime: "6 min read",
        category: "Education",
        content: "..."
    }
];

export const faqs = [
    {
        category: "General",
        items: [
            { q: "Does getting a tattoo hurt?", a: "Pain is subjective, but most people describe it as a scratchy, irritating sensation. We do our best to make you comfortable." },
            { q: "How much does a tattoo cost?", a: "Our minimum charge is ₹2000. Final price depends on size, detail, and placement. We recommend a consultation for an accurate quote." },
            { q: "Is it safe?", a: "100%. We use single-use sterile needles, high-quality imported vegan inks, and hospital-grade hygiene protocols." }
        ]
    },
    {
        category: "Aftercare",
        items: [
            { q: "When can I go to the gym?", a: "Avoid heavy sweating and stretching the tattooed area for at least 7 days." },
            { q: "Can I swim?", a: "No swimming (pool, sea, or bathtub) for 2 weeks until the tattoo is fully peeled and healed." }
        ]
    }
];
