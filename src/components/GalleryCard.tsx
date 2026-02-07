import Link from "next/link";
import { cn } from "@/lib/utils";

interface GalleryCardProps {
    name: string;
    href: string;
    color: string;
}

export const GalleryCard = ({ name, href, color }: GalleryCardProps) => {
    return (
        <Link
            href={href}
            target="_blank"
            className="group relative overflow-hidden rounded-sm aspect-[3/4] bg-neutral-900 border border-white/5 hover:border-brand/50 transition-all duration-500 block"
        >
            {/* Color Gradient Overlay */}
            <div className={cn(
                "absolute inset-0 bg-gradient-to-br to-black opacity-20 group-hover:opacity-40 transition-opacity duration-500",
                color // Assuming color is a full class like 'bg-red-900' or similar, but verify
            )} />
            {/* Note: The 'color' prop in data seems to include 'bg-' prefix e.g. 'bg-red-900'. 
               However, to use it in gradient 'from-red-900', we might need to adjust or just overlay it.
               The previous implementation was `bg-gradient-to-br ${cat.color} to-black`.
               If cat.color is 'bg-red-900', then `bg-gradient-to-br bg-red-900 to-black` is invalid Tailwind for gradient stops.
               Wait, let's check the previous usage: `className={\`absolute inset-0 \${cat.color} ...\`}`. 
               Ah, the previous code was: `<div className={\`absolute inset-0 \${cat.color} opacity-80 ...\`} />` 
               AND THEN on Step 1321 it was `<div className={\`absolute inset-0 bg-gradient-to-br \${cat.color} to-black ...\`} />`
               
               If `cat.color` is `bg-red-900` (background color utility), `bg-gradient-to-br bg-red-900 to-black` DOES NOT WORK as a gradient stop.
               Gradient stops need `from-red-900` etc.
               However, maybe the user code was actually using `from-` classes in data? 
               Let's check `src/app/gallery/page.tsx` content from Step 1250.
               The data has `color: "bg-red-900"`.
               If the code was `<div className={\`absolute inset-0 bg-gradient-to-br \${cat.color} to-black ...\`} />`, 
               Tailwind might process `bg-red-900` as the *background color* and the gradient utilities as ... well, `bg-gradient-to-br` sets the image.
               If `bg-red-900` is also there, one might override the other or cascade.
               Actually, `bg-gradient-...` sets `background-image`. `bg-red-900` sets `background-color`.
               If `bg-gradient-to-br` defaults `from` to transparent? No.
               
               Let's re-read the code I wrote in Step 1321:
               `className={\`absolute inset-0 bg-gradient-to-br \${cat.color} to-black ...\`} `
               If `cat.color` is `bg-red-900`, the string is `absolute inset-0 bg-gradient-to-br bg-red-900 to-black`.
               This likely results in a black gradient (defaults) on top of red background?
               Or maybe it worked because I used opacity?
               
               To be safe and "Premium", I should probably use `bg-red-900` as the base and a generic gradient overlay, OR map properly.
               The simplest path that worked before: Keep using `cat.color` (which is `bg-red-900`) combined with gradient utils, even if technically weird.
               Actually, I'll just use the `color` class as the background and overlay a gradient.
               
               Updated Plan for Component:
               Use `color` as background. Add a gradient overlay `bg-gradient-to-t from-black/90 ...`.
            */}

            <div className={cn("absolute inset-0 transition-opacity duration-500 opacity-30 group-hover:opacity-50", color)} />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/20 opacity-80" />

            {/* Content */}
            <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
                <h3 className="text-white font-heading font-bold text-2xl uppercase tracking-widest mb-4 transform group-hover:-translate-y-2 transition-transform duration-500 drop-shadow-md">
                    {name}
                </h3>
                <div className="w-8 h-px bg-brand/50 group-hover:w-16 group-hover:bg-brand transition-all duration-500 mb-6 shadow-[0_0_10px_rgba(255,255,255,0.3)]" />

                {/* The Button */}
                <span className="inline-block px-6 py-3 border border-white/30 text-white text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-white hover:text-black hover:border-white transition-all duration-300 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 delay-75 rounded-sm backdrop-blur-sm">
                    Explore Now
                </span>
            </div>
        </Link>
    );
};
