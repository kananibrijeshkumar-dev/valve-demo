import React from 'react';
import { ArrowRight } from 'lucide-react';
import { products } from '../data/products';

export default function ProductsPage({ onOpenQuote }) {
  return (
    <div className="bg-industrial-900 min-h-screen pt-20">
      {/* Page Header */}
      <div className="bg-industrial-950 py-24 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-extrabold text-white tracking-tighter sm:text-6xl mb-6">
            FULL <span className="text-industrial-400 font-light">CATALOG</span>
          </h1>
          <p className="mt-4 text-xl text-gray-400 max-w-2xl mx-auto font-light leading-relaxed">
            Explore our extensive range of high-performance valves built to withstand the toughest chemical and physical conditions.
          </p>
        </div>
      </div>

      {/* Massive Product Grid */}
      <section className="py-24 bg-industrial-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {products.map((product) => (
              <div key={product.id} className="bg-industrial-950 rounded-2xl overflow-hidden border border-gray-800 hover:border-industrial-400/50 hover:shadow-[0_0_20px_rgba(45,212,191,0.15)] transition-all duration-500 group flex flex-col">
                <div className="h-64 overflow-hidden bg-industrial-900 p-6 flex items-center justify-center relative">
                  <div className="absolute top-4 left-4 border border-industrial-400/30 text-industrial-400 text-xs font-bold px-3 py-1 rounded-full z-10 uppercase tracking-wider backdrop-blur-md bg-industrial-950/50">
                    {product.category}
                  </div>
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-cover mix-blend-luminosity opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700"
                  />
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-white mb-4">{product.name}</h3>
                  <p className="text-gray-400 mb-8 text-sm flex-grow leading-relaxed">
                    {product.desc}
                  </p>
                  <button 
                    onClick={() => onOpenQuote(product.name)}
                    className="w-full text-center bg-transparent hover:bg-industrial-400 text-industrial-400 hover:text-industrial-950 font-bold py-3 rounded-full border border-industrial-400/50 transition-all duration-300 flex items-center justify-center"
                  >
                    Request Specs <ArrowRight className="ml-2 h-5 w-5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
