import React from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image - Premium Patio Furniture & Cover */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
        style={{
          // High-quality image of a modern patio with furniture and covering
          backgroundImage: 'url("https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1974&auto=format&fit=crop")',
        }}
      >
        {/* Darker gradient overlay on the left for text readability, clearer on the right for image visibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-950/90 via-blue-900/60 to-transparent"></div>
        {/* Mobile overlay */}
        <div className="absolute inset-0 bg-blue-950/40 md:hidden"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 pt-20">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-accent/20 border border-accent text-accent font-semibold text-sm mb-6 uppercase tracking-wider backdrop-blur-sm shadow-sm">
              Proudly Serving Washington County, Utah
            </span>
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-6 leading-tight drop-shadow-md">
              Specializing in Quality <span className="text-accent">Patio Covers</span>, Sunrooms, and Louvered Roofs.
            </h1>
            <p className="text-xl text-gray-100 mb-10 max-w-2xl leading-relaxed drop-shadow-sm font-medium">
              We are a locally operated independent business, proudly serving our community with custom designs and craftsmanship that stands the test of time.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#contact"
                className="inline-flex items-center justify-center gap-2 bg-accent hover:bg-amber-600 text-white text-lg font-bold px-8 py-4 rounded-full transition-all shadow-lg hover:shadow-accent/50 hover:-translate-y-1"
              >
                Get Your Free Estimate
                <ArrowRight size={20} />
              </a>
              <a 
                href="#services"
                className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/30 text-lg font-semibold px-8 py-4 rounded-full transition-all hover:-translate-y-1 shadow-lg"
              >
                Explore Services
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative wave at bottom */}
      <div className="absolute bottom-0 left-0 right-0 z-0 pointer-events-none">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="#ffffff" fillOpacity="1" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,160C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
    </section>
  );
};
