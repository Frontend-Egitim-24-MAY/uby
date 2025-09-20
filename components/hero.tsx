import Image from "next/image";

export const Hero = () => {
  return (
    <div className="relative w-full h-[70vh]">
      <Image src="/resim3.jpg" alt="resim" fill className="object-cover" />
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent flex flex-col justify-end px-8">
        <div className="text-left container mx-auto">
          <div className="w-[50%] ">
            <p className="text-white text-6xl font-bold leading-20">
              Üçüncü Binyıl Akademi
            </p>
            <p className="text-white text-6xl font-bold leading-20">
              En iyi yatırım kendine yapılan yatırımdır.
            </p>
            <p className="text-white text-lg mt-4">
              Üçüncü Binyıl Üniversitesi, yenilikçi eğitim programları ve modern
              kampüs olanaklarıyla geleceğin liderlerini yetiştiriyor.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
