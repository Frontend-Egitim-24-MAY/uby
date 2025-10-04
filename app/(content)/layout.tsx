"use client";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/ui/footer";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { usePathname } from "next/navigation";
import React from "react";
import Link from "next/link";

interface BreadcrumbItem {
  href?: string;
  label: string;
}

export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  const formatPathSegment = (segment: string) => {
    if (!segment) return "Ana Sayfa";

    const pathMappings: Record<string, string> = {
      about: "Hakkımızda",
      iletisim: "İletişim",
      kurslar: "Kurslar",
    };

    if (pathMappings[segment.toLowerCase()]) {
      return pathMappings[segment.toLowerCase()];
    }

    return segment
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  const dynamicBreadCrumbs = React.useMemo(() => {
    if (isHomePage) return [];

    const segments = pathname.split("/").filter(Boolean);
    const items: BreadcrumbItem[] = [{ label: "Ana Sayfa", href: "/" }];

    segments.forEach((segment, idx) => {
      const href = "/" + segments.slice(0, idx + 1).join("/");
      const isLast = idx === segments.length - 1;

      items.push({
        label: formatPathSegment(segment),
        href: isLast ? undefined : href,
      });
    });

    return items;
  }, [isHomePage, pathname]);

  const lastBreadcrumb = dynamicBreadCrumbs[dynamicBreadCrumbs.length - 1];
  const previousBreadcrumbs = dynamicBreadCrumbs.slice(0, -1);

  if (isHomePage)
    return (
      <>
        <Navbar />
        <div className="min-h-screen bg-background">{children}</div>
        <Footer />
      </>
    );

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-background">
        <div className="flex">
          <div className="hidden w-24 md:flex items-start pt-48 justify-center border-r">
            <div
              className="text-2xl uppercase font-black text-foreground/60 whitespace-nowrap"
              style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}
            >
              {lastBreadcrumb.label}
            </div>
          </div>

          <div className="flex-1">
            <div className="container mx-auto">
              <Breadcrumb>
                <BreadcrumbList className="py-8">
                  {previousBreadcrumbs.map((item, idx) => (
                    <React.Fragment key={idx}>
                      <BreadcrumbItem>
                        {item.href ? (
                          <BreadcrumbLink
                            href={item.href}
                            className="hover:text-primary/60"
                          >
                            {item.label}
                          </BreadcrumbLink>
                        ) : (
                          <span>{item.label}</span>
                        )}
                      </BreadcrumbItem>
                      <BreadcrumbSeparator />
                    </React.Fragment>
                  ))}
                  <BreadcrumbItem>
                    <BreadcrumbPage className="text-primary">
                      {lastBreadcrumb.label}
                    </BreadcrumbPage>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
            </div>
            <div className="px-8 py-8">
              <div className="container mx-auto">{children}</div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
