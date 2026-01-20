import Navbar from "@/components/Navbar";
import BlogSection from "@/components/BlogSection";
import LogoCarousel from "@/components/LogoCarousel";

export default function ProjectsPage() {
    return (
        <main className="min-h-screen bg-black text-white">
            <Navbar />
            <div className="pt-32">

                <BlogSection />
                <LogoCarousel />
            </div>
        </main>
    );
}
