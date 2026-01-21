
import React from 'react';
import GridScan from './GridScan';
import Link from 'next/link';

const HeroSection = () => {
    return (
        <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 z-0">
                <GridScan
                    sensitivity={0.55}
                    lineThickness={1}
                    linesColor="#392e4e"
                    gridScale={0.1}
                    scanColor="#FF9FFC"
                    scanOpacity={0.4}
                    enablePost
                    bloomIntensity={0.6}
                    chromaticAberration={0.002}
                    noiseIntensity={0.01}
                />
                {/* Gradient fade overlay */}
                <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-background via-background/80 to-transparent z-10 pointer-events-none" />
            </div>
            <div className="relative z-20 flex flex-col items-center justify-center">
                <div className="flex w-fit flex-col items-center justify-center gap-4 pb-3 text-center">
                    <button
                        data-slot="button"
                        data-variant="secondary"
                        data-size="default"
                        className="whitespace-nowrap font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive text-secondary-foreground hover:bg-secondary/80 h-9 has-[>svg]:px-3 text-md group flex w-fit items-center justify-center gap-3 rounded-full bg-muted/60 px-5 py-1 tracking-tight"
                    >
                        <span className="size-2 rounded-full bg-pink-500"></span>
                        <span> Project Management </span>
                    </button>
                    <div className="relative flex max-w-4xl items-center justify-center text-center text-5xl font-medium tracking-tight md:text-7xl">
                        <h1 className="relative z-10 tracking-tighter">
                            <span className="mr-3 text-muted-foreground/50">Projelerinize</span>
                            <span
                                className="relative z-0 inline-flex after:absolute after:left-[0.04em] after:top-[0.04em] after:content-[attr(data-text)] after:bg-[linear-gradient(45deg,transparent_45%,var(--shadow-color)_45%,var(--shadow-color)_55%,transparent_0)] after:-z-10 after:bg-[length:0.06em_0.06em] after:bg-clip-text after:text-transparent after:animate-line-shadow"
                                data-text=" Değer "
                                style={{ '--shadow-color': 'white' } as React.CSSProperties}
                            >
                                {' '}Değer{' '}
                            </span>
                            <span className="text-muted-foreground/50"> katıyoruz</span>
                            <span>.</span>
                        </h1>
                        <div className="absolute z-[9] h-[105%] w-[85%]"></div>
                    </div>
                    <p className="mt-5 max-w-xl text-muted-foreground/80">
                        Merhaba, ben Elif. Yazılım dünyasında verimlilik ve kullanıcı deneyimi odaklı projeler yönetiyorum. Teknoloji ile yönetim becerilerini birleştirerek değer yaratıyorum.
                    </p>
                    <div className="flex gap-4">
                        <Link
                            href="/projects"
                            className="whitespace-nowrap font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive bg-secondary text-secondary-foreground hover:bg-secondary/80 h-9 has-[>svg]:px-3 text-md group flex w-fit items-center justify-center gap-2 rounded-full px-4 py-1 tracking-tight"
                        >
                            <span>Projelerim</span>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="lucide lucide-arrow-right size-4 -rotate-45 transition-all ease-out group-hover:ml-3 group-hover:rotate-0"
                                aria-hidden="true"
                            >
                                <path d="M5 12h14"></path>
                                <path d="m12 5 7 7-7 7"></path>
                            </svg>
                        </Link>
                        <Link
                            href="/contact"
                            className="whitespace-nowrap font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive bg-primary text-primary-foreground hover:bg-primary/90 h-9 has-[>svg]:px-3 text-md group flex w-fit items-center justify-center gap-2 rounded-full px-4 py-1 tracking-tight"
                        >
                            <span>İletişime Geçin</span>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="lucide lucide-arrow-right size-4 -rotate-45 transition-all ease-out group-hover:ml-3 group-hover:rotate-0"
                                aria-hidden="true"
                            >
                                <path d="M5 12h14"></path>
                                <path d="m12 5 7 7-7 7"></path>
                            </svg>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
