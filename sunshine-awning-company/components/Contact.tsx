import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { Reveal } from './ui/Reveal';

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            
            {/* Contact Info Side */}
            <div className="bg-primary p-12 text-white flex flex-col justify-between relative overflow-hidden">
               <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
              
              <div className="relative z-10">
                <h3 className="text-3xl font-serif font-bold mb-6">Let's work together!</h3>
                <p className="text-blue-100 mb-12 text-lg">
                  Drop us an email or give us a call to get started. We're happy to answer questions about patio covers, sunrooms, or any of our services.
                </p>

                <div className="space-y-8">
                  <div className="flex items-start gap-4">
                    <div className="bg-white/20 p-3 rounded-lg">
                      <Phone className="text-accent" size={24} />
                    </div>
                    <div>
                      <p className="text-sm text-blue-300 font-semibold uppercase tracking-wider">Call Us</p>
                      <p className="text-xl font-bold">St. George Area</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-white/20 p-3 rounded-lg">
                      <Mail className="text-accent" size={24} />
                    </div>
                    <div>
                      <p className="text-sm text-blue-300 font-semibold uppercase tracking-wider">Email Us</p>
                      <p className="text-xl font-bold">info@sunshineawning.com</p>
                      <p className="text-xs text-blue-300 mt-1">(Placeholder email)</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-white/20 p-3 rounded-lg">
                      <MapPin className="text-accent" size={24} />
                    </div>
                    <div>
                      <p className="text-sm text-blue-300 font-semibold uppercase tracking-wider">Serving</p>
                      <p className="text-xl font-bold">Washington County, Utah</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-12 relative z-10">
                <p className="text-sm text-blue-300">
                  Business Hours: Mon - Fri, 8am - 5pm
                </p>
              </div>
            </div>

            {/* Form Side */}
            <div className="p-12 bg-white">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Request a Free Estimate</h3>
              <p className="text-gray-500 mb-8">Fill out the form below and we'll get back to you shortly.</p>
              
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Project Type</label>
                  <select className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all text-gray-600">
                    <option>Patio Cover</option>
                    <option>Sunroom</option>
                    <option>Louvered Roof</option>
                    <option>Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                  <textarea 
                    rows={4} 
                    className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all resize-none"
                    placeholder="Tell us about your project..."
                  ></textarea>
                </div>

                <button 
                  type="submit"
                  className="w-full bg-accent hover:bg-amber-600 text-white font-bold py-4 rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2"
                >
                  Send Message
                  <Send size={18} />
                </button>
              </form>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};