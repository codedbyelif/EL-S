
const logos = [
    { alt: "Astro", src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/astro-wordmark.svg" },
    { alt: "Company 1", src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/company/fictional-company-logo-1.svg" },
    { alt: "Company 2", src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/company/fictional-company-logo-2.svg" },
    { alt: "Company 3", src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/company/fictional-company-logo-3.svg" },
    { alt: "Company 4", src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/company/fictional-company-logo-4.svg" },
    { alt: "Company 5", src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/company/fictional-company-logo-5.svg" },
    { alt: "Company 6", src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/company/fictional-company-logo-6.svg" },
    { alt: "Company 7", src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/company/fictional-company-logo-7.svg" },
];

const LogoCarousel = () => {
    return (
        <section className="py-24 w-full overflow-hidden">
            <div className="container mx-auto px-6 lg:px-20">
                <div className="relative w-full mask-gradient-x">
                    <div className="flex w-full overflow-hidden pause-on-hover px-4">
                        <div className="flex animate-marquee gap-16 w-max items-center grayscale opacity-70">
                            {/* Render logos twice to ensure seamless loop */}
                            {[...logos, ...logos].map((logo, index) => (
                                <div key={index} className="flex justify-center items-center h-12 flex-shrink-0">
                                    <img
                                        alt={logo.alt}
                                        className="h-8 w-auto dark:invert hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                                        src={logo.src}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                    {/* Fade edges */}
                    <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none"></div>
                    <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none"></div>
                </div>
            </div>
        </section>
    );
};

export default LogoCarousel;
