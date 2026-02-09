import React from 'react';
import { Facebook, Instagram, Twitter } from 'lucide-react';
import { Logo } from './Logo';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-dark text-white pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <Logo className="w-14 h-14" />
              <div className="flex flex-col">
                <span className="font-serif font-bold text-xl leading-none">Sunshine</span>
                <span className="text-xs uppercase tracking-widest font-medium text-gray-400">Awning Company</span>
              </div>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Enhancing outdoor living spaces in Washington County, Utah with quality craftsmanship and custom designs.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-4 text-gray-400">
              <li><a href="#home" className="hover:text-accent transition-colors">Home</a></li>
              <li><a href="#services" className="hover:text-accent transition-colors">Services</a></li>
              <li><a href="#about" className="hover:text-accent transition-colors">About Us</a></li>
              <li><a href="#testimonials" className="hover:text-accent transition-colors">Testimonials</a></li>
              <li><a href="#contact" className="hover:text-accent transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-lg mb-6">Our Services</h4>
            <ul className="space-y-4 text-gray-400">
              <li><a href="#" className="hover:text-accent transition-colors">Patio Covers</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Sunrooms</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Louvered Roofs</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Custom Designs</a></li>
            </ul>
          </div>

          {/* Social / Legal */}
          <div>
            <h4 className="font-bold text-lg mb-6">Connect</h4>
            <div className="flex gap-4 mb-8">
              <a href="#" className="bg-white/10 p-3 rounded-full hover:bg-accent transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="bg-white/10 p-3 rounded-full hover:bg-accent transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="bg-white/10 p-3 rounded-full hover:bg-accent transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500 gap-4">
          <p>&copy; {new Date().getFullYear()} Sunshine Awning Company. All rights reserved.</p>
          <div className="flex gap-6">
            <span>DOT # 3298062</span>
            <span>UT License # 11334690-55011</span>
          </div>
        </div>
      </div>
    </footer>
  );
};