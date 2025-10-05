export default function Contact() {
  return (
    <div className="flex container mx-auto justify-start items-center ">
      <div className="w-full max-w-2xl">
        {/* Header Section */}
        <div className="mb-12 space-y-10">
          <section>
            <h1 className="text-4xl mb-4">İletişim Bilgileri</h1>
          </section>
          <section>
            <a
              target="_blank"
              href="https://maps.app.goo.gl/qA2DamwM9K6ge9yf6"
              className="border-primary/40 border-b-2 hover:border-primary duration-200 cursor-pointer text-xl mr-2"
            >
              Kadıköy Şube
            </a>
            <span>
              Caferağa Mahallesi Mühürdar Caddesi No: 50 Kadıköy / İstanbul
            </span>
            <br />
            <a
              target="_blank"
              href="https://maps.app.goo.gl/qA2DamwM9K6ge9yf6"
              className="border-primary/40 border-b-2 hover:border-primary duration-200 cursor-pointer text-xl mr-2"
            >
              Mecidiyeköy Şube
            </a>
            <span>Eski Osmanlı Sokak. No:40 Kat:5 Mecidiyeköy/İstanbul</span>
          </section>
          <section>
            <span>Bizimle özel olarak iletişim kurmak isterseniz </span>
            <a
              className="border-primary/40 border-b-2 hover:border-primary duration-200 cursor-pointer text-xl mx-2"
              href="mailto:bilgi@ucuncubinyil.com"
            >
              bilgi@ucuncubinyil.com
            </a>
            <span> adresinden bize mail gönderebilir, veya </span>
            <a
              href="tel:444 3 111"
              target="_blank"
              className="border-primary/40 border-b-2 hover:border-primary duration-200 cursor-pointer text-xl mx-2"
            >
              444 3 111
            </a>
            <span> no'lu telefon numaramızdan bizlre ulaşabilirsiniz</span>
          </section>
          <section>
            <span>Ayrıca </span>
            <a
              href="https://www.instagram.com/ucuncubinyil/"
              target="_blank"
              className="border-primary/40 border-b-2 hover:border-primary duration-200 cursor-pointer text-xl"
            >
              Instagram
            </a>
            <span>, </span>
            <a
              href="https://x.com/ucuncubinyil"
              target="_blank"
              className="border-primary/40 border-b-2 hover:border-primary duration-200 cursor-pointer text-xl "
            >
              X
            </a>
            <span>, </span>
            <a
              href="https://www.facebook.com/UcuncuBinyil/"
              target="_blank"
              className="border-primary/40 border-b-2 hover:border-primary duration-200 cursor-pointer text-xl "
            >
              Facebook
            </a>
            <span>, </span>
            <a
              href="https://www.linkedin.com/company/ucuncubinyil/posts/"
              target="_blank"
              className="border-primary/40 border-b-2 hover:border-primary duration-200 cursor-pointer text-xl "
            >
              LinkedIn
            </a>
            <span>, </span>
            <a
              href="https://www.youtube.com/channel/UC4tBCMfJbRmx85X8B4xhyrg"
              target="_blank"
              className="border-primary/40 border-b-2 hover:border-primary duration-200 cursor-pointer text-xl "
            >
              Youtube
            </a>
            <span> veya </span>
            <a
              href="https://api.whatsapp.com/send/?text=%C3%9C%C3%A7%C3%BCnc%C3%BC+Biny%C4%B1l+Akademi+E%C4%9Fitimlerini+%C4%B0nceleyiniz.+https%3A%2F%2Fwww.ucuncubinyil.com&type=custom_url&app_absent=0"
              target="_blank"
              className="border-primary/40 border-b-2 hover:border-primary duration-200 cursor-pointer text-xl "
            >
              Whatsapp
            </a>
            <span>
              {" "}
              üzerinden de bizlere ulaşabilir veya takip edebilirsiniz.
            </span>
          </section>
          <section>
            <span>
              Diğer web sitelerimizi de ziyaret edebilir ve
              eğitimlerimiz/hizmetlerimiz hakkında daha fazla fikir sahibi
              olabilirsiniz
            </span>
            <ul className="pl-8  py-6">
              <li className="group flex w-fit items-center py-4 gap-4 hover:gap-8 duration-400">
                <a
                  href="https://muhendisfabrikasi.com/"
                  target="_blank"
                  className="border-primary/40 border-b-2 group-hover:border-primary duration-200 cursor-pointer text-xl "
                >
                  muhendisfabrikasi.com
                </a>
                <div className="w-2 h-2 bg-primary rounded-full group-hover:w-3 group-hover:h-3 duration-400"></div>
              </li>
              <li className="group flex w-fit items-center py-4 gap-4 hover:gap-6 duration-400 ">
                <a
                  href="https://www.milimetrik.com/"
                  target="_blank"
                  className="border-primary/40 border-b-2 group-hover:border-primary duration-200 cursor-pointer text-xl"
                >
                  milimektric.com
                </a>
                <div className="w-2 h-2 bg-primary rounded-full group-hover:w-3 group-hover:h-3 duration-400"></div>
              </li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}
