
import React from "react";
import {
  FaApple,
  FaFacebook,
  FaGooglePlay,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";
import {
  Facebook,
  Twitter,
  Linkedin,
  Youtube,
  Github,
  ExternalLink,
} from "lucide-react";

const SocialMediaIcons = () => {
  const icons = [
    {
      id: 1,
      icon: <FaFacebook className="text-blue-600" />,
      link: "https://www.facebook.com",
    },
    {
      id: 2,
      icon: <FaInstagram className="text-pink-500" />,
      link: "https://www.instagram.com",
    },
    {
      id: 3,
      icon: <FaLinkedin className="text-blue-700" />,
      link: "https://www.linkedin.com",
    },
    {
      id: 4,
      icon: <FaYoutube className="text-red-600" />,
      link: "https://www.youtube.com",
    },
  ];

  return (
    <div className="flex space-x-4 text-4xl">
      {icons.map(({ id, icon, link }) => (
        <a
          key={id}
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:opacity-80 text-4xl transition duration-300 p-2"
        >
          {icon}
        </a>
      ))}
    </div>
  );
};

const footerLinks = {
  practo: {
    title: "VCH",
    links: [
      { name: "Find Experts", href: "#" },
      { name: "videoConsult", href: "#" },
      { name: "Contact Us", href: "#" },
    ],
  },
  forExperts: {
    title: "For Experts",
    links: [
      { name: "Search for Expert", href: "#" },
      { name: "Search for wellness", href: "#" },
      { name: "Search for legal", href: "#" },
      { name: "Search for Tech", href: "#" },
      { name: "Search for Finance", href: "#" },
    ],
  },
  more: {
    title: "More",
    links: [
      { name: "Help", href: "#" },
      { name: "Developers", href: "#" },
      { name: "Privacy Policy", href: "#" },
      { name: "Terms & Conditions", href: "#" },
      { name: "Healthcare Directory", href: "#" },
    ],
  },
};

const FooterColumn = ({ title, links }) => (
  <div className="flex flex-col  space-y-2 sm:space-x-18 md:space-x-18 lg:space-x-18 ">
    <h3 className="text-white font-semibold text-lg mb-3">{title}</h3>
    {links.map((link, index) => (
      <a
        key={index}
        href={link.href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-300 hover:text-white transition-colors duration-200 flex items-center group"
      >
        {link.icon ? (
          <>
            <link.icon className="w-5 h-5 mr-2" />
            {link.name}
          </>
        ) : (
          <>
            {link.name}
            <ExternalLink className="w-4 h-4 ml-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
          </>
        )}
      </a>
    ))}
  </div>
);

const Footer = () => {
  return (
    <footer className="bg-[#2f2f30] py-10 px-6 w-full mt-auto ">
      <div className="max-w-7xl mx-auto ">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-3 gap-0 justify-between">
            {Object.entries(footerLinks).map(([key, section]) => (
              <FooterColumn
                key={key}
                title={section.title}
                links={section.links}
              />
            ))}
          </div>

          <div className="mt-4">
            <SocialMediaIcons />
            <div className="flex flex-1 gap-4 hover:cursor-pointer justify-center">
          {/* Google Play Badge */}
          <a
            href="https://play.google.com/store"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://www.svgrepo.com/show/303139/google-play-badge-logo.svg"
              width="130"
              height="110"
              alt="Google Play Store"
            />
          </a>

          {/* Apple App Store Badge */}
          <a
            href="https://www.apple.com/app-store/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://www.svgrepo.com/show/303128/download-on-the-app-store-apple-logo.svg"
              width="130"
              height="110"
              alt="Apple App Store"
            />
          </a>
        </div>
          </div>
        </div>



        <div className="mt-10 pt-6 border-t border-gray-600 text-center">
          <img
            src="https://static.vecteezy.com/system/resources/previews/020/037/356/non_2x/vch-letter-logo-design-on-white-background-vch-creative-circle-letter-logo-concept-vch-letter-design-vector.jpg"
            alt="VCH Logo"
            className="h-16 mx-auto mb-4 rounded-full"
          />
          <p className="text-gray-400 text-sm sm:text-base">
            Copyright © 2025, VCH. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
