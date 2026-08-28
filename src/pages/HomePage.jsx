import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck, Settings, PlayCircle } from 'lucide-react';
import { products } from '../data/products';

export default function HomePage({ onOpenQuote }) {
  const featuredProducts = products.slice(0, 3);

  return (
    <div className="bg-industrial-900 min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-industrial-950 overflow-hidden pt-20">
        <div className="absolute inset-0">
          <img
            className="w-full h-full object-cover opacity-10"
            src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80"
            alt="Industrial Factory"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-industrial-950 via-industrial-950/90 to-transparent"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 lg:py-48">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-extrabold tracking-tighter text-white sm:text-6xl lg:text-7xl mb-6">
              THE FUTURE OF <span className="text-industrial-400 font-light">FLUID CONTROL.</span>
            </h1>
            <p className="mt-6 text-xl text-gray-400 max-w-xl font-light leading-relaxed">
              Based in Ahmedabad, Gujarat. We manufacture heavy-duty TC End Ball Valves, SS Three Way Ball Valves, and Flush Bottom Tank Valves for global industries.
            </p>
            <div className="mt-12 flex flex-wrap gap-6">
              <button onClick={() => onOpenQuote("Bulk Order Inquiry")} className="bg-industrial-400 text-industrial-950 px-8 py-4 rounded-full font-bold text-lg hover:bg-industrial-300 hover:shadow-[0_0_20px_rgba(45,212,191,0.6)] transition-all duration-300 flex items-center">
                Request Bulk Quote <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <Link to="/products" className="bg-transparent border border-industrial-400 text-industrial-400 px-8 py-4 rounded-full font-bold text-lg hover:bg-industrial-400 hover:text-industrial-950 transition-all duration-300 flex items-center">
                View Full Catalog
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Corporate Video Section */}
      <section className="py-24 bg-industrial-900 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
              <h2 className="text-4xl font-extrabold text-white mb-6 tracking-tight">Inside Our State-of-the-Art Manufacturing Facility</h2>
              <p className="text-lg text-gray-400 mb-8 leading-relaxed font-light">
                At D.M. Valve Product, precision is our guarantee. Watch our corporate video to see how we transform raw high-grade stainless steel into zero-leakage industrial valves. Every single unit is subjected to rigorous pressure testing before it leaves our factory floor in Ahmedabad.
              </p>
              <ul className="space-y-6 mb-8">
                <li className="flex items-center text-gray-300 text-lg">
                  <ShieldCheck className="h-6 w-6 text-industrial-400 mr-4" /> ISO 9001:2015 Certified Processes
                </li>
                <li className="flex items-center text-gray-300 text-lg">
                  <Settings className="h-6 w-6 text-industrial-400 mr-4" /> CNC Machining for Micro-Precision
                </li>
                <li className="flex items-center text-gray-300 text-lg">
                  <PlayCircle className="h-6 w-6 text-industrial-400 mr-4" /> 100% Hydrostatic Pressure Tested
                </li>
              </ul>
            </div>
            <div className="lg:w-1/2 w-full">
              <div className="relative pt-[56.25%] rounded-2xl overflow-hidden shadow-[0_0_30px_rgba(0,0,0,0.5)] bg-industrial-950 border border-gray-800 group">
                <div className="absolute inset-0 bg-industrial-400/10 group-hover:bg-transparent transition-colors duration-500 z-10 pointer-events-none"></div>
                <iframe 
                  className="absolute inset-0 w-full h-full"
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=0&controls=1" 
                  title="Corporate Video Placeholder" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen>
                </iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-24 bg-industrial-950 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-16">
            <div>
              <h2 className="text-4xl font-extrabold text-white tracking-tight sm:text-5xl">FEATURED <span className="text-industrial-400 font-light">VALVES.</span></h2>
            </div>
            <Link to="/products" className="hidden md:flex items-center text-industrial-400 font-bold hover:text-industrial-300 transition-colors uppercase tracking-widest text-sm">
              See All Products <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {featuredProducts.map((product) => (
              <div key={product.id} className="bg-industrial-900 rounded-2xl overflow-hidden border border-gray-800 hover:border-industrial-400/50 hover:shadow-[0_0_20px_rgba(45,212,191,0.15)] transition-all duration-500 group flex flex-col">
                <div className="h-64 overflow-hidden bg-industrial-950 p-6 flex items-center justify-center relative">
                  <div className="absolute top-4 left-4 border border-industrial-400/30 text-industrial-400 text-xs font-bold px-3 py-1 rounded-full z-10 uppercase tracking-wider backdrop-blur-md bg-industrial-950/50">
                    {product.category}
                  </div>
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-cover mix-blend-luminosity opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700"
                  />
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-white mb-4">{product.name}</h3>
                  <p className="text-gray-400 mb-8 text-sm flex-grow line-clamp-3 leading-relaxed">
                    {product.desc}
                  </p>
                  <button 
                    onClick={() => onOpenQuote(product.name)}
                    className="w-full text-center bg-transparent hover:bg-industrial-400 text-industrial-400 hover:text-industrial-950 font-bold py-3 rounded-full border border-industrial-400/50 transition-all duration-300"
                  >
                    Request Specs
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center md:hidden">
            <Link to="/products" className="inline-flex items-center text-industrial-400 font-bold hover:text-industrial-300 transition-colors uppercase tracking-widest text-sm">
              See All Products <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
