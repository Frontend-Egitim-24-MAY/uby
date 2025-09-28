import Link from "next/link";
import { LinkedIn } from "@/public/icons/linkedin";
import { Instagram } from "@/public/icons/instagram";
import { Youtube } from "@/public/icons/youtube";
import { Facebook } from "@/public/icons/facebook";
import { LinkIcon } from "@/public/icons/link";
import { JSX } from "react";


type SocialLink = {
  id: number;
  icon: JSX.Element;
  url: string;
  alt: string;
};

const socialLinks: SocialLink[] = [
  {
    id: 1,
    icon: <Youtube fontSize={24} />,
    url: "https://www.youtube.com/@UcuncuBinylAkademi",
    alt: "Üçüncü Binyıl Youtube Kanalı",
  },
  {
    id: 2,
    icon: <Facebook fontSize={24} />,
    url: "https://www.facebook.com/UcuncuBinyil",
    alt: "Üçüncü Binyıl Facebook Sayfası",
  },
  {
    id: 3,
    icon: <LinkedIn fontSize={24} />,
    url: "https://www.linkedin.com/company/ucuncubinyil/",
    alt: "Üçüncü Binyıl Linkedin Sayfası",
  },
  {
    id: 4,
    icon: <Instagram fontSize={24} />,
    url: "https://www.instagram.com/ucuncubinyil/",
    alt: "Üçüncü Binyıl İnstagram Sayfası",
  },
];

// Hızlı linkler örnekleri
const quickLinks = [
  { label: "Ana Sayfa", href: "/" },
  { label: "Hakkımızda", href: "/hakkimizda" },
  { label: "İletişim", href: "/iletisim" },
  { label: "Etkinlikler", href: "/etkinlikler" },
  { label: "Blog", href: "/blog" },
  { label: "Haberler", href: "/haberler" },
];

export const Footer = () => {
  return (
    <footer className="bg-navbar-bg text-white">
      <div className="container mx-auto">
        <div className="flex items-center gap-6 py-4">
          <label className="text-xl mr-10">Sosyal Medya</label>
          {socialLinks.map((data) => (
            <Link
              href={data.url}
              key={data.id}
              className="text-gray-400 cursor-pointer flex items-center"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={data.alt}
            >
              <i className="text-xl sm:text-2xl md:text-3xl">{data.icon}</i>
            </Link>
          ))}
        </div>
      </div>

      <div className="container mx-auto grid grid-cols-3 border-t border-b border-border/30 py-4">
        <div>
          <h2 className="text-xl  mb-2">Bize Ulaşın</h2>
          <ul className="space-y-2">
            <li className="text-white/70 hover:text-white cursor-pointer">
              Kadıköy: Caferağa Mah. Mühürdar Caddesi No:50 <br />
              Kadıköy/İstanbul
            </li>
            <li className="text-white/70 hover:text-white cursor-pointer">
              Mecidiyeköy: Eski Osmanlı Sokak No:40 Kat:5 <br />
              Mecidiyeköy/İstanbul
            </li>
            <Link
              href={"cal:4443111"}
              className="text-white/70 hover:text-white cursor-pointer"
            >
              444 1 333
            </Link>
            <Link
              href={"mailto:bilgi@ucuncubinyil.com"}
              className="flex items-center gap-2 text-white/70 hover:text-white cursor-pointer"
            >
              bilgi@ucuncubinyil.com
              <LinkIcon fontSize={14} />
            </Link>
          </ul>
        </div>
        <div className="px-4">
          <h2 className="text-xl font-bold mb-2">Information For</h2>
          <ul className="space-y-1">
            <li>Prospective undergraduates</li>
            <li>Prospective graduate students</li>
            <li>Prospective Lifelong Learning students</li>
            <li>Prospective online/distance learning students</li>
            <li>Current Oxford students</li>
          </ul>
        </div>
        <div className="px-4">
          <h2 className="text-xl font-bold mb-2">Quick Links</h2>
          <ul className="space-y-1">
            {quickLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:underline">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <p className="text-center mt-4 ">&copy; 2025 Üçüncü Binyıl</p>
      <div className="bg-navbar-bg h-4" />
    </footer>
  );
};
