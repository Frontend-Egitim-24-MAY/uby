import Image from "next/image";

export const Hero = () => {
    return (
        <div className="relative w-full h-[70vh]">
            <Image
                src="/resim3.jpg"
                alt="resim"
                fill
                className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent flex flex-col justify-center px-8">
                <div className="text-left container mx-auto">
                    <div className="w-[50%] ">
                        <p className="text-white text-6xl font-bold leading-20">
                            <label className="bg-primary sp-2">Üçüncü Binyıl</label> Eğitim Bilimleri
                        </p>
                        <p className="text-white text-6xl font-bold leading-20">
                            Yazılıma Adım At
                        </p>
                        <p className="text-white text-6xl font-bold leading-20">
                            Geleceğini İnşa Et
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
