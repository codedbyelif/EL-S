

const logos = [
    { name: "Node.js", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
    { name: "Express", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
    { name: "React Native", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "Next.js", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
    { name: "Tailwind CSS", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
    { name: "Supabase", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg" },
    { name: "TypeScript", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
    { name: "C++", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },
    { name: "C", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" },
];

const LogoCarousel = () => {
    return (
        <section className="py-10 w-full overflow-hidden">
            <div className="container mx-auto px-6 lg:px-20">
                <div className="relative w-full mask-gradient-x">
                    <div className="flex w-full overflow-hidden pause-on-hover px-4">
                        <div className="flex animate-marquee gap-16 w-max items-center grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-500">
                            {/* Render logos twice to ensure seamless loop */}
                            {[...logos, ...logos].map((logo, index) => (
                                <div key={index} className="flex justify-center items-center gap-3 h-12 flex-shrink-0 group cursor-default">
                                    <img
                                        alt={logo.name}
                                        className="h-8 w-auto dark:invert transition-all duration-300"
                                        src={logo.src}
                                    />
                                    <span className="text-lg font-medium text-muted-foreground group-hover:text-white transition-colors duration-300">{logo.name}</span>
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
