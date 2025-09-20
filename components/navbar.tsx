import Link from "next/link";

type SubContent = {
  title: string;
  href: string;
};

type NavLink = {
  title: string;
  href: string;
  subContent?: SubContent[];
};

const links: NavLink[] = [
  {
    title: "EĞİTİMLER",
    href: "/egitimler",
    subContent: [
      { title: "Makine", href: "/egitimler/makine" },
      { title: "Yazılım", href: "/egitimler/yazilim" },
      { title: "Mimari", href: "/egitimler/mimari" },
      {
        title: "Robotik Otomasyon ve PLC",
        href: "/egitimler/robotik-otomasyon-plc",
      },
      { title: "İngilizce", href: "/egitimler/ingilizce" },
      { title: "Mesleki Bilişim", href: "/egitimler/mesleki-bilisim" },
      {
        title: "Grafik Video ve Web Tasarım",
        href: "/egitimler/grafik-web-tasarim",
      },
      {
        title: "Dijital Oyun ve Animasyon",
        href: "/egitimler/dijital-oyun-animasyon",
      },
      { title: "İleri Seviye Kurumsal Eğitimler", href: "/egitimler/kurumsal" },
    ],
  },
  {
    title: "KAMPÜSLER",
    href: "/kampusler",
    subContent: [
      { title: "Merkez Kampüs", href: "/kampusler/merkez" },
      { title: "Teknik Kampüs", href: "/kampusler/teknik" },
      { title: "Sanat Kampüsü", href: "/kampusler/sanat" },
    ],
  },
  {
    title: "HAKKIMIZDA",
    href: "/hakkimizda",
    subContent: [
      { title: "Misyonumuz", href: "/hakkimizda/misyon" },
      { title: "Vizyonumuz", href: "/hakkimizda/vizyon" },
      { title: "Yönetim", href: "/hakkimizda/yonetim" },
      { title: "Tarihçe", href: "/hakkimizda/tarihce" },
    ],
  },
  {
    title: "HABERLER",
    href: "/haberler",
    subContent: [
      { title: "Güncel Haberler", href: "/haberler/guncel" },
      { title: "Etkinlikler", href: "/haberler/etkinlikler" },
      { title: "Duyurular", href: "/haberler/duyurular" },
      { title: "Başarı Hikayeleri", href: "/haberler/basari-hikayeleri" },
    ],
  },
  {
    title: "İLETİŞİM",
    href: "/iletisim",
  },
];

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@radix-ui/react-navigation-menu";
export const Navbar = () => {
  return (
    <nav className={`bg-navbar-bg`}>
      <div className="container mx-auto flex justify-between py-6 items-center">
        <div className="flex items-center gap-7">
          <Link href={"/"}>
            <img src="logo.png" width={130} />
          </Link>
          <NavigationMenu>
            {" "}
            <NavigationMenuList className="flex flex-row ">
              {links.map((link) => (
                <NavigationMenuItem key={link.title}>
                  <NavigationMenuTrigger className="text-xl text-navbar-text flex cursor-pointer px-4 p-2 items-center gap-1 hover:bg-navbar-hover-bg hover:text-navbar-hover-text border-r border-border/20">
                    <Link href={link.href}>{link.title}</Link>
                    {link.subContent != undefined && (
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="inline-block ml-1"
                      >
                        <path
                          d="M5 8L10 13L15 8"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    )}
                  </NavigationMenuTrigger>

                  <NavigationMenuContent className="absolute top-full bg-navigation-menu-content-bg text-navigation-menu-text shadow-md w-2xs z-50">
                    <ul className="flex flex-col gap-2">
                      {link.subContent?.map((item) => (
                        <NavigationMenuLink key={item.title} asChild>
                          <Link
                            href={item.href}
                            className="hover:bg-navigation-menu-content-ul-hover-bg hover:text-navigation-menu-content-ul-li-hover-text p-2 cursor-pointer"
                          >
                            {item.title}
                          </Link>
                        </NavigationMenuLink>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>{" "}
        <div className="relative flex items-center">
          {links.slice(0, 2).map((link) => (
            <div
              key={link.title}
              className="p-2 bg-[#081c34] text-[#b3bdb3] flex items-center justify-center h-10 min-w-[80px] gap-1 cursor-pointer hover:bg-[#00142b] hover:text-white"
            >
              <span className="text-sm leading-none">{link.title}</span>
              <svg
                width="14"
                height="14"
                viewBox="0 0 20 20"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                className="ml-1 text-[#b3bdb3]"
              >
                <path d="M5 8L10 13L15 8Z" />
              </svg>
            </div>
          ))}
          <input
            type="text"
            className="p-2 pr-10 text-white bg-[#203c5c] placeholder-white focus:bg-white focus:text-black focus:placeholder-gray-400 transition-colors duration-200 outline-none"
            placeholder="Ara"
            name="eğitim ara"
          />
          <button
            type="button"
            tabIndex={-1}
            className="absolute right-2 top-1/2 -translate-y-1/2 p-1 rounded focus:outline-none transition-colors duration-200 bg-transparent cursor-pointer"
            style={{ pointerEvents: "auto" }}
            aria-label="Search"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="transition-colors duration-200"
              id="navbar-search-icon"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 104.5 4.5a7.5 7.5 0 0012.15 12.15z"
                className="search-icon-path"
              />
            </svg>
          </button>
          <style>{`
              #navbar-search-input:focus ~ button #navbar-search-icon .search-icon-path {
                stroke: #888;
              }
              #navbar-search-icon .search-icon-path {
                stroke: #fff;
                transition: stroke 0.2s;
              }
              #navbar-search-input:focus {
                background: #fff !important;
                color: #000 !important;
              }
            `}</style>
        </div>
      </div>
    </nav>
  );
};
