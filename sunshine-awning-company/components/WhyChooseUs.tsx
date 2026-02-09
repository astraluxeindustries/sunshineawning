import React from 'react';
import { DollarSign, PhoneCall, Award, FileCheck } from 'lucide-react';
import { Reveal } from './ui/Reveal';

export const WhyChooseUs: React.FC = () => {
  return (
    <section id="why-us" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <Reveal width="100%">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6">Why Choose Us</h2>
            <div className="w-24 h-1 bg-accent mx-auto rounded-full"></div>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Feature 1 */}
          <Reveal>
            <div className="flex gap-6 items-start p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-lg transition-shadow">
              <div className="bg-green-100 p-4 rounded-full shrink-0">
                <DollarSign className="text-green-600" size={32} />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Competitive Pricing</h3>
                <p className="text-gray-600 mb-4">
                  We offer competitive prices without resorting to high-pressure sales tactics. First and foremost, we focus on quality over quantity.
                </p>
                <p className="text-gray-600">
                  As an independently owned and operated business, we take pride in our work. Expect friendly, professional service from our team.
                </p>
              </div>
            </div>
          </Reveal>

          {/* Feature 2 */}
          <Reveal delay={0.2}>
            <div className="flex gap-6 items-start p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-lg transition-shadow">
              <div className="bg-blue-100 p-4 rounded-full shrink-0">
                <PhoneCall className="text-blue-600" size={32} />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Dedicated Support</h3>
                <p className="text-gray-600 mb-4">
                  Once we start working on your project, we commit to it and will not leave until it's complete. We fully stand behind our work and provide excellent warranties for your peace of mind.
                </p>
                <div className="text-sm text-gray-500 mt-2">
                  <p>Furthermore, we hold a good standing with the Utah State Department of Professional Licensing.</p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        <div className="mt-16 bg-primary rounded-3xl p-8 md:p-12 text-white shadow-2xl relative overflow-hidden">
           {/* Background pattern */}
           <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
           <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-64 h-64 bg-accent/20 rounded-full blur-3xl"></div>

           <div className="flex flex-col md:flex-row justify-between items-center gap-8 relative z-10">
              <div className="flex-1">
                 <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                   <Award className="text-accent" />
                   Fully Certified & Capable
                 </h3>
                 <p className="text-blue-100 max-w-2xl">
                   If you want to see proof of our capabilities, feel free to check out our work! We operate with full transparency and adherence to regulations.
                 </p>
              </div>
              <div className="flex flex-col gap-2 text-right">
                <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-lg backdrop-blur-sm">
                  <FileCheck size={18} className="text-accent" />
                  <span className="font-mono text-sm">Federal DOT # 3298062</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-lg backdrop-blur-sm">
                  <FileCheck size={18} className="text-accent" />
                  <span className="font-mono text-sm">UT License # 11334690-55011</span>
                </div>
              </div>
           </div>
        </div>
      </div>
    </section>
  );
};