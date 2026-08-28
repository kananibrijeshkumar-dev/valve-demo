import React from 'react';
import { ChevronRight } from 'lucide-react';
import { products } from '../data/products';

export default function ProductsPage({ onOpenQuote }) {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Page Header */}
      <div className="bg-industrial-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold text-white sm:text-5xl">Industrial Valve Catalog</h1>
          <p className="mt-4 text-xl text-industrial-200 max-w-2xl">
            Explore our extensive range of high-performance valves built to withstand the toughest chemical and physical conditions.
          </p>
        </div>
      </div>

      {/* Massive Product Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {products.map((product) => (
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
                  <p className="text-gray-600 mb-6 text-sm flex-grow">
                    {product.desc}
                  </p>
                  <button 
                    onClick={() => onOpenQuote(product.name)}
                    className="w-full text-center bg-gray-50 hover:bg-industrial-50 text-industrial-600 font-bold py-3 rounded-lg border border-gray-200 hover:border-industrial-300 transition-colors flex items-center justify-center"
                  >
                    Get Quote <ChevronRight className="ml-1 h-5 w-5" />
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
