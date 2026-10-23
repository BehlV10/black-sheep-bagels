import React, { useState, useEffect } from 'react';
import { Menu, X, MapPin, Clock, Phone, Sparkles } from 'lucide-react';

export default function Navbar({ onOpenContact }) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Menu', href: '#menu' },
    { name: 'Locations & Hours', href: '#locations' },
    { name: 'Events & Tastings', href: '#events' },
    { name: 'Community', href: '#community' },
  ];

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-sheep-cream/95 backdrop-blur-md shadow-sm border-b border-[#e7decb] py-3' 
        : 'bg-sheep-cream py-4 border-b border-[#ece3d3]'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo & Brand */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-11 h-11 rounded-full bg-sheep-dark text-sheep-cream flex items-center justify-center font-serif text-2xl font-bold shadow-sm transition-transform group-hover:scale-105 border border-sheep-gold">
              🐑
            </div>
            <div>
              <span className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-sheep-dark block leading-tight">
                Black Sheep
              </span>
              <span className="text-xs uppercase tracking-widest text-[#7a6857] font-medium block">
                Bagel Cafe & Market
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-[#4a3f35] hover:text-sheep-gold transition-colors"
              >
                {link.name}
              </a>
            ))}
            <button
              onClick={onOpenContact}
              className="bg-sheep-dark text-sheep-cream hover:bg-[#3d3630] text-sm font-medium px-4 py-2 rounded-full transition-all shadow-sm hover:shadow"
            >
              Contact & Inquiries
            </button>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={onOpenContact}
              className="text-xs font-semibold bg-sheep-dark text-sheep-cream px-3 py-1.5 rounded-full"
            >
              Contact
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-sheep-dark hover:text-sheep-gold focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile dropdown menu */}
        {isOpen && (
          <div className="md:hidden mt-3 pt-3 border-t border-[#e2d6c1] pb-4 space-y-2 animate-fadeIn">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2 text-base font-medium text-[#4a3f35] hover:bg-[#ebdcc8]/50 rounded-lg"
              >
                {link.name}
              </a>
            ))}
          </div>
        )}
      </div>
    </header>
  );
}
