import { FaDiscord, FaTwitter, FaYoutube, FaFacebook } from "react-icons/fa";
import { Link } from "react-router-dom"; // <-- Add this import

const socialLinks = [
  { href: "discord.com/invite/battlegrounds", icon: <FaDiscord /> },
  { href: "https://x.com/PUBG", icon: <FaTwitter /> },
  { href: "https://www.youtube.com/channel/UCnXDQbqIdp-HQuDyM4p12ng", icon: <FaYoutube /> },
  { href: "https://facebook.com/PUBG.battlegrounds.global", icon: <FaFacebook /> },
];

const Footer = () => {
  return (
    <footer className="w-screen bg-[#5542ff] py-4 text-black">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 md:flex-row">
        <p className="text-center text-sm font-light md:text-left">
          ©PUBG 2025. All rights reserved
        </p>

        <div className="flex justify-center gap-4  md:justify-start">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-black transition-colors duration-500 ease-in-out hover:text-white"
            >
              {link.icon}
            </a>
          ))}
        </div>

        <Link
          to="/privacy-policy"
          className="text-center text-sm font-light hover:underline md:text-right"
        >
          Privacy Policy
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
