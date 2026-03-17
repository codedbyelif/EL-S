import Link from "next/link";
import React from "react";

const PhoneFrame = ({ src, alt, className = "" }: { src: string; alt: string; className?: string }) => {
    return (
        <div className={`relative inline-block w-full align-middle leading-none dark ${className}`} style={{ aspectRatio: "433 / 882" }}>
            <div
                className="pointer-events-none absolute z-0 overflow-hidden"
                style={{
                    left: "4.90762%",
                    top: "2.18254%",
                    width: "89.9538%",
                    height: "95.6349%",
                    borderRadius: "14.3132% / 6.60937%"
                }}
            >
                <img alt={alt} className="block size-full object-cover object-top" src={src} />
            </div>
            <svg
                viewBox="0 0 433 882"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute inset-0 size-full"
                style={{ transform: "translateZ(0px)" }}
            >
                <g mask="url(#screenPunch)">
                    <path d="M2 73C2 32.6832 34.6832 0 75 0H357C397.317 0 430 32.6832 430 73V809C430 849.317 397.317 882 357 882H75C34.6832 882 2 849.317 2 809V73Z" className="fill-[#404040]" />
                    <path d="M0 171C0 170.448 0.447715 170 1 170H3V204H1C0.447715 204 0 203.552 0 203V171Z" className="fill-[#404040]" />
                    <path d="M1 234C1 233.448 1.44772 233 2 233H3.5V300H2C1.44772 300 1 299.552 1 299V234Z" className="fill-[#404040]" />
                    <path d="M1 319C1 318.448 1.44772 318 2 318H3.5V385H2C1.44772 385 1 384.552 1 384V319Z" className="fill-[#404040]" />
                    <path d="M430 279H432C432.552 279 433 279.448 433 280V384C433 384.552 432.552 385 432 385H430V279Z" className="fill-[#404040]" />
                    <path d="M6 74C6 35.3401 37.3401 4 76 4H356C394.66 4 426 35.3401 426 74V808C426 846.66 394.66 878 356 878H76C37.3401 878 6 846.66 6 808V74Z" className="fill-[#262626]" />
                </g>
                <path opacity="0.5" d="M174 5H258V5.5C258 6.60457 257.105 7.5 256 7.5H176C174.895 7.5 174 6.60457 174 5.5V5Z" className="fill-[#404040]" />
                <path d="M21.25 75C21.25 44.2101 46.2101 19.25 77 19.25H355C385.79 19.25 410.75 44.2101 410.75 75V807C410.75 837.79 385.79 862.75 355 862.75H77C46.2101 862.75 21.25 837.79 21.25 807V75Z" className="fill-[#404040] stroke-[#404040] stroke-[0.5]" mask="url(#screenPunch)" />
                <path d="M154 48.5C154 38.2827 162.283 30 172.5 30H259.5C269.717 30 278 38.2827 278 48.5C278 58.7173 269.717 67 259.5 67H172.5C162.283 67 154 58.7173 154 48.5Z" className="fill-[#262626]" />
                <path d="M249 48.5C249 42.701 253.701 38 259.5 38C265.299 38 270 42.701 270 48.5C270 54.299 265.299 59 259.5 59C253.701 59 249 54.299 249 48.5Z" className="fill-[#262626]" />
                <path d="M254 48.5C254 45.4624 256.462 43 259.5 43C262.538 43 265 45.4624 265 48.5C265 51.5376 262.538 54 259.5 54C256.462 54 254 51.5376 254 48.5Z" className="fill-[#404040]" />
                <defs>
                    <mask id="screenPunch" maskUnits="userSpaceOnUse">
                        <rect x="0" y="0" width="433" height="882" fill="white" />
                        <rect x="21.25" y="19.25" width="389.5" height="843.5" rx="55.75" ry="55.75" fill="black" />
                    </mask>
                    <clipPath id="roundedCorners">
                        <rect x="21.25" y="19.25" width="389.5" height="843.5" rx="55.75" ry="55.75" />
                    </clipPath>
                </defs>
            </svg>
        </div>
    );
};

const AppShowcase = () => {
    return (
        <section className="overflow-hidden py-10 w-full bg-black text-white">
            <div className="container mx-auto px-6 lg:px-20 border-b border-white/10 pb-0">
                <div className="flex flex-col items-center gap-6">
                    <span className="inline-flex items-center justify-center rounded-full border border-white/10 px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 gap-1 text-white hover:bg-white/5 transition-colors">
                        Mobil Uygulamalar
                    </span>
                    <h1 className="text-center text-4xl font-bold text-balance md:text-5xl lg:text-6xl text-white">
                        Google Play ve App Store'da Çıkan Uygulamalarımız
                    </h1>
                </div>
                <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
                    <Link href="https://apps.apple.com/tr/app/rezzgo-business/id6759405397?l=tr">
                        <img
                            alt="app store"
                            src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/badges/appstore.svg"
                            className="h-8 w-auto"
                        />
                    </Link>
                    <Link href="https://play.google.com/store/apps/details?id=com.jefedejefes.rezzgo&hl=en">
                        <img
                            alt="google play"
                            src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/badges/googleplay.svg"
                            className="h-8 w-auto"
                        />
                    </Link>
                </div>
                {/* Phones Container */}
                <div className="mt-10 flex items-end justify-center gap-0 lg:gap-0 -mx-4 sm:-mx-10 md:mx-0">
                    {/* Phone 1 (Left) */}
                    <div className="order-1 relative z-10 w-1/3 max-w-[200px] md:max-w-xs translate-x-4 md:translate-x-8 lg:translate-x-12 opacity-90 scale-90 origin-bottom-right">
                        <div className="relative aspect-[433/882]">
                            <PhoneFrame
                                src="/app1.jpeg"
                                alt="App Screen 1"
                                className="block w-full h-full"
                            />
                        </div>
                    </div>

                    {/* Phone 2 (Center - Main) */}
                    <div className="order-2 relative z-20 w-1/2 max-w-[260px] md:max-w-sm shadow-2xl">
                        <div className="relative aspect-[433/882]">
                            <PhoneFrame
                                src="/app3.jpeg"
                                alt="App Screen 3"
                                className="block w-full h-full"
                            />
                        </div>
                    </div>

                    {/* Phone 3 (Right) */}
                    <div className="order-3 relative z-10 w-1/3 max-w-[200px] md:max-w-xs -translate-x-4 md:-translate-x-8 lg:-translate-x-12 opacity-90 scale-90 origin-bottom-left">
                        <div className="relative aspect-[433/882]">
                            <PhoneFrame
                                src="/app2.jpeg"
                                alt="App Screen 2"
                                className="block w-full h-full"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AppShowcase;
