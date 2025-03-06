import React from 'react';
import { Facebook, Twitter, Linkedin, Youtube, Github, ExternalLink } from 'lucide-react';

const footerLinks = {
  practo: {
    title: 'VCH',
    links: [
      { name: 'About', href: '#' },
      { name: 'Blog', href: '#' },
      { name: 'Careers', href: '#' },
      { name: 'Press', href: '#' },
      { name: 'Contact Us', href: '#' },
    ]
  },
  forPatients: {
    title: 'For patients',
    links: [
      { name: 'Search for doctors', href: '#' },
      { name: 'Search for clinics', href: '#' },
      { name: 'Search for hospitals', href: '#' },
      { name: 'Vch Plus', href: '#' },
      { name: 'Covid Hospital listing', href: '#' },
      { name: 'Health app', href: '#' },
    ]
  },
  forDoctors: {
    title: 'For doctors',
    links: [
      { name: 'Vch Profile', href: '#' },
    ]
  },
  forHospitals: {
    title: 'For hospitals',
    links: [
      { name: 'Insta by Practo', href: '#' },
      { name: 'Qikwell by Practo', href: '#' },
      { name: 'Vch Profile', href: '#' },
      { name: 'Vch Reach', href: '#' },
      { name: 'Vch Drive', href: '#' },
    ]
  },
  more: {
    title: 'More',
    links: [
      { name: 'Help', href: '#' },
      { name: 'Developers', href: '#' },
      { name: 'Privacy Policy', href: '#' },
      { name: 'Terms & Conditions', href: '#' },
      { name: 'Healthcare Directory', href: '#' },
      { name: 'Vch Health Wiki', href: '#' },
    ]
  },
  social: {
    title: 'Social',
    links: [
      { name: 'Facebook', href: '#', icon: Facebook },
      { name: 'Twitter', href: '#', icon: Twitter },
      { name: 'LinkedIn', href: '#', icon: Linkedin },
      { name: 'Youtube', href: '#', icon: Youtube },
      { name: 'Github', href: '#', icon: Github },
    ]
  }
};

const FooterColumn = ({ title, links }) => (
  <div className="flex flex-col items-start space-y-2">
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
    <footer className="bg-[#2f2f30] py-10 px-6 w-full mt-auto">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
          {Object.entries(footerLinks).map(([key, section]) => (
            <FooterColumn key={key} title={section.title} links={section.links} />
          ))}
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
