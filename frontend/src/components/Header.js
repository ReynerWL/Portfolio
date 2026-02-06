import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/button';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setIsMobileMenuOpen(false);
    }
  };

  const navItems = [
    { label: 'About', id: 'about' },
    { label: 'Projects', id: 'projects' },
    { label: 'Skills', id: 'skills' },
    { label: 'Contact', id: 'contact' }
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white' : 'bg-transparent'
      }`}
      style={{
        borderBottom: isScrolled ? '4px solid #000' : 'none',
        boxShadow: isScrolled ? '0 6px 0 0 rgba(0,0,0,1)' : 'none'
      }}
    >
      <nav className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="text-2xl font-bold tracking-tight hover:scale-105 transition-transform"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            RWL<span className="text-[#06B6D4]">.</span>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="px-4 py-2 font-medium hover:bg-black hover:text-white transition-all duration-300"
                style={{
                  border: '3px solid transparent',
                  fontFamily: "'Space Grotesk', sans-serif"
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.border = '3px solid #000';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.border = '3px solid transparent';
                }}
              >
                {item.label}
              </button>
            ))}
            <Button
              onClick={() => scrollToSection('contact')}
              className="ml-2 bg-[#06B6D4] hover:bg-[#0891B2] text-white font-bold px-6 py-2 transition-all duration-300"
              style={{
                border: '4px solid #000',
                boxShadow: '4px 4px 0 0 rgba(0,0,0,1)',
                borderRadius: '4px',
                fontFamily: "'Space Grotesk', sans-serif"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translate(-2px, -2px)';
                e.currentTarget.style.boxShadow = '6px 6px 0 0 rgba(0,0,0,1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translate(0, 0)';
                e.currentTarget.style.boxShadow = '4px 4px 0 0 rgba(0,0,0,1)';
              }}
            >
              Hire Me
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div
            className="md:hidden mt-4 bg-white p-4"
            style={{
              border: '4px solid #000',
              boxShadow: '6px 6px 0 0 rgba(0,0,0,1)'
            }}
          >
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="block w-full text-left px-4 py-3 font-medium hover:bg-black hover:text-white transition-colors"
                style={{
                  border: '3px solid #000',
                  marginBottom: '8px',
                  fontFamily: "'Space Grotesk', sans-serif"
                }}
              >
                {item.label}
              </button>
            ))}
            <Button
              onClick={() => scrollToSection('contact')}
              className="w-full bg-[#06B6D4] hover:bg-[#0891B2] text-white font-bold py-3 mt-2"
              style={{
                border: '4px solid #000',
                boxShadow: '4px 4px 0 0 rgba(0,0,0,1)',
                fontFamily: "'Space Grotesk', sans-serif"
              }}
            >
              Hire Me
            </Button>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
