import BlogSection from "@/components/BlogSection";
import Navbar from "@/components/Navbar";

export default function ResourcesPage() {
    return (
        <main>
            <Navbar />
            <div className="pt-20"> {/* Add padding to prevent overlap with absolute Navbar */}
                <BlogSection />
            </div>
        </main>
    );
}
