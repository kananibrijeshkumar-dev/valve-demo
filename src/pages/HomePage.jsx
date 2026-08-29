import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export default function HomePage({ onOpenQuote }) {
  return (
    <div className="bg-white min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-minimal-bg"></div>
        <div className="absolute inset-y-0 right-0 w-1/2 bg-white transform -skew-x-12 translate-x-20 hidden lg:block opacity-50"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 lg:py-48 flex items-center">
          <div className="max-w-2xl z-10">
            <h1 className="text-5xl font-light text-minimal-text sm:text-6xl lg:text-7xl mb-6 tracking-tight leading-tight">
              Precision <br/><span className="font-bold">Engineered.</span>
            </h1>
            <p className="mt-4 text-lg text-minimal-textLight max-w-xl mb-12 leading-relaxed font-light">
              D.M. Valve Product manufactures heavy-duty, zero-leakage industrial valves for the world's most demanding environments. Based in Ahmedabad, trusted globally.
            </p>
            <div className="flex flex-col sm:flex-row gap-5">
              <button 
                onClick={() => onOpenQuote("Bulk Order Inquiry")} 
                className="bg-minimal-text text-white px-8 py-4 rounded-full font-medium text-base hover:bg-minimal-accent transition-all duration-300 shadow-lg shadow-minimal-text/20 flex items-center justify-center"
              >
                Request a Quote <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <Link 
                to="/products" 
                className="bg-white border border-minimal-border text-minimal-text px-8 py-4 rounded-full font-medium text-base hover:bg-minimal-bg transition-colors flex items-center justify-center shadow-sm"
              >
                View Catalog
              </Link>
            </div>
          </div>
          <div className="hidden lg:block absolute right-0 top-1/2 transform -translate-y-1/2 w-1/2">
             <img
              className="w-full h-[600px] object-cover rounded-l-3xl shadow-2xl mix-blend-multiply opacity-90"
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80"
              alt="Industrial Factory"
            />
          </div>
        </div>
      </section>

      {/* Services/Highlights Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-3xl font-light text-minimal-text tracking-tight">The D.M. Valve <span className="font-bold">Standard</span></h2>
            <div className="w-12 h-1 bg-minimal-accent mx-auto mt-6 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="p-8 rounded-3xl bg-minimal-bg hover:bg-white hover:shadow-xl transition-all duration-300 border border-transparent hover:border-minimal-border group">
              <CheckCircle2 className="h-10 w-10 text-minimal-textLight group-hover:text-minimal-text transition-colors mb-6" />
              <h3 className="text-xl font-semibold text-minimal-text mb-4">ISO 9001:2015</h3>
              <p className="text-minimal-textLight font-light leading-relaxed">Internationally certified manufacturing processes ensuring consistent quality and material traceability.</p>
            </div>
            <div className="p-8 rounded-3xl bg-minimal-bg hover:bg-white hover:shadow-xl transition-all duration-300 border border-transparent hover:border-minimal-border group">
              <CheckCircle2 className="h-10 w-10 text-minimal-textLight group-hover:text-minimal-text transition-colors mb-6" />
              <h3 className="text-xl font-semibold text-minimal-text mb-4">100% Tested</h3>
              <p className="text-minimal-textLight font-light leading-relaxed">Every valve undergoes intense hydrostatic testing for a strict zero-leakage guarantee before shipping.</p>
            </div>
            <div className="p-8 rounded-3xl bg-minimal-bg hover:bg-white hover:shadow-xl transition-all duration-300 border border-transparent hover:border-minimal-border group">
              <CheckCircle2 className="h-10 w-10 text-minimal-textLight group-hover:text-minimal-text transition-colors mb-6" />
              <h3 className="text-xl font-semibold text-minimal-text mb-4">Custom Fabrication</h3>
              <p className="text-minimal-textLight font-light leading-relaxed">We design and manufacture specialized valves based on client requirements for unique industrial applications.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
