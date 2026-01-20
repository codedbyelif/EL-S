import Navbar from "@/components/Navbar";
import FeatureSection from "@/components/FeatureSection";

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-black text-white">
            <Navbar />
            <div className="pt-32">

                <FeatureSection />
            </div>
        </main>
    );
}
