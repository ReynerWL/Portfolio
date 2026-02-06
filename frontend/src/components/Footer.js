import React from 'react';
import { Github, Linkedin, Instagram, Facebook, Mail } from 'lucide-react';
import { socialLinks } from '../data/mock';

const Footer = () => {
  const iconMap = {
    github: Github,
    linkedin: Linkedin,
    instagram: Instagram,
    facebook: Facebook
  };

  return (
    <footer className="bg-black text-white py-12 mt-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3
              className="text-3xl font-bold mb-4"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              RWL<span className="text-[#06B6D4]">.</span>
            </h3>
            <p className="text-gray-400">
              Backend Developer specializing in scalable server-side solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4
              className="text-lg font-bold mb-4"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Quick Links
            </h4>
            <ul className="space-y-2">
              {['About', 'Projects', 'Skills', 'Contact'].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => {
                      const element = document.getElementById(item.toLowerCase());
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                    className="text-gray-400 hover:text-[#06B6D4] transition-colors"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4
              className="text-lg font-bold mb-4"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Connect With Me
            </h4>
            <div className="flex gap-3">
              {socialLinks.map((social) => {
                const Icon = iconMap[social.icon];
                return (
                  <a
                    key={social.platform}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-white text-black hover:bg-[#06B6D4] hover:text-white transition-all duration-300"
                    style={{
                      border: '3px solid #fff',
                      boxShadow: '3px 3px 0 0 rgba(255,255,255,0.3)'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translate(-2px, -2px)';
                      e.currentTarget.style.boxShadow = '5px 5px 0 0 rgba(255,255,255,0.5)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translate(0, 0)';
                      e.currentTarget.style.boxShadow = '3px 3px 0 0 rgba(255,255,255,0.3)';
                    }}
                    aria-label={social.platform}
                  >
                    <Icon size={20} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          className="pt-8 text-center text-gray-400"
          style={{ borderTop: '2px solid #333' }}
        >
          <p>
            © {new Date().getFullYear()} Reyner Williams Liong. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
