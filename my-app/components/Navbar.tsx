"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const menuItems = [
        { name: "Products", href: "#" },
        { name: "Resources", href: "/resources" },
        { name: "Integration", href: "#" },
    ];

    return (
        <section className="absolute top-0 left-0 right-0 z-50 mx-auto flex max-w-full items-center justify-between bg-transparent px-6 py-3 md:w-fit md:rounded-b-2xl lg:gap-4 w-full">
            <Link href="/" className="flex items-center gap-1">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                    className="max-h-5"
                    alt="logo"
                    src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/shadcnblockscom-icon.svg"
                />
            </Link>

            {/* Mobile Menu Trigger */}
            <div className="mr-2 flex items-center justify-center md:hidden">
                <button
                    type="button"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    className="text-foreground"
                >
                    {isMobileMenuOpen ? (
                        <X className="size-5" />
                    ) : (
                        <Menu className="size-5" />
                    )}
                </button>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex flex-1 items-center justify-center">
                <ul className="flex flex-1 list-none items-center justify-center gap-1">
                    {menuItems.map((item) => (
                        <li key={item.name}>
                            <Link
                                href={item.href}
                                className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-transparent px-3 py-1.5 text-xs font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50"
                            >
                                {item.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>

            {/* Mobile Menu Overlay */}
            {isMobileMenuOpen && (
                <div className="absolute top-full left-0 right-0 z-50 bg-background p-4 md:hidden shadow-lg animate-in slide-in-from-top-5">
                    <ul className="flex flex-col gap-2">
                        {menuItems.map((item) => (
                            <li key={item.name}>
                                <Link
                                    href={item.href}
                                    className="block px-2 py-1 font-medium hover:bg-accent rounded-md"
                                >
                                    {item.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </section>
    );
};

export default Navbar;
