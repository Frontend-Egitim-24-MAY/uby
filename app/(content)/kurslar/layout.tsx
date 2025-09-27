export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="relative">
      <div className="absolute -left-12 z-10  border-black">
        <h1 className="text-2xl font-bold text-black rotate-90 origin-bottom-left whitespace-nowrap border-t-1 w-screen ">
          TÜM KURSLAR
        </h1>
      </div>
      <div className="container mx-auto ">{children}</div>
    </div>
  );
}
