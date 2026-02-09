import React from 'react';
import { Calendar, PenTool, LifeBuoy, ListPlus, ShieldCheck, Sparkles } from 'lucide-react';
import { Reveal } from './ui/Reveal';
import { ServiceItem } from '../types';

const services: ServiceItem[] = [
  {
    title: "Easy, Flexible Scheduling",
    description: "Call today to schedule your free estimate. We work around your time to make the process convenient.",
    icon: Calendar
  },
  {
    title: "Custom Design",
    description: "Every structure is custom-designed to match your style and needs. No cookie-cutter solutions.",
    icon: PenTool
  },
  {
    title: "Fast & Friendly Support",
    description: "We are standing by to answer any general or specific questions you may have about your project.",
    icon: LifeBuoy
  },
  {
    title: "Many Options to Choose From",
    description: "We have multiple brands and colors available for you to select what's right for your home.",
    icon: ListPlus
  },
  {
    title: "High Quality and Vetted",
    description: "To ensure high quality, I build your additions myself. Proven track record of delivering excellence.",
    icon: ShieldCheck
  },
  {
    title: "Crisp, Clean Designs",
    description: "Our structures are crisp, clean, and are sure to give your home that extra premium touch.",
    icon: Sparkles
  }
];

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <Reveal width="100%">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-4">What We Offer</h2>
            <div className="w-24 h-1 bg-accent mx-auto rounded-full mb-6"></div>
            <p className="text-gray-500 font-bold tracking-widest uppercase">All Good Stuff</p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Reveal key={index} delay={index * 0.1}>
              <div className="group p-8 rounded-2xl bg-neutral/30 hover:bg-white border border-transparent hover:border-gray-100 hover:shadow-2xl transition-all duration-300 h-full">
                <div className="w-14 h-14 bg-primary/10 text-primary rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  <service.icon size={28} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};