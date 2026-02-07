import { CloudLightning, Feather, Image as ImageIcon, Layers, PenTool, RefreshCw, Scissors, Sparkles } from "lucide-react";

export const studioInfo = {
    name: "Pixel Tattoo",
    location: "City Light, Surat",
    fullAddress: "Shop No. 8, 1st Floor, Prasham Complex, City Light Road, Opposite Lavanya Market, City Light Town, Athwa, Surat 395007",
    phone: process.env.NEXT_PUBLIC_CONTACT_PHONE,
    email: "pixeltattoos.in@gmail.com",
    googleMapsUrl: process.env.NEXT_PUBLIC_GOOGLE_MAPS_URL || "https://maps.app.goo.gl/rKk17qZQ2RwGNGa87",
    instagram: "https://www.instagram.com/pixeltattoos/",
    description: "Pixel Tattoo is a professional tattoo studio located in City Light, Athwa, Surat, specializing in custom tattoos, minimalist tattoos, fine-line tattoos, black & grey tattoos, and cover-up tattoos. We also offer professional tattoo removal services in Surat, providing safe, hygienic procedures with proper consultation and aftercare.",
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
        fullDescription: "At Pixel Tattoo, we focus on high hygiene standards, premium inks, skilled artistry, and personalized designs to ensure a comfortable experience for every client. Your story is unique, and your tattoo should be too. We don't just copy images; we collaborate with you to design a one-of-a-kind piece that perfectly captures your vision, personality, and body flow.",
        process: [
            { title: "Consultation", desc: "We discuss your ideas, references, and placement at our studio in City Light." },
            { title: "Sketching", desc: "Our artists create a digital draft for your approval." },
            { title: "Refining", desc: "We tweak details until it's perfect." },
            { title: "Inking", desc: "We bring the design to life on your skin using sterile, single-use equipment." }
        ],
        faq: [
            { q: "Can you design something if I only have a vague idea?", a: "Absolutely! Just bring us your thoughts or rough sketches, and we'll translate them into art." },
            { q: "Do you charge extra for custom designs?", a: "Design work is included in your tattoo quote. We require a deposit to start drawing." }
        ]
    },
    {
        id: "minimalist",
        slug: "minimalist-tattoos",
        title: "Minimalist Tattoos",
        shortDesc: "Less is more. Elegant and subtle.",
        icon: Feather,
        fullDescription: "Minimalism is about making a big impact with few elements. We specialize in clean, understated designs that speak volumes. Perfect for first-timers or those who appreciate the beauty of simplicity. Located near Lavanya Market, we are the go-to spot for precision minimalist tattoos in Surat.",
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
        icon: CloudLightning,
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
        fullDescription: "Got a tattoo you no longer love? Whether it's a name tattoo removal or a faded design, don't settle for living with it. Our cover-up specialists in City Light, Surat understand the science of pigment and composition needed to hide old ink completely. We incorporate the old lines into a new, stunning design.",
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
        title: "Tattoo Removal in Surat",
        shortDesc: "Safe, effective laser removal services.",
        icon: RefreshCw,
        fullDescription: "We offer professional tattoo removal services in Surat, providing safe, hygienic procedures with proper consultation and aftercare. Whether you have tattoo regret, an unwanted name tattoo, or a faded design you want gone, our studio near City Light Road is equipped to help. We use advanced technology to fade or remove ink safely.",
        process: [
            { title: "Consultation", desc: "We assess your tattoo (size, ink depth, age) and skin type." },
            { title: "Laser Session", desc: "Quick pulses of light break down the ink particles." },
            { title: "Healing", desc: "Your body naturally flushes out the ink over weeks." }
        ],
        faq: [
            { q: "Is tattoo removal safe?", a: "Yes, tattoo removal is safe when done professionally with proper hygiene and consultation. At Pixel Tattoo, we follow strict hygiene standards and guide clients through the process to ensure safe tattoo removal in Surat." },
            { q: "How many sessions are needed for tattoo removal?", a: "The number of sessions depends on factors like tattoo size, ink color, depth, and skin type. Most tattoos require multiple sessions for effective removal. We provide a clear consultation before starting tattoo removal in Surat." },
            { q: "Is tattoo removal painful?", a: "Tattoo removal may cause mild discomfort, but it is generally well-tolerated. Sensitivity varies from person to person, and we explain what to expect during your tattoo removal consultation in Surat." },
            { q: "How much does tattoo removal cost in Surat?", a: "Tattoo removal cost depends on the size, complexity, and number of sessions required. At Pixel Tattoo, we offer transparent pricing after evaluating your tattoo during consultation." },
            { q: "Can all tattoos be removed completely?", a: "Many tattoos can be significantly faded or fully removed, but results depend on ink type, tattoo age, and skin response. During your tattoo removal consultation in Surat, we’ll honestly explain expected results." },
            { q: "Do you offer tattoo removal near City Light Road?", a: "Yes. Pixel Tattoo is conveniently located near City Light Road, Athwa, Surat, making it easy to access professional tattoo removal services nearby." },
            { q: "Is aftercare required after tattoo removal?", a: "Yes. Proper aftercare is essential for healing and results. We provide detailed aftercare guidance after every tattoo removal session." }
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
        id: "guide-first-tattoo",
        slug: "guide-first-tattoo",
        title: "The Complete Guide to Getting Your First Tattoo",
        excerpt: "From booking your consultation to sitting in the chair, here is everything you need to know before getting your first permanent piece of art.",
        date: "January 10, 2026",
        readTime: "8 min read",
        category: "Beginner Guide",
        content: `
            <p>Getting your first tattoo is a rite of passage. It’s exciting, a little nerve-wracking, and deeply personal. At Pixel Tattoo Surat, we’ve guided hundreds of first-timers through this journey. Here is your complete roadmap.</p>
            <h3>1. The Idea Phase</h3>
            <p>Don’t rush. Scroll through Instagram, Pinterest, and our gallery. Are you drawn to <strong>fine line</strong> work or bold <strong>geometric</strong> shapes? Save your references. You don't need a finished design; just a direction.</p>
            <h3>2. The Consultation</h3>
            <p>This is where magic happens. We discuss placement, size, and budget. For a first tattoo, we often recommend fleshy areas like the forearm or thigh, avoiding the ribs or spine unless you have a high pain threshold.</p>
            <h3>3. Pre-Appointment Prep</h3>
            <ul>
                <li><strong>Hydrate:</strong> Drink water for 24 hours beforehand. Hydrated skin takes ink better.</li>
                <li><strong>Eat:</strong> Have a solid meal within 2 hours of your appointment to stabilize blood sugar.</li>
                <li><strong>No Alcohol:</strong> Avoid drinking the night before as it thins your blood.</li>
            </ul>
            <h3>4. The Session</h3>
            <p>We’ll apply a stencil so you can see the fit. Once we start, focus on your breathing. The pain is usually less than expected—more like a scratch or a cat lick than a needle puncture.</p>
        `
    },
    {
        id: "custom-design-process",
        slug: "custom-design-process",
        title: "How Professional Tattoo Artists Design Custom Tattoos",
        excerpt: "Ever wondered how we turn a vague idea into a masterpiece? Inside the creative process of custom tattooing.",
        date: "January 12, 2026",
        readTime: "6 min read",
        category: "Artistry",
        content: `
            <p>A custom tattoo isn’t just drawn; it’s engineered. It needs to look good on paper, but more importantly, it needs to flow with the body’s musculature and age gracefully.</p>
            <h3>Step 1: The Brief</h3>
            <p>We listen. "I want a lion" is a start. "I want a lion representing strength overcoming struggle, with geometric elements" is a design brief. We digest your story.</p>
            <h3>Step 2: Anatomy & Flow</h3>
            <p>Unlike a canvas, skin curves and stretches. We design S-curves for arms and legs to follow muscle lines. A static straight line often looks warped on a moving body.</p>
            <h3>Step 3: Contrast & Composition</h3>
            <p>We balance <strong>light and dark</strong>. Tattoos need high contrast to remain readable from a distance and to hold up as ink spreads slightly over decades. We call these "skin breaks"—areas of negative space that let the design breathe.</p>
        `
    },
    {
        id: "healing-day-by-day",
        slug: "healing-day-by-day",
        title: "Tattoo Healing: What Happens Day by Day",
        excerpt: "The first month is crucial. Here is a timeline of the itching, peeling, and settling stages of your new tattoo.",
        date: "January 15, 2026",
        readTime: "7 min read",
        category: "Aftercare",
        content: `
            <p>Healing is a science. Knowing what’s normal stops the panic.</p>
            <h3>Days 1-3: The "Fresh Wound" Stage</h3>
            <p>Your tattoo will be red, swollen, and may ooze plasma. This is normal. Keep it wrapped for the first few hours as instructed. Wash gently with antimicrobial soap.</p>
            <h3>Days 4-7: The "Peeling" Stage</h3>
            <p>It will look dull and start to flake like a sunburn. <strong>Do not pick it.</strong> Picking pulls out ink and causes scars. The colors may look milky; this is dead skin sitting on top.</p>
            <h3>Days 8-14: The "Itchy" Stage</h3>
            <p>It will itch like crazy. Slap it gently, don’t scratch. Keep moisturizing, but don’t drown it.</p>
            <h3>Days 15-30: The "Settling" Stage</h3>
            <p>The surface is healed, but deeper layers are mending. Continue to use sunscreen. The final ink color settles in.</p>
        `
    },
    {
        id: "aftercare-dos-donts",
        slug: "aftercare-dos-donts",
        title: "Tattoo Aftercare: Do’s, Don’ts, and Common Mistakes",
        excerpt: "Your artist does 50% of the work; you do the rest. A strict guide to protecting your investment.",
        date: "January 18, 2026",
        readTime: "5 min read",
        category: "Aftercare",
        content: `
            <p>We see beautiful tattoos ruined by poor aftercare. Follow these rules strictly.</p>
            <h3>The Golden DOs</h3>
            <ul>
                <li><strong>DO</strong> wash your hands before touching your fresh tattoo.</li>
                <li><strong>DO</strong> use a thin layer of unscented moisturizer (like Cetaphil or specialized tattoo balm).</li>
                <li><strong>DO</strong> wear loose cotton clothing over the area.</li>
            </ul>
            <h3>The Fatal DON'Ts</h3>
            <ul>
                <li><strong>DON'T</strong> soak in water. No swimming pools, bathtubs, or oceans for 2 weeks. Bacteria is your enemy.</li>
                <li><strong>DON'T</strong> scratch the peel. Let it fall off naturally.</li>
                <li><strong>DON'T</strong> use Vaseline or petroleum jelly. It traps bacteria and doesn't let the skin breathe.</li>
                <li><strong>DON'T</strong> expose it to direct sun. UV rays break down fresh ink pigments instantly.</li>
            </ul>
        `
    },
    {
        id: "minimalist-statement",
        slug: "minimalist-statement",
        title: "Minimalist Tattoos: Why Less Ink Makes a Stronger Statement",
        excerpt: "In a world of noise, silence stands out. Exploring the rise of fine line and micro tattoos in Surat.",
        date: "January 20, 2026",
        readTime: "4 min read",
        category: "Trends",
        content: `
            <p>Minimalism isn't just small; it's intentional. It strips away the excess to leave only the essential meaning.</p>
            <h3>The Aesthetic of Cleanliness</h3>
            <p>Clean lines, geometric shapes, and negative space create a modern, sophisticated look that pairs well with professional lifestyles. A single line contour of a face can convey more emotion than a shaded portrait.</p>
            <h3>Placement Matters More</h3>
            <p>Because they are small, placement is critical. The wrist, behind the ear, or the inner finger become prime real estate for these subtle hints of personality.</p>
        `
    },
    {
        id: "fine-line-technique",
        slug: "fine-line-technique",
        title: "Fine Line Tattoos: Technique, Longevity, and Care",
        excerpt: "They look delicate, but do they last? The truth about single-needle tattooing.",
        date: "January 22, 2026",
        readTime: "6 min read",
        category: "Education",
        content: `
            <p>Fine line tattooing uses a single needle or a tight grouping (3RL) to create pencil-thin lines. It's elegant, but requires a master artist.</p>
            <h3>The Technical Challenge</h3>
            <p>There is zero margin for error. A shaky hand shows instantly. At Pixel Tattoo, our artists specialize in steady-hand breathing techniques to ensure crisp lines.</p>
            <h3>Longevity Facts</h3>
            <p>Critically, fine lines fade faster than bold traditional work. This is physics. Less ink equals faster breakdown by the immune system. Expect to need a touch-up every 3-5 years to keep it crisp.</p>
            <h3>Care is Key</h3>
            <p>Sunscreen is non-negotiable for fine line work. Even mild sun exposure can blur these delicate lines over time.</p>
        `
    },
    {
        id: "cover-up-guide",
        slug: "cover-up-guide",
        title: "Cover-Up Tattoos: How Old Ink Is Transformed Into New Art",
        excerpt: "Don't laser it—transform it. How we hide names, faded tribal, and mistakes with clever design.",
        date: "January 25, 2026",
        readTime: "6 min read",
        category: "Services",
        content: `
            <p>A cover-up is a magic trick. We don't just put ink on top; we use the eye's tendency to follow flow and light to distract from the old scar.</p>
            <h3>The Rules of Cover-Ups</h3>
            <ol>
                <li><strong>Go Bigger:</strong> The new design usually needs to be 2-3x the size of the original to allow for proper camouflage.</li>
                <li><strong>Go Darker (Selectively):</strong> We use deep blues, greens, and blacks to mask the old pigment. Yellows and whites won't work.</li>
                <li><strong>Texture is King:</strong> Designs with scales, feathers, or petals work best because their organic texture hides the rigid lines of old text or tribal work.</li>
            </ol>
        `
    },
    {
        id: "placement-guide",
        slug: "placement-guide",
        title: "Tattoo Placement Guide: Choosing the Right Spot for Your Design",
        excerpt: "Does a mandala belong on the thigh or the back? How body curves affect your design.",
        date: "January 28, 2026",
        readTime: "5 min read",
        category: "Design",
        content: `
            <p>A great design in the wrong place becomes a bad tattoo. You must consider <strong>visibility, pain, and aging</strong>.</p>
            <h3>The Forearm</h3>
            <p>High visibility, low pain. Perfect for text and detailed fine line work that you want to show off daily.</p>
            <h3>The Ribs</h3>
            <p>High pain, low visibility. A private, intimate spot often used for personal quotes or delicate floral flows.</p>
            <h3>The Thigh</h3>
            <p>The 'New Canvas'. A large, relatively flat area with low pain, perfect for large-scale portraits or mandalas that need space to breathe without warping.</p>
        `
    },
    {
        id: "pain-explained",
        slug: "pain-explained",
        title: "Tattoo Pain Explained: What Actually Hurts and Why",
        excerpt: "Is the spine really that bad? A realistic pain chart for your next session.",
        date: "January 30, 2026",
        readTime: "5 min read",
        category: "Education",
        content: `
            <p>Pain is temporary; pride is forever. But knowing what to expect helps you prepare mentally.</p>
            <h3>The "Ouch" Zones (High Pain)</h3>
            <ul>
                <li><strong>Ribs & Sternum:</strong> Thin skin directly over bone. You will feel the vibration in your skeleton.</li>
                <li><strong>Feet & Ankles:</strong> Zero fat cushioning. Sharp, stinging sensation.</li>
                <li><strong>Inner Bicep:</b> Exceptionally sensitive skin that bruises easily.</li>
            </ul>
            <h3>The "Easy" Zones (Low Pain)</h3>
            <ul>
                <li><strong>Outer Shoulder:</strong> Tough skin, muscular. Feels like dull scratching.</li>
                <li><strong>Outer Thigh:</strong> Very manageable, great for long sessions.</li>
                <li><strong>Forearm:</strong> The standard beginner spot for a reason.</li>
            </ul>
        `
    },
    {
        id: "choose-artist",
        slug: "choose-artist",
        title: "How to Choose the Right Tattoo Artist for Your Idea",
        excerpt: "Not all artists are the same. A checklist to ensure you don't end up on a 'Tattoo Fails' page.",
        date: "February 2, 2026",
        readTime: "7 min read",
        category: "Education",
        content: `
            <p>Your artist is a partner, not a xerox machine. Here is how to pick the right one at Pixel Tattoo or anywhere else.</p>
            <h3>1. Check HEALED Work</h3>
            <p>Fresh tattoos always look vibrant. Look for photos of "Healed" work in their portfolio. Are the lines still crisp? Is the shading smooth?</p>
            <h3>2. Style Specialization</h3>
            <p>Don't ask a geometric specialist to do a hyper-realistic portrait. Go to the master of that specific style.</p>
            <h3>3. Hygiene Check</h3>
            <p>Do they open needles in front of you? Is the station wrapped in plastic? If the shop looks dirty, run.</p>
            <h3>4. The Vibe</h3>
            <p>You will sit with this person for hours. Ensure they are respectful, listen to your ideas, and make you feel safe.</p>
        `
    },
    {
        id: "tattoo-aftercare-summer",
        slug: "tattoo-aftercare-surat-summer",
        title: "Tattoo Aftercare Tips for Surat's Hot Climate",
        excerpt: "Surat's heat and humidity can affect your healing process. Here is how to keep your new ink fresh and infection-free during summer.",
        date: "October 15, 2025",
        readTime: "5 min read",
        category: "Aftercare",
        content: "..."
    },
    {
        id: "first-tattoo-ideas",
        slug: "first-tattoo-ideas",
        title: "Top 20 Tattoo Ideas for First-Timers",
        excerpt: "Planning your first ink? We've curated a list of timeless, meaningful, and beginner-friendly tattoo ideas that you won't regret.",
        date: "November 2, 2025",
        readTime: "7 min read",
        category: "Inspiration",
        content: "..."
    },
    {
        id: "removal-expectations",
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
        category: "General Tattoo FAQs",
        items: [
            { q: "Which is the best tattoo studio in Surat?", a: "Pixel Tattoo is a professional tattoo studio in Surat, known for custom designs, hygiene standards, and experienced artists. We focus on personalized tattoos and a comfortable studio experience." },
            { q: "Do you create custom tattoo designs?", a: "Yes. We specialize in custom tattoo design based on your idea, reference, or story. Every tattoo is uniquely designed after a detailed consultation." },
            { q: "Is it safe to get a tattoo?", a: "Yes. At Pixel Tattoo, we follow strict hygiene protocols, use sterilized equipment, disposable needles, and premium inks to ensure safe tattooing." },
            { q: "Does getting a tattoo hurt?", a: "Pain varies depending on placement, size, and individual tolerance. Most clients describe it as manageable discomfort. We guide you properly before starting." },
            { q: "How do I prepare for my first tattoo?", a: "Get proper rest, eat well, stay hydrated, and avoid alcohol before your appointment. Our team will guide you during the consultation." },
            { q: "How long does a tattoo take to heal?", a: "Initial healing usually takes 7–10 days, while complete healing can take up to 3–4 weeks, depending on the tattoo size and care." }
        ]
    },
    {
        category: "Tattoo Style & Service FAQs",
        items: [
            { q: "Do you do minimalist and fine line tattoos?", a: "Yes. We specialize in minimalist, fine line, and small tattoos, perfect for subtle and elegant designs." },
            { q: "Can you cover an old or faded tattoo?", a: "Yes. We offer cover-up tattoos designed to hide or refresh old, faded, or unwanted tattoos after proper assessment." },
            { q: "Do you help with tattoo placement and size?", a: "Absolutely. During consultation, we help you choose the best placement, size, and design flow for your body." },
            { q: "How much does a tattoo cost in Surat?", a: "Tattoo pricing depends on size, design complexity, placement, and time required. We provide clear pricing after consultation." }
        ]
    },
    {
        category: "Aftercare & Healing FAQs",
        items: [
            { q: "What aftercare is required after getting a tattoo?", a: "We provide complete aftercare instructions, including cleaning, moisturizing, and precautions to ensure proper healing and long-lasting results." },
            { q: "Can I work out or swim after getting a tattoo?", a: "Avoid workouts, swimming, and excessive sweating for at least 7–10 days to prevent infection and ensure proper healing." }
        ]
    },
    {
        category: "Tattoo Removal FAQs",
        items: [
            { q: "Do you provide tattoo removal in Surat?", a: "Yes. Pixel Tattoo also offers professional tattoo removal services in Surat with proper consultation and safe procedures." },
            { q: "Is tattoo removal painful?", a: "Tattoo removal may cause mild discomfort, but it is generally tolerable. Pain levels vary depending on tattoo size and skin sensitivity." },
            { q: "How many sessions are required for tattoo removal?", a: "The number of sessions depends on tattoo size, ink depth, color, and skin type. Multiple sessions are usually required for best results." },
            { q: "Can all tattoos be completely removed?", a: "Many tattoos can be significantly faded or removed, but results vary. We provide honest expectations during consultation." }
        ]
    },
    {
        category: "Location & Booking FAQs",
        items: [
            { q: "Where is Pixel Tattoo located?", a: "Pixel Tattoo is located at City Light Road, Athwa, Surat, near Lavanya Market, making it easily accessible." },
            { q: "Do I need an appointment or can I walk in?", a: "Appointments are recommended for proper consultation and availability, but walk-ins may be accepted depending on schedule." },
            { q: "How can I book a tattoo consultation?", a: "You can book a consultation by calling us, messaging on WhatsApp, or visiting our studio in City Light, Surat." },
            { q: "Why choose Pixel Tattoo?", a: "We combine custom artistry, hygiene, experience, and honest consultation to deliver tattoos you’ll be proud of for life." }
        ]
    }
];
export const allCategories = [
    { name: "Custom Tattoo", href: "/tattoo-categories/custom-tattoo", color: "bg-red-900" },
    { name: "Minimalist", href: "/tattoo-categories/minimalist-tattoos", color: "bg-blue-900" },
    { name: "Fine Line", href: "/tattoo-categories/fine-line-tattoos", color: "bg-green-900" },
    { name: "Black & Grey", href: "/tattoo-categories/black-and-grey-tattoos", color: "bg-gray-900" },
    { name: "Cover Ups", href: "/tattoo-categories/cover-up-tattoos", color: "bg-purple-900" },
    { name: "Removal", href: "/tattoo-categories/tattoo-removal", color: "bg-red-950" },
    { name: "Small Tattoos", href: "/tattoo-categories/small-tattoos", color: "bg-pink-900" },
    { name: "Religious", href: "/tattoo-categories/religious-tattoos", color: "bg-yellow-900" },
    { name: "Geometric", href: "/tattoo-categories/geometric-tattoos", color: "bg-indigo-900" },
    { name: "Travel", href: "/tattoo-categories/travel-tattoos", color: "bg-cyan-900" },
    { name: "Animal", href: "/tattoo-categories/animal-tattoos", color: "bg-orange-900" },
    { name: "Calligraphy", href: "/tattoo-categories/calligraphy-tattoos", color: "bg-emerald-900" },
    { name: "Couple", href: "/tattoo-categories/couple-tattoos", color: "bg-rose-900" },
    { name: "Dot Work", href: "/tattoo-categories/dot-work-tattoos", color: "bg-teal-900" },
    { name: "Color", href: "/tattoo-categories/color-tattoos", color: "bg-fuchsia-900" },
];
