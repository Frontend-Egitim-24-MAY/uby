import { FiGithub, FiTwitter, FiLinkedin, FiYoutube } from "react-icons/fi";
import Link from "next/link";
import { Container } from "lucide-react";

const socialLinks = [
  {
    id: 1,
    icon: <FiYoutube />,
    url: "https://www.youtube.com/@UcuncuBinylAkademi",
  },
  {
    id: 2,
    icon: <FiGithub />,
    url: "https://github.com/",
  },
  {
    id: 3,
    icon: <FiTwitter />,
    url: "https://twitter.com/",
  },
  {
    id: 4,
    icon: <FiLinkedin />,
    url: "https://www.linkedin.com/in/",
  },
];

function Question() {
  return <FiYoutube />;
}

const Footeer = () => {
  return (
    <div className="container mx-auto">
      <div className="pt-20 sm:pt-30 pb-8 mt-20 border-t-2 border-primary-light dark:border-secondary-dark">
        {/* Footer social links */}
        <div className="font-general-regular flex flex-col justify-center items-center mb-12 sm:mb-28">
          <p className="text-3xl sm:text-4xl text-primary-dark dark:text-primary-light mb-5">
            Follow me
          </p>
          <ul className="flex gap-4 sm:gap-8">
            {socialLinks.map((link) => (
              <a
                href={link.url}
                target="__blank"
                key={link.id}
                className="text-gray-400 hover:text-indigo-500 dark:hover:text-indigo-400 cursor-pointer rounded-lg bg-gray-50 dark:bg-ternary-dark hover:bg-gray-100 shadow-sm p-4 duration-300"
              >
                <i className="text-xl sm:text-2xl md:text-3xl">{link.icon}</i>
              </a>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footeer;

export const Footer = () => {
  return (
    <footer className="bg-[#002147] text-white">
      <div className="container mx-auto">
        <div className="flex gap-24 items-center pt-4">
          <label className="text-xl">Connect With Us</label>
          <div className="flex space-x-8">
            <a
              href="https://www.youtube.com/@UcuncuBinylAkademi"
              target="_blank"
            >
              <FiYoutube />
            </a>
            <a href="https://github.com/" target="_blank">
              <FiGithub />
            </a>
            <a href="https://x.com/UcuncuBinyil" target="_blank">
              <FiTwitter />
            </a>
            <a
              href="https://tr.linkedin.com/company/ucuncubinyil"
              target="_blank"
            >
              <FiLinkedin />
            </a>
          </div>
        </div>
      </div>
      <div className="my-4 h-[1px] bg-white/10" />
      <div className="container mx-auto grid grid-cols-3 divide-x divide-white/10">
        <div className="">
          <h2 className="text-xl font-bold">Information About</h2>
          <li className="list-none">
            <ul>Oxford University</ul>
            <ul>Strategic plan</ul>
            <ul>Oxford's research</ul>
            <ul>Course fees and funding</ul>
            <ul>Libraries</ul>
            <ul>Museums and collections</ul>
            <ul>Open days</ul>
            <ul>Oxford glossary</ul>
            <ul>Freedom of speech statement</ul>
            <ul>Statement on Modern Slavery</ul>
            <ul>Data privacy / GDPR</ul>
            <ul>Sport at Oxford</ul>
            <ul>Conferences at Oxford</ul>
            <ul>牛津大学</ul>
          </li>
        </div>
        <div className="px-4">
          <h2 className="text-xl font-bold">Information For</h2>
          <li className="list-none">
            <ul>Prospective undergraduates</ul>
            <ul>Prospective graduate students</ul>
            <ul>Prospective Lifelong Learning students</ul>
            <ul>Prospective online/distance learning students</ul>

            <ul>urrent Oxford students</ul>
            <ul></ul>
          </li>
        </div>
        <div className="px-4">
          <h2 className="text-xl font-bold">Quick Links</h2>
        </div>
      </div>
      <p className="text-center mt-4">&copy; 2025 Üçüncü Bin Yıl</p>
    </footer>
  );
};
