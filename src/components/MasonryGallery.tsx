"use client";

import { useState } from "react";
import { X, ZoomIn } from "lucide-react";

export const MasonryGallery = () => {
    const [selectedId, setSelectedId] = useState<number | null>(null);

    // Placeholder data - in a real app, this would be passed as props
    const items = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    return (
        <>
            <div className="columns-1 md:columns-2 lg:columns-3 gap-2 space-y-2 mt-12">
                {items.map((item) => (
                    <div
                        key={item}
                        className="break-inside-avoid relative group rounded-sm overflow-hidden cursor-zoom-in"
                        onClick={() => setSelectedId(item)}
                    >
                        <div className={`w-full bg-neutral-200 ${item % 3 === 0 ? 'aspect-[3/4]' : item % 2 === 0 ? 'aspect-square' : 'aspect-[4/5]'}`}></div>
                        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                            <span className="text-white font-heading text-sm tracking-widest uppercase flex items-center gap-2">
                                <ZoomIn size={16} /> Expand
                            </span>
                        </div>
                    </div>
                ))}
            </div>

            {/* Lightbox Modal */}
            {selectedId !== null && (
                <div
                    className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 backdrop-blur-sm animate-in fade-in duration-200"
                    onClick={() => setSelectedId(null)}
                >
                    <button
                        className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors"
                        onClick={() => setSelectedId(null)}
                    >
                        <X size={48} />
                    </button>

                    <div
                        className="relative max-w-4xl max-h-[90vh] w-full h-full flex items-center justify-center"
                        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking image area
                    >
                        {/* Placeholder Expanded Image */}
                        <div className={`bg-neutral-800 w-full h-full flex items-center justify-center text-white/20 font-heading text-4xl uppercase tracking-widest rounded-sm ${selectedId % 3 === 0 ? 'aspect-[3/4]' : selectedId % 2 === 0 ? 'aspect-square' : 'aspect-[4/5]'}`}>
                            Image {selectedId}
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};
