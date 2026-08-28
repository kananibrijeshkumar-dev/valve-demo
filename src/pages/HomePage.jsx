import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck, Settings, PlayCircle } from 'lucide-react';
import { products } from '../data/products';

export default function HomePage({ onOpenQuote }) {
  // Show only top 3 products on home page
  const featuredProducts = products.slice(0, 3);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-industrial-900 overflow-hidden">
        <div className="absolute inset-0">
          <img
            className="w-full h-full object-cover opacity-20"
            src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80"
            alt="Industrial Factory"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-industrial-900 to-transparent"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Premium Manufacturer of Stainless Steel Ball Valves
            </h1>
            <p className="mt-6 text-xl text-gray-300 max-w-xl">
              Based in Ahmedabad, Gujarat. We manufacture heavy-duty TC End Ball Valves, SS Three Way Ball Valves, and Flush Bottom Tank Valves for global industries.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <button onClick={() => onOpenQuote("Bulk Order Inquiry")} className="bg-industrial-500 text-white px-8 py-4 rounded-md font-bold text-lg hover:bg-industrial-400 transition-colors shadow-lg flex items-center">
                Request Bulk Quote <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <Link to="/products" className="bg-transparent border-2 border-gray-400 text-white px-8 py-4 rounded-md font-bold text-lg hover:border-white transition-colors flex items-center">
                View Full Catalog
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Corporate Video Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-extrabold text-gray-900 mb-6">Inside Our State-of-the-Art Manufacturing Facility</h2>
              <p className="text-lg text-gray-600 mb-6">
                At D.M. Valve Product, precision is our guarantee. Watch our corporate video to see how we transform raw high-grade stainless steel into zero-leakage industrial valves. Every single unit is subjected to rigorous pressure testing before it leaves our factory floor in Ahmedabad.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center text-gray-700">
                  <ShieldCheck className="h-6 w-6 text-industrial-600 mr-3" /> ISO 9001:2015 Certified Processes
                </li>
                <li className="flex items-center text-gray-700">
                  <Settings className="h-6 w-6 text-industrial-600 mr-3" /> CNC Machining for Micro-Precision
                </li>
                <li className="flex items-center text-gray-700">
                  <PlayCircle className="h-6 w-6 text-industrial-600 mr-3" /> 100% Hydrostatic Pressure Tested
                </li>
              </ul>
            </div>
            <div className="lg:w-1/2 w-full">
              {/* Responsive Video Container */}
              <div className="relative pt-[56.25%] rounded-2xl overflow-hidden shadow-2xl bg-gray-900 border-4 border-gray-100">
                <iframe 
                  className="absolute inset-0 w-full h-full"
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=0&controls=1" 
                  title="Corporate Video Placeholder" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen>
                </iframe>
              </div>
              <p className="text-center text-sm text-gray-400 mt-3 italic">*Placeholder Video - Replace with real IndiaMart Corporate Video Link*</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-24 bg-gray-100 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <span className="text-industrial-600 font-bold uppercase tracking-wider text-sm mb-2 block">Our Products</span>
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Featured Valve Solutions</h2>
            </div>
            <Link to="/products" className="hidden md:flex items-center text-industrial-600 font-bold hover:text-industrial-800 transition-colors">
              See All Products <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <div key={product.id} className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-2xl transition-all duration-300 group flex flex-col">
                <div className="h-64 overflow-hidden bg-gray-100 p-4 flex items-center justify-center relative">
                  <div className="absolute top-4 left-4 bg-industrial-600 text-white text-xs font-bold px-3 py-1 rounded-full z-10">
                    {product.category}
                  </div>
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-cover mix-blend-multiply group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{product.name}</h3>
                  <p className="text-gray-600 mb-6 text-sm flex-grow line-clamp-3">
                    {product.desc}
                  </p>
                  <button 
                    onClick={() => onOpenQuote(product.name)}
                    className="w-full text-center bg-gray-50 hover:bg-industrial-50 text-industrial-600 font-bold py-3 rounded-lg border border-gray-200 hover:border-industrial-300 transition-colors"
                  >
                    Get Quote
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-8 text-center md:hidden">
            <Link to="/products" className="inline-flex items-center text-industrial-600 font-bold hover:text-industrial-800 transition-colors">
              See All Products <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
