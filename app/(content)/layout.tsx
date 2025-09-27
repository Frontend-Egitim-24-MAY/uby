"use client"
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

export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const pathName = usePathname();

  const isHome = pathName === "/";

  // Dosya uzantısı olan path'leri filtrele (resim ve statik dosyalar için)
  const hasFileExtension = /\.(png|jpg|jpeg|gif|svg|webp|ico|js|css|json|xml|txt)$/i.test(pathName);

  if (hasFileExtension) {
    console.log("Statik dosya isteği:", pathName);
  }

  const items = pathName.split('/').filter(item => item !== '');
  console.log("items:   ---   ", items)
  return (
    <div>
      <div className="min-h-screen">
        <Navbar />
        <div className="px-16">

        <div className="container mx-auto py-4">

        {
          (isHome || hasFileExtension) ? null : (
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink href="/">Ana Sayfa</BreadcrumbLink>
                </BreadcrumbItem>
                {items.map((item, index) => {
                  const href = '/' + items.slice(0, index + 1).join('/');
                  const isLast = index === items.length - 1;
                  const displayName = item.charAt(0).toUpperCase() + item.slice(1);
                  
                  return (
                    <div key={index} className="flex items-center">
                      <BreadcrumbSeparator />
                      <BreadcrumbItem>
                        {isLast ? (
                          <BreadcrumbPage>{displayName}</BreadcrumbPage>
                        ) : (
                          <BreadcrumbLink href={href}>{displayName}</BreadcrumbLink>
                        )}
                      </BreadcrumbItem>
                    </div>
                  );
                })}
              </BreadcrumbList>
            </Breadcrumb>
          )
        }
        </div>

      
        {children}
        </div>
      </div>
      <Footer />
    </div>
  );
}
