import Navbar from "@/components/Navbar";
import BlogSection from "@/components/BlogSection";
import LogoCarousel from "@/components/LogoCarousel";
import AppShowcase from "@/components/AppShowcase";


export default function ProjectsPage() {
    return (
        <main className="min-h-screen bg-black text-white">
            <Navbar />
            <div className="pt-30">

                <BlogSection />
                <LogoCarousel />
                <AppShowcase />

            </div>
        </main>
    );
}
