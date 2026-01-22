import { projects } from "@/lib/data";
import ProjectDetails from "@/components/ProjectDetails";
import Navbar from "@/components/Navbar";
import { notFound } from "next/navigation";

export function generateStaticParams() {
    return projects.map((project) => ({
        id: project.id,
    }));
}

export default async function ProjectPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const project = projects.find((p) => p.id === id);

    if (!project) {
        notFound();
    }

    return (
        <main className="min-h-screen bg-black text-white">
            <Navbar />
            <div className="pt-20">
                <ProjectDetails project={project} />
            </div>
        </main>
    );
}
