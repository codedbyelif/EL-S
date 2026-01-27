import Link from "next/link";
import { Users, Github, Linkedin, Instagram } from "lucide-react";

const ContactSection = () => {
    return (
        <section className="pt-10 w-full">
            <div className="container mx-auto px-4">
                <div className="flex flex-col items-start pb-4 md:items-center md:pb-6 xl:pb-8">
                    <span className="inline-flex items-center justify-center rounded-full border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 gap-1 transition-[color,box-shadow] overflow-hidden border-transparent bg-primary text-primary-foreground hover:bg-primary/90">
                        <Users className="h-4 w-4" aria-hidden="true" />
                        İletişim
                    </span>
                    <h4 className="mt-4 text-[28px] leading-[36px] font-semibold tracking-tight text-foreground md:text-center md:text-3xl xl:text-[48px] xl:leading-[56px]">
                        Benimle İletişime Geçin!
                    </h4>
                    <p className="mt-2 text-lg text-muted-foreground md:text-center xl:mt-3 xl:text-xl">
                        Benimle <span className="font-medium text-foreground">iletişime geçin</span>, <span className="font-medium text-foreground">keşfedin</span> ve <span className="font-medium text-foreground">gelişin</span>.
                    </p>
                    <div className="mt-6 grid w-full grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-3 xl:mt-12 xl:gap-6">
                        <div className="bg-card text-card-foreground flex flex-col gap-6 border py-6 shadow-sm rounded-2xl transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:scale-105">
                            <Link
                                href="https://github.com/codedbyelif"
                                target="_blank"
                                className="flex h-full flex-col items-center p-6 md:p-8 xl:p-10 group"
                            >
                                <Github className="mb-4 h-8 w-8 md:h-12 md:w-12 xl:h-16 xl:w-16 text-foreground group-hover:text-primary transition-colors duration-300" />
                                <div className="space-y-2 text-center">
                                    <h5 className="text-sm font-medium md:text-lg">GitHub</h5>
                                    <p className="text-sm text-balance text-muted-foreground">
                                        Projeleri inceleyin, katkıda bulunun ve geliştirin
                                    </p>
                                </div>
                            </Link>
                        </div>
                        <div className="bg-card text-card-foreground flex flex-col gap-6 border py-6 shadow-sm rounded-2xl transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:scale-105">
                            <Link
                                href="https://www.linkedin.com/in/elif-kaynar/"
                                target="_blank"
                                className="flex h-full flex-col items-center p-6 md:p-8 xl:p-10 group"
                            >
                                <Linkedin className="mb-4 h-8 w-8 md:h-12 md:w-12 xl:h-16 xl:w-16 text-foreground group-hover:text-blue-600 transition-colors duration-300" />
                                <div className="space-y-2 text-center">
                                    <h5 className="text-sm font-medium md:text-lg">LinkedIn</h5>
                                    <p className="text-sm text-balance text-muted-foreground">
                                        Profesyonel ağınızı genişletin ve bağlantı kurun
                                    </p>
                                </div>
                            </Link>
                        </div>
                        <div className="bg-card text-card-foreground flex flex-col gap-6 border py-6 shadow-sm rounded-2xl transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:scale-105">
                            <Link
                                href="https://www.instagram.com/elisarlyss/"
                                target="_blank"
                                className="flex h-full flex-col items-center p-6 md:p-8 xl:p-10 group"
                            >
                                <Instagram className="mb-4 h-8 w-8 md:h-12 md:w-12 xl:h-16 xl:w-16 text-foreground group-hover:text-pink-600 transition-colors duration-300" />
                                <div className="space-y-2 text-center">
                                    <h5 className="text-sm font-medium md:text-lg">Instagram</h5>
                                    <p className="text-sm text-balance text-muted-foreground">
                                        Güncel paylaşımları ve duyuruları takip edin
                                    </p>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
