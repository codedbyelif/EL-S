import Navbar from "@/components/Navbar";
import BlogSection from "@/components/BlogSection";
import LogoCarousel from "@/components/LogoCarousel";
import AppShowcase from "@/components/AppShowcase";


export default function ProjectsPage() {
    return (
        <main className="min-h-screen bg-black text-white">
            <Navbar />
            <div className="pt-32">

                <BlogSection />
                <AppShowcase />
                <LogoCarousel />
                <div style={{ height: '600px', position: 'relative' }}>


                </div>
            </div>
        </main>
    );
}
