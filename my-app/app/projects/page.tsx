import Navbar from "@/components/Navbar";
import BlogSection from "@/components/BlogSection";

export default function ProjectsPage() {
    return (
        <main className="min-h-screen bg-black text-white">
            <Navbar />
            <div className="pt-32">

                <BlogSection />
            </div>
        </main>
    );
}
