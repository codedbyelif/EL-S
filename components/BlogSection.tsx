"use client";

import { ArrowRight, Check, Slash } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { projects } from "@/lib/data";

const BlogSection = () => {
    const [activeCategory, setActiveCategory] = useState("Tümü");

    const categories = [
        { name: "Tümü", label: "Tümü" },
        { name: "En Yeni", label: "En Yeni" },
        { name: "Devam Eden", label: "Devam Eden" },
        { name: "Yatırım Alan", label: "Yatırım Alan" },
    ];

    // Separate the featured project (first one) and the rest
    const featuredProject = projects[0];
    const otherProjects = projects.slice(1);

    const displayedPosts =
        activeCategory === "Tümü"
            ? otherProjects
            : otherProjects.filter((post) => post.category === activeCategory);

    return (
        <section className="pb-10 w-full bg-background">
            <div className="bg-transparent">
                <div className="container mx-auto flex flex-col items-start justify-start gap-16 py-10 lg:flex-row lg:items-center lg:justify-between px-6">
                    <div className="flex w-full flex-col justify-between gap-12">
                        <div className="flex w-full max-w-[36rem] flex-col gap-8">

                            <div className="flex w-full flex-col gap-5">
                                <h1 className="text-[2.5rem] leading-[1.2] font-semibold md:text-5xl lg:text-6xl text-foreground">
                                    Ürün Geliştirme Günlüğü
                                </h1>
                                <p className="text-xl leading-[1.4] text-muted-foreground">
                                    Ürün geliştirme sürecini takip edebilirsiniz. Her gün yeni gelişmeler ve gelişmeleri paylaşacağız.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="w-full max-w-[27.5rem]">
                        <Link href={`/project-details/${featuredProject.id}`} className="block h-full w-full group">
                            <div className="bg-transparent text-foreground flex flex-col gap-6 shadow-none size-full rounded-lg border border-zinc-800 py-0 overflow-hidden transition-all">
                                <div className="p-0">
                                    <div className="p-2.5 text-sm leading-[1.2] font-medium text-muted-foreground">
                                        Lovent
                                    </div>
                                    <div className="relative w-full aspect-[1.52]">
                                        <img
                                            alt={featuredProject.title}
                                            className="block size-full object-cover object-[50%_30%]"
                                            src={featuredProject.image}
                                        />
                                    </div>
                                    <div className="flex w-full flex-col gap-5 p-5">
                                        <h2 className="text-lg leading-tight font-medium md:text-xl group-hover:underline">
                                            {featuredProject.title}
                                        </h2>
                                        <div className="w-full max-w-[20rem]">
                                            <p className="text-sm leading-[1.4] font-medium text-muted-foreground">
                                                {featuredProject.description}
                                            </p>
                                        </div>
                                        <div>
                                            <button className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-8 rounded-md gap-1.5 px-3">
                                                {featuredProject.buttonText}
                                                <ArrowRight className="size-4" />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="py-10">
                <div className="container mx-auto flex flex-col gap-8 px-6">
                    <h2 className="text-[1.75rem] leading-none font-medium md:text-[2.25rem] lg:text-[2rem] text-foreground">
                        Bütün Projeler
                    </h2>
                    <div>
                        <div>
                            <div className="flex w-full flex-wrap items-center gap-2.5">
                                {categories.map((cat) => (
                                    <button
                                        key={cat.name}
                                        onClick={() => setActiveCategory(cat.name)}
                                        className={`text-sm leading-none font-medium flex cursor-pointer items-center gap-2.5 rounded-full px-2.5 py-1.5 transition-colors ${activeCategory === cat.name
                                            ? "bg-primary text-primary-foreground"
                                            : "bg-muted text-muted-foreground hover:bg-muted/80"
                                            }`}
                                    >
                                        {cat.label}
                                        {activeCategory === cat.name && <Check className="size-3.5" />}
                                    </button>
                                ))}
                            </div>
                        </div>
                        <div className="flex w-full flex-col gap-4 py-8 lg:gap-8">
                            <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
                                {displayedPosts.map((post) => (
                                    <Link
                                        key={post.id}
                                        href={`/project-details/${post.id}`}
                                        className="block h-full w-full group"
                                    >
                                        <div className="bg-card text-card-foreground flex flex-col gap-6 shadow-sm size-full rounded-lg border border-zinc-800 py-0 overflow-hidden transition-all group-hover:shadow-md">
                                            <div className="p-0">
                                                <div className="p-2.5 text-sm leading-[1.2] font-medium text-muted-foreground">
                                                    {post.category}
                                                </div>
                                                <div className="relative w-full aspect-[1.52]">
                                                    <img
                                                        alt={post.title}
                                                        className="block size-full object-cover object-[50%_30%]"
                                                        src={post.image}
                                                    />
                                                </div>
                                                <div className="flex w-full flex-col gap-5 p-5">
                                                    <h2 className="text-lg leading-tight font-medium md:text-xl group-hover:underline">
                                                        {post.title}
                                                    </h2>
                                                    <div className="w-full max-w-[20rem]">
                                                        <p className="text-sm leading-[1.4] font-medium text-muted-foreground">
                                                            {post.description}
                                                        </p>
                                                    </div>
                                                    <div>
                                                        <button className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-8 rounded-md gap-1.5 px-3">
                                                            {post.buttonText}
                                                            <ArrowRight className="size-4" />
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                ))}
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BlogSection;
