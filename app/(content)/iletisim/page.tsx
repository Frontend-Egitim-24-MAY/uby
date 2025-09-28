

export default function Contact() {
  

    return (
        <div
            
            className="flex container mx-auto justify-start items-center "
        >
            <div className="w-full max-w-2xl">
                {/* Header Section */}
                <div className="mb-12">
                    <h1 className="text-4xl mb-4">İletişim Bilgileri</h1>

                    <h2>Kadıköy Şube</h2>
                        <a target="_blank" href="https://maps.app.goo.gl/qA2DamwM9K6ge9yf6" className="border-navigation-menu-content-ul-hover-bg/40 border-b-2 hover:border-navigation-menu-content-ul-hover-bg duration-200 cursor-pointer">Adresimiz</a>
                        : Caferağa Mahallesi Mühürdar Caddesi No: 50 Kadıköy / İstanbul
                    <h2>Mecidiyeköy Şube</h2>
                    <a target="_blank" href="https://maps.app.goo.gl/qA2DamwM9K6ge9yf6" className="border-navigation-menu-content-ul-hover-bg/40 border-b-2 hover:border-navigation-menu-content-ul-hover-bg duration-200 cursor-pointer">Adresimiz</a>
                    :Eski Osmanlı Sokak. No:40 Kat:5 Mecidiyeköy/İstanbul
                    <h2 className="">Telefon</h2>
                    <a target="_blank"  href="tel:444 3 111" className="border-navigation-menu-content-ul-hover-bg/40 border-b-2 hover:border-navigation-menu-content-ul-hover-bg duration-200 cursor-pointer">Bize Ulaşın </a> 
                    444 3 111
                    <h2 className="">Mail Adresi</h2>
                    <a className="border-navigation-menu-content-ul-hover-bg/40 border-b-2 hover:border-navigation-menu-content-ul-hover-bg duration-200 cursor-pointer" href="mailto:bilgi@ucuncubinyil.com">bilgi@ucuncubinyil.com</a>



                </div>
            </div>

            {/* <div className="bg-neutral-100 dark:bg-neutral-800 rounded-2xl p-8 shadow-lg container justify-end items-center ">
                <form className="space-y-6" onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium mb-2" >
                            Adınız Soyadınız**
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            required
                            className="w-full rounded-xl border border-gray-300 dark:border-gray-600 shadow-sm p-3 outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent bg-white dark:bg-neutral-700"
                            placeholder="Adınızı girin"
                        />
                    </div>

                    <div>
                        <label htmlFor="email" className="block text-sm font-medium mb-2">
                            E-posta**
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            required
                            className="w-full rounded-xl border border-gray-300 dark:border-gray-600 shadow-sm p-3 outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent bg-white dark:bg-neutral-700"
                            placeholder="E-posta adresinizi girin"
                        />
                    </div>

                    <div>
                        <label htmlFor="topic" className="block text-sm font-medium mb-2">
                            Konu
                        </label>
                        <input
                            type="text"
                            id="topic"
                            name="topic"
                            required
                            className="w-full rounded-xl border border-gray-300 dark:border-gray-600 shadow-sm p-3 outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent bg-white dark:bg-neutral-700"
                            placeholder="Mesaj konusunu girin"
                        />
                    </div>

                    <div>
                        <label htmlFor="message" className="block text-sm font-medium mb-2">
                            Mesaj
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            required
                            rows={5}
                            className="w-full rounded-xl border border-gray-300 dark:border-gray-600 shadow-sm p-3 outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent bg-white dark:bg-neutral-700 resize-vertical"
                            placeholder="Mesajınızı buraya yazın"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-amber-400 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-xl transition-colors duration-200"
                    >
                        Mesajı Gönder
                    </button>
                </form>
                <div className="mt-12 text-center">
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                        Mesajınızı aldıktan sonra en kısa sürede size dönüş yapacağız.
                    </p>
                </div>
            </div> */}
        </div>
    );
}