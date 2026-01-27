export interface Project {
    id: string;
    category: string;
    title: string;
    description: string;
    image: string;
    buttonText: string;
    projectUrl?: string;
    links?: { label: string; url: string }[];
    content: {
        heading: string;
        paragraphs: string[];
        images: string[];
    };
}

export const projects: Project[] = [
    {
        id: "Lovent",
        category: "İlk Proje",
        title: "Lovent Kitap Okuma / Yazma Projesi ",
        description: "Kitap okumayı , yazmayı seven insanlar için web ve mobil üzerinden erişebilecekleri platform oluşturmak.",
        image: "/loventlogo1,.png",
        buttonText: "Proje Detayları",
        projectUrl: "https://www.lovent.ink/",
        content: {
            heading: "Lovent Kitap Okuma / Yazma Projesi",
            paragraphs: [
                "Lovent, kullanıcıların kitap okuyup dinleyebildiği, çevrimdışı erişim sağlayabildiği ve okuma sırasında müzik dinleyebildiği kapsamlı bir platformdur. Kullanıcılar, profillerine fotoğraf ekleyebilir, diğer okurlarla DM üzerinden iletişim kurabilir, profillere ve kitap satırlarına yorum bırakabilir, ayrıca kendi okuma listelerini oluşturabilirler.",
                "Yazarlar için sesli ve metin tabanlı yazma, özel font seçenekleri ve AI destekli karakter/kapak tasarımı gibi araçlar sunulur. Abonelik sistemleri, yarışmalar ve popülerlik bazlı ödemelerle gelir elde edebilirler. 'Lovent Studio' ile belirli bir başarıya ulaşan eserler için yayıncılık ve dizi/film uyarlaması fırsatları sağlanır.",
                "Kullanılan Teknolojiler: Figma, Next.js, React Native, Jotai, TypeScript, Tailwind CSS, tRPC, Swagger, Supabase."
            ],
            images: [
                "/lovent 1.png",
                "/Lovent 2.png",
                "/Lovent 3 .png"
            ]
        }
    },
    {
        id: "RezzGo",
        category: "En Yeni",
        title: "RezzGo - Rezervasyon Uygulaması",
        description: "Kullanıcıların rezervasyon yapabileceği mobil ve web uygulaması.",
        image: "/rezzgologo1.png",
        buttonText: "Proje Detayları",
        projectUrl: "https://www.rezzgo.com/",
        content: {
            heading: "RezzGo - Rezervasyon Uygulaması",
            paragraphs: [
                "RezzGo, farklı sektörlerdeki (sağlık, eğitim, güzellik, spor, yemek vb.) işletmeler ile kullanıcıları tek bir dijital platformda buluşturan, 7/24 erişilebilir ve güvenli bir online rezervasyon sistemidir. Hem kullanıcıların hızlı randevu almasını hem de işletmelerin tüm süreçlerini tek panelden yönetmesini sağlar.",
                "Kullanıcılar için esnek ödeme seçenekleri, yorum ve puanlama sistemi ile güvenli bir deneyim sunulurken; işletmeler için otomatik onay sistemi, depozito ile randevu güvenliği, akıllı vardiya planlaması ve detaylı raporlama gibi özellikler mevcuttur.",
                "Kullanılan Teknolojiler: Next.js, tRPC, Node.js, React Native (Expo), TypeScript, Tailwind CSS, shadcn/ui, Supabase, Git ve Figma."
            ],
            images: [
                "/rezzgo1.png",
                "/rezzgo2.png",
                "/rezzgo3.png"
            ]
        }
    },
    {
        id: "itu-marge",
        category: "Devam Eden",
        title: "İTÜ MARGE / KULÜP WEB SİTESİ",
        description: "İstanbul Teknik Üniversitesinde olan 'Marge' kulüpünün web sitesi.",
        image: "/itu-marge.logo.jpeg",
        buttonText: "Proje Detayları",
        projectUrl: "https://itu-marge.vercel.app/",
        content: {
            heading: "İTÜ MARGE - Teknoloji ve İnovasyon",
            paragraphs: [
                "İTÜ MARGE, madencilik sektörünün geleneksel dinamiklerini yüksek teknolojiyle yeniden tanımlayan, üniversite-sanayi iş birliğinin en somut örneklerinden biridir. Mining Automation, Robotics & Ground Engineering vizyonuyla; otonom sistemler, insansız hava araçları ve yer altı robotik çözümleri gibi alanlarda inovasyon üretmektedir.",
                "Bu projede, MARGE ekibinin multidisipliner yapısını ve teknik yetkinliklerini yansıtan, kullanıcı deneyimini (UX) ön planda tutan modern bir web sitesi geliştirilmektedir. Amaç, karmaşık mühendislik süreçlerini herkes için erişilebilir ve estetik bir dijital platformda sunmaktır.",
                "Kullanılan Teknolojiler: Next.js, TypeScript, Tailwind CSS, Figma."
            ],
            images: [
                "/itumarge1.png",
                "/itumarge2.png",
                "/itumarge3.png"
            ]
        }
    },
    {
        id: "mikroislemci-iot-arduino",
        category: "Gömülü Sistemler",
        title: "Mikroişlemci IoT & Arduino Projeleri",
        description: "Gömülü sistemler ve IoT dünyasına giriş, eğitim serileri ve açık kaynak kodlu projeler.",
        image: "/arduinomikroişlemci.png",
        buttonText: "Proje Detayları",
        links: [
            { label: "Arduino 101 Repo", url: "https://github.com/codedbyelif/arduino-101" },
            { label: "IoT Microprocessor Repo", url: "https://github.com/codedbyelif/ioT-microprocessor" }
        ],
        content: {
            heading: "Arduino & Nuvoton Gömülü Sistem Projeleri",
            paragraphs: [
                "Bu proje, geliştiricilerin Arduino mikrodenetleyici programlamayı öğrenmesine ve deneyimlemesine yardımcı olmak için tasarlanmış Arduino 101 örneklerini ve kaynak kodlarını içerir. Her modül, ayrıntılı yorumlar ve açıklamalarla desteklenerek kapsamlı bir öğrenme süreci sunar.",
                "Ayrıca Nuvoton M261 ARM Cortex-M23 mikrodenetleyicisi üzerine kurulu kapsamlı gömülü sistem uygulamalarını kapsar. GPIO kesme yönetimi, UART haberleşmesi ve çeşitli IoT kontrol senaryoları gibi gelişmiş özellikleri barındıran bu projeler, profesyonel gömülü yazılım geliştirmeye odaklanır.",
                "Kullanılan Teknolojiler: C/C++, Arduino IDE, Nuvoton M261 (ARM Cortex-M23), GPIO, UART, IoT Protocols."
            ],
            images: [
                "http://direct.nuvoton.com/1453-large_default/numaker-iiot-nuc980g2.jpg",
                "https://store.arduino.cc/cdn/shop/files/ABX00173_00.front_1000x750.jpg?v=1768837006",
                "https://maker.robotistan.com/wp-content/uploads/2021/01/Untitled-Sketch_bb-min.png"
            ]
        }
    }
];
