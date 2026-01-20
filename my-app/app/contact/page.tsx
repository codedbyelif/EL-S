import Navbar from "@/components/Navbar";

export default function ContactPage() {
    return (
        <main className="min-h-screen bg-black text-white">
            <Navbar />
            <div className="container mx-auto px-6 py-32 lg:px-20">
                <div className="max-w-2xl">
                    <h1 className="text-4xl md:text-6xl font-bold mb-8 bg-gradient-to-b from-white to-gray-400 bg-clip-text text-transparent">
                        İletişim
                    </h1>
                    <p className="text-lg text-gray-400 mb-8">
                        Projeleriniz veya sorularınız için benimle iletişime geçebilirsiniz.
                    </p>

                    <div className="flex flex-col gap-4 text-gray-300">
                        <a href="mailto:contact@elis.com" className="hover:text-white transition-colors">
                            contact@elis.com
                        </a>
                        <p>
                            İstanbul, Türkiye
                        </p>
                    </div>
                </div>
            </div>
        </main>
    );
}
