import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/ui/footer";

export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div>
      <div className="min-h-screen">
        <Navbar /> {children}
      </div>
      <Footer />
    </div>
  );
}
