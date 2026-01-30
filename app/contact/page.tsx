import Navbar from "@/components/Navbar";
import ContactSection from "@/components/ContactSection";
import CurvedLoop from "@/components/CurvedLoop";

export default function Contact() {
    return (
        <main className="min-h-screen bg-black text-white">
            <Navbar />
            <div className="pt-20">
                <ContactSection />
                <div className="pb-10 -mt-4 md:-mt-24 relative z-0">
                    <CurvedLoop
                        marqueeText="EL'S ✦ EL'S ✦ EL'S ✦ EL'S ✦ EL'S ✦"
                        speed={2}
                        curveAmount={400}
                        direction="right"
                        interactive
                        className="text-[4rem]"
                    />
                </div>
            </div>
        </main>
    );
}
