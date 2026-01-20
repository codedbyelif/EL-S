"use client";

import { ArrowRight, Check, Slash } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const BlogSection = () => {
    const [activeCategory, setActiveCategory] = useState("All");

    const categories = [
        { name: "All", label: "All" },
        { name: "Productivity", label: "Productivity" },
        { name: "Accessibility", label: "Accessibility" },
        { name: "Performance", label: "Performance" },
    ];

    const blogPosts = [
        {
            category: "Productivity",
            title: "5 VS Code Extensions That Will Save You Hours",
            description:
                "Discover must-have extensions to boost your coding efficiency and streamline your workflow.",
            image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-2.svg",
            buttonText: "Boost Your Editor",
        },
        {
            category: "Productivity",
            title: "Time Management for Developers: What Really Works",
            description:
                "Learn proven strategies to avoid burnout and stay on top of your tasks without stress.",
            image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-3.svg",
            buttonText: "Manage Your Time",
        },
        {
            category: "Productivity",
            title: "Automate Your Workflow with Task Runners",
            description:
                "Use tools like Gulp, npm scripts, and GitHub Actions to automate repetitive development tasks.",
            image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-4.svg",
            buttonText: "Automate Now",
        },
        {
            category: "Productivity",
            title: "Effective Daily Routines for Developers",
            description:
                "Discover routines that top developers follow to stay productive, creative, and focused.",
            image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-5.svg",
            buttonText: "Find Your Flow",
        },
        {
            category: "Productivity",
            title: "Master Git Like a Pro with These Shortcuts",
            description:
                "Speed up your version control workflow with powerful Git aliases and tips.",
            image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-6.svg",
            buttonText: "Speed Up Git",
        },
        {
            category: "Productivity",
            title: "Reducing Context Switching as a Developer",
            description:
                "Minimize distractions and deep-dive into your code with focused work practices.",
            image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg",
            buttonText: "Stay Focused",
        },
        // Accessibility
        {
            category: "Accessibility",
            title: "Remote Work Setup: Tools for a Distraction-Free Environment",
            description:
                "Set up your space and software stack for maximum productivity when working from home.",
            image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-2.svg",
            buttonText: "Upgrade Your Setup",
        },
        {
            category: "Accessibility",
            title: "Pomodoro for Coders: Does It Really Work?",
            description:
                "A practical review of the Pomodoro technique and its effectiveness for software development.",
            image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-3.svg",
            buttonText: "Try the Method",
        },
        {
            category: "Accessibility",
            title: "Why Accessibility Should Be Part of Your MVP",
            description:
                "Making your product inclusive from day one improves usability and reach.",
            image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-4.svg",
            buttonText: "Learn Why",
        },
    ];

    // Logic to filter posts (if we wanted true filtering)
    // For now, I'll display the list similar to the snippet, but potentially filtered by activeCategory if desired.
    // The snippet showed many "Productivity" posts and some "Accessibility" ones.
    // I will just show all of them or filter if 'All' is not selected.
    const displayedPosts =
        activeCategory === "All"
            ? blogPosts
            : blogPosts.filter((post) => post.category === activeCategory);

    return (
        <section className="pb-32 w-full bg-background">
            <div className="bg-muted bg-[url('https://deifkwefumgah.cloudfront.net/shadcnblocks/block/patterns/dot-pattern-2.svg')] bg-[length:3.125rem_3.125rem] bg-repeat">
                <div className="container mx-auto flex flex-col items-start justify-start gap-16 py-20 lg:flex-row lg:items-center lg:justify-between px-6">
                    <div className="flex w-full flex-col justify-between gap-12">
                        <div className="flex w-full max-w-[36rem] flex-col gap-8">
                            <nav aria-label="breadcrumb">
                                <ol className="text-muted-foreground flex flex-wrap items-center gap-1.5 text-sm break-words sm:gap-2.5">
                                    <li className="inline-flex items-center gap-1.5">
                                        <Link
                                            href="#"
                                            className="hover:text-foreground transition-colors"
                                        >
                                            Resources
                                        </Link>
                                    </li>
                                    <li role="presentation" aria-hidden="true">
                                        <Slash className="size-3.5" />
                                    </li>
                                    <li className="inline-flex items-center gap-1.5">
                                        <Link
                                            href="#"
                                            className="hover:text-foreground transition-colors"
                                        >
                                            Blogs
                                        </Link>
                                    </li>
                                </ol>
                            </nav>
                            <div className="flex w-full flex-col gap-5">
                                <h1 className="text-[2.5rem] leading-[1.2] font-semibold md:text-5xl lg:text-6xl text-foreground">
                                    Best Blog Articles
                                </h1>
                                <p className="text-xl leading-[1.4] text-muted-foreground">
                                    The best blog is one that captivates readers with engaging,
                                    well-researched content presented in a clear and relatable
                                    way.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="w-full max-w-[27.5rem]">
                        <Link href="#" className="block h-full w-full group">
                            <div className="bg-card text-card-foreground flex flex-col gap-6 shadow-sm size-full rounded-lg border py-0 overflow-hidden transition-all group-hover:shadow-md">
                                <div className="p-0">
                                    <div className="border-b p-2.5 text-sm leading-[1.2] font-medium text-muted-foreground">
                                        Innovation Spotlight
                                    </div>
                                    <div className="relative w-full aspect-[1.52]">
                                        <img
                                            alt="How AI is Transforming Frontend Development"
                                            className="block size-full object-cover object-center"
                                            src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg"
                                        />
                                    </div>
                                    <div className="flex w-full flex-col gap-5 p-5">
                                        <h2 className="text-lg leading-tight font-medium md:text-xl group-hover:underline">
                                            How AI is Transforming Frontend Development
                                        </h2>
                                        <div className="w-full max-w-[20rem]">
                                            <p className="text-sm leading-[1.4] font-medium text-muted-foreground">
                                                Explore how tools like GitHub Copilot, AI design
                                                generators, and code assistants are changing the way
                                                developers build UIs and ship features faster.
                                            </p>
                                        </div>
                                        <div>
                                            <button className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-8 rounded-md gap-1.5 px-3">
                                                Discover the Future
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
            <div className="py-20">
                <div className="container mx-auto flex flex-col gap-8 px-6">
                    <h2 className="text-[1.75rem] leading-none font-medium md:text-[2.25rem] lg:text-[2rem] text-foreground">
                        All Blogs
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
                                {displayedPosts.map((post, idx) => (
                                    <Link
                                        key={idx}
                                        href="#"
                                        className="block h-full w-full group"
                                    >
                                        <div className="bg-card text-card-foreground flex flex-col gap-6 shadow-sm size-full rounded-lg border py-0 overflow-hidden transition-all group-hover:shadow-md">
                                            <div className="p-0">
                                                <div className="border-b p-2.5 text-sm leading-[1.2] font-medium text-muted-foreground">
                                                    {post.category}
                                                </div>
                                                <div className="relative w-full aspect-[1.52]">
                                                    <img
                                                        alt={post.title}
                                                        className="block size-full object-cover object-center"
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
                                                        <button className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-8 rounded-md gap-1.5 px-3">
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
                            <div className="flex justify-center">
                                <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-secondary text-secondary-foreground hover:bg-secondary/80 h-9 px-4 py-2">
                                    Load More
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BlogSection;
