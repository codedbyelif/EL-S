"use client";

import React from "react";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import { Project } from "@/lib/data";

interface ProjectDetailsProps {
    project: Project;
}

const ProjectDetails = ({ project }: ProjectDetailsProps) => {
    return (
        <section className="mx-auto max-w-4xl px-4 py-8 md:py-12 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <Link
                href="/projects"
                className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
                <ArrowLeft className="h-4 w-4" />
                Back to Projects
            </Link>

            <div className="mb-12">
                <h2 className="mb-8 text-2xl font-light text-foreground md:text-3xl">
                    {project.content.heading}
                </h2>
                <div className="prose max-w-none text-muted-foreground prose-gray space-y-4">
                    {project.content.paragraphs.map((paragraph, index) => (
                        <p key={index}>{paragraph}</p>
                    ))}
                </div>
            </div>

            <div className="relative">
                <Carousel className="w-full">
                    <CarouselContent className="-ml-4">
                        {project.content.images.map((imgSrc, index) => (
                            <CarouselItem key={index} className="pl-4 basis-full">
                                <div className="aspect-[5/3] overflow-hidden rounded-lg">
                                    <img
                                        alt={`${project.title} image ${index + 1}`}
                                        className="h-full w-full object-cover hover:scale-105 transition-transform duration-500"
                                        src={imgSrc}
                                    />
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious className="left-4 bg-background/50 hover:bg-background border-none backdrop-blur-sm" />
                    <CarouselNext className="right-4 bg-background/50 hover:bg-background border-none backdrop-blur-sm" />
                </Carousel>
            </div>
        </section>
    );
};

export default ProjectDetails;
