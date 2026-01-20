"use client";
import React from "react";

const images = [
    "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/person1.jpeg",
    "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/person2.jpeg",
    "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/person3.jpeg",
    "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/person4.jpeg",
    "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/person5.jpeg",
    "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/bw3.jpeg",
    "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/bw11.jpeg",
];

const InspirationSection = () => {
    const [activeIndex, setActiveIndex] = React.useState(2); // Start with middle image (index 2 of initial view)

    // Calculate position relative to active index to determine style
    const getImageStyle = (index: number) => {
        const offset = index - activeIndex;

        // Base classes for transition
        let classes = "h-80 sm:h-[420px] w-full rounded-xl overflow-hidden transition-all duration-500 ease-in-out object-cover shadow-lg relative";

        if (offset === 0) {
            // Center (Active)
            return `${classes} z-30 scale-100 rotate-0 shadow-2xl ring-4 ring-white/10 grayscale-0`;
        } else if (offset === -1) {
            // Left neighbor
            return `${classes} z-20 scale-75 -rotate-12 md:-rotate-45 translate-x-12 md:translate-x-40 grayscale hover:grayscale-0 hover:z-40 cursor-pointer`;
        } else if (offset === 1) {
            // Right neighbor
            return `${classes} z-20 scale-75 rotate-12 md:rotate-45 -translate-x-12 md:-translate-x-40 grayscale hover:grayscale-0 hover:z-40 cursor-pointer`;
        } else if (offset === -2) {
            // Far left
            return `${classes} z-10 scale-50 -rotate-12 md:-rotate-45 translate-x-24 md:translate-x-80 opacity-40 grayscale`;
        } else if (offset === 2) {
            // Far right
            return `${classes} z-10 scale-50 rotate-12 md:rotate-45 -translate-x-24 md:-translate-x-80 opacity-40 grayscale`;
        }

        return `${classes} hidden`; // Hide others
    };

    const handleImageClick = (index: number) => {
        setActiveIndex(index);
    };

    return (
        <section className="bg-black py-32 w-full text-white overflow-hidden">
            <div className="container mx-auto flex flex-col items-center justify-center gap-4 text-center px-4">
                <h1 className="max-w-3xl text-5xl font-medium tracking-tighter md:px-9 md:text-6xl text-white">
                    <span className="italic font-serif">The only</span> App you'll ever need
                    to stay <span className="italic font-serif">inspired</span>
                </h1>
                <p className="mt-5 max-w-xl text-gray-400">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum animi,
                    ipsam provident optio delectus neque aliquid cumque. Beatae, odio!
                </p>

                {/* Carousel */}
                <div className="relative w-full max-w-5xl mt-20 flex justify-center items-center h-[500px]">
                    <div className="flex justify-center items-center w-full relative">
                        {images.map((src, idx) => {
                            // Only render items within range to avoid clutter
                            if (Math.abs(idx - activeIndex) > 2) return null;

                            return (
                                <div
                                    key={idx}
                                    className={`absolute w-64 md:w-80 transition-all duration-500 ease-in-out flex justify-center items-center`}
                                    style={{
                                        zIndex: 30 - Math.abs(idx - activeIndex) * 10
                                    }}
                                    onClick={() => handleImageClick(idx)}
                                >
                                    <div className={getImageStyle(idx)}>
                                        <img className="h-full w-full object-cover" alt={`Person ${idx + 1}`} src={src} />
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Scrollbar / Indicators */}
                <div className="mt-8 flex flex-col items-center justify-center gap-2">
                    <p className="text-lg font-medium text-white transition-all duration-300">
                        {activeIndex === 0 ? "Sarah William" : activeIndex === 1 ? "John Doe" : activeIndex === 2 ? "Jane Smith" : "Creative Soul"}
                    </p>
                    <div className="flex gap-1 items-end h-4">
                        {images.map((_, i) => (
                            <div
                                key={i}
                                className={`w-[2px] bg-white rounded-full transition-all duration-300 cursor-pointer ${i === activeIndex ? "h-full opacity-100" : "h-2 opacity-30 hover:opacity-60"}`}
                                onClick={() => setActiveIndex(i)}
                            ></div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default InspirationSection;
