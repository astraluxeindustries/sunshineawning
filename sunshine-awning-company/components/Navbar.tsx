import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Logo } from './Logo';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'About Us', href: '#about' },
  { label: 'Why Choose Us', href: '#why-us' },
  { label: 'Testimonials', href: '#testimonials' },
];

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-3 group">
          <Logo className="w-10 h-10 md:w-14 md:h-14 group-hover:rotate-12 transition-transform duration-300 drop-shadow-md" />
          <div className={`flex flex-col ${isScrolled ? 'text-primary' : 'text-white'} drop-shadow-sm`}>
            <span className="font-serif font-bold text-xl md:text-2xl leading-none tracking-tight">Sunshine</span>
            <span className={`text-[10px] md:text-xs uppercase tracking-[0.2em] font-bold ${isScrolled ? 'text-primary/80' : 'text-white/90'}`}>Awning Company</span>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`text-sm font-bold tracking-wide hover:text-accent transition-colors ${
                isScrolled ? 'text-gray-700' : 'text-white'
              } drop-shadow-sm`}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="bg-accent hover:bg-amber-600 text-white px-6 py-2.5 rounded-full font-bold shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5"
          >
            Get a Quote
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button
          className={`md:hidden ${isScrolled ? 'text-gray-800' : 'text-white'}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t"
          >
            <div className="flex flex-col p-6 gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-gray-800 font-medium text-lg"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="bg-primary text-white text-center py-3 rounded-lg font-bold mt-2"
              >
                Contact Us
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};