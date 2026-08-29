import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Settings } from 'lucide-react';

export default function HomePage({ onOpenQuote }) {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-classic-bgGrey overflow-hidden">
        <div className="absolute inset-0">
          <img
            className="w-full h-full object-cover opacity-20 mix-blend-multiply"
            src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80"
            alt="Industrial Factory"
          />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 lg:py-48 text-center md:text-left">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-extrabold text-classic-navy sm:text-5xl lg:text-6xl mb-6 uppercase">
              Premium Manufacturer of <br/><span className="text-classic-red">Industrial Valves</span>
            </h1>
            <p className="mt-4 text-lg text-classic-textGrey max-w-xl mb-10 leading-relaxed font-medium">
              Based in Ahmedabad, Gujarat. We manufacture heavy-duty TC End Ball Valves, SS Three Way Ball Valves, and Flush Bottom Tank Valves for global industries.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <button 
                onClick={() => onOpenQuote("Bulk Order Inquiry")} 
                className="bg-classic-red text-white px-8 py-4 font-bold text-lg hover:bg-classic-navy transition-colors uppercase tracking-widest shadow-lg flex items-center justify-center"
              >
                Request Quote <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <Link 
                to="/products" 
                className="bg-white border-2 border-classic-navy text-classic-navy px-8 py-4 font-bold text-lg hover:bg-classic-navy hover:text-white transition-colors uppercase tracking-widest shadow-lg flex items-center justify-center"
              >
                Photo Gallery
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services/Highlights Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-classic-navy uppercase">Why Choose <span className="text-classic-red">Us?</span></h2>
            <div className="w-16 h-1 bg-classic-red mx-auto mt-4"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-classic-bgGrey border border-classic-borderGrey hover:shadow-xl transition-shadow">
              <Settings className="h-16 w-16 text-classic-red mx-auto mb-6" />
              <h3 className="text-xl font-bold text-classic-navy mb-4 uppercase">ISO 9001:2015</h3>
              <p className="text-classic-textGrey">Internationally certified manufacturing processes ensuring consistent quality.</p>
            </div>
            <div className="text-center p-8 bg-classic-bgGrey border border-classic-borderGrey hover:shadow-xl transition-shadow">
              <Settings className="h-16 w-16 text-classic-red mx-auto mb-6" />
              <h3 className="text-xl font-bold text-classic-navy mb-4 uppercase">100% Tested</h3>
              <p className="text-classic-textGrey">Every valve undergoes intense hydrostatic testing for zero-leakage guarantee.</p>
            </div>
            <div className="text-center p-8 bg-classic-bgGrey border border-classic-borderGrey hover:shadow-xl transition-shadow">
              <Settings className="h-16 w-16 text-classic-red mx-auto mb-6" />
              <h3 className="text-xl font-bold text-classic-navy mb-4 uppercase">Custom Fabrication</h3>
              <p className="text-classic-textGrey">We design and manufacture specialized valves based on client requirements.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
