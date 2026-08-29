import React from 'react';
import PageBanner from '../components/PageBanner';
import { products } from '../data/products';
import { ArrowRight } from 'lucide-react';

export default function ProductsPage({ onOpenQuote }) {
  return (
    <div className="bg-white min-h-screen pt-16">
      <PageBanner title="Product Gallery" breadcrumb="Products" />

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <div key={product.id} className="group rounded-3xl bg-minimal-bg overflow-hidden border border-minimal-border hover:shadow-xl transition-all duration-500 flex flex-col">
                <div className="aspect-w-4 aspect-h-3 overflow-hidden bg-white">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-cover mix-blend-multiply opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                  />
                </div>
                
                <div className="p-8 flex flex-col flex-grow">
                  <div className="text-xs font-semibold text-minimal-textLight tracking-widest uppercase mb-2">
                    {product.category}
                  </div>
                  <h3 className="text-xl font-semibold text-minimal-text mb-4">
                    {product.name}
                  </h3>
                  <button 
                    onClick={() => onOpenQuote(product.name)}
                    className="mt-auto inline-flex items-center text-sm font-semibold text-minimal-text hover:text-minimal-accent transition-colors"
                  >
                    Request Specs <ArrowRight className="ml-2 h-4 w-4" />
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
