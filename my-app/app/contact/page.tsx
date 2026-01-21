import Navbar from "@/components/Navbar";
import ContactSection from "@/components/ContactSection";
import CurvedLoop from "@/components/CurvedLoop";

export default function Contact() {
    return (
        <main className="min-h-screen bg-black text-white">
            <Navbar />
            <div className="pt-20">
                <ContactSection />
                <div className="pb-19 -mt-10 md:-mt-34 relative z-10">
                    <CurvedLoop
                        marqueeText="EL'S ✦ EL'S ✦ EL'S ✦ EL'S ✦"
                        speed={2}
                        curveAmount={400}
                        direction="right"
                        interactive
                        className="custom-text-style"
                    />
                </div>
            </div>
        </main>
    );
}
