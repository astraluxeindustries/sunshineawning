import React from 'react';
import { Reveal } from './ui/Reveal';
import { CheckCircle2 } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-neutral relative overflow-visible">
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          <div className="lg:w-1/2">
            <Reveal>
              <div className="relative overflow-visible">
                <div className="absolute -top-4 -left-4 w-24 h-24 bg-accent/20 rounded-full z-0"></div>
                <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary/10 rounded-full z-0"></div>
                <img 
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop" 
                  alt="Beautiful patio cover construction" 
                  className="rounded-2xl shadow-2xl relative z-10 w-full object-cover h-[500px]"
                />
                <div className="absolute bottom-10 -left-10 bg-white p-6 rounded-xl shadow-xl z-20 hidden md:block max-w-xs">
                  <p className="font-serif text-lg text-primary font-bold mb-2">"We Are A Team That Loves to Create."</p>
                  <div className="h-1 w-12 bg-accent rounded-full"></div>
                </div>
              </div>
            </Reveal>
          </div>

          <div className="lg:w-1/2">
            <Reveal>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6">About Our Company</h2>
              <p className="text-lg text-gray-600 mb-6 italic border-l-4 border-accent pl-4">
                We take pride in what we do.
              </p>
              
              <div className="space-y-6 text-gray-700 leading-relaxed">
                <p>
                  As an independently owned and operated business, we are wholeheartedly committed to ensuring complete customer satisfaction. In this endeavor, we consider it our duty not only to our local community, but also to you.
                </p>
                <p>
                  Our company prioritizes customers, and as such, our name reflects our reputation. We offer fair, consistent, and honest, no-pressure pricing. Our team holds the proper licenses and insurance, and we take immense pride in our role as a dedicated member of the St. George community.
                </p>
                <p>
                  During construction, we take great care to minimize any mess, and always leave your premises spotless once we finish the work. We go the extra mile to safeguard our standing by working diligently and doing whatever it takes to ensure our customers receive the service they deserve.
                </p>
              </div>

              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="text-accent" size={24} />
                  <span className="font-semibold text-gray-800">Licensed & Insured</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="text-accent" size={24} />
                  <span className="font-semibold text-gray-800">Clean Job Sites</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="text-accent" size={24} />
                  <span className="font-semibold text-gray-800">No-Pressure Pricing</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="text-accent" size={24} />
                  <span className="font-semibold text-gray-800">Locally Operated</span>
                </div>
              </div>
            </Reveal>
          </div>

        </div>
      </div>
    </section>
  );
};
