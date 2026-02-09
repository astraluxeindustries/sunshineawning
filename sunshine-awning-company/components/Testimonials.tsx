import React from 'react';
import { Quote, Star } from 'lucide-react';
import { Reveal } from './ui/Reveal';
import { TestimonialItem } from '../types';

const testimonials: TestimonialItem[] = [
  {
    quote: "A truly exceptional experience from beginning to end. When Evan came to give us an estimate, he brought samples of the different materials available, listened carefully to our design ideas and questions and thoughtfully guided us to our final build project. His communication throughout was great, and the execution of our pergola was flawless. We'd give 10 stars to Evan and Troy if possible!",
    author: "Marty M.",
    location: "St George, UT"
  },
  {
    quote: "Wow!! What a company. They did the work in the time said and with exceptional quality. They were the best contractor's that we've had in over 40 years living in this house. I highly recommend them.",
    author: "Scott \"Pigeonie\"",
    location: "Washington, UT"
  },
  {
    quote: "Evan came when he said he would. He was meticulous in design and cleanliness of my property. He was fast, honest, and very fairly priced. Would highly recommend him!!!",
    author: "Ricky T.",
    location: "St. George, UT"
  }
];

export const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-24 bg-primary text-white relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <Reveal width="100%">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">Client Testimonials</h2>
            <div className="w-24 h-1 bg-accent mx-auto rounded-full mb-4"></div>
            <p className="text-blue-200">See what our neighbors in Washington County are saying.</p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <Reveal key={index} delay={index * 0.2}>
              <div className="bg-white/10 backdrop-blur-lg border border-white/20 p-8 rounded-2xl relative hover:transform hover:-translate-y-2 transition-transform duration-300 h-full flex flex-col">
                <Quote className="text-accent/50 absolute top-6 right-6" size={48} />
                <div className="flex gap-1 mb-6 text-accent">
                  <Star fill="currentColor" size={18} />
                  <Star fill="currentColor" size={18} />
                  <Star fill="currentColor" size={18} />
                  <Star fill="currentColor" size={18} />
                  <Star fill="currentColor" size={18} />
                </div>
                <p className="text-lg leading-relaxed mb-8 flex-grow italic text-blue-50">
                  "{item.quote}"
                </p>
                <div className="mt-auto border-t border-white/10 pt-4">
                  <p className="font-bold text-xl">{item.author}</p>
                  <p className="text-sm text-blue-300">{item.location}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};