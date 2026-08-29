import React from 'react';
import PageBanner from '../components/PageBanner';
import { products } from '../data/products';

export default function ProductsPage() {
  return (
    <div className="bg-classic-bgGrey min-h-screen pb-24">
      <PageBanner title="Photo Gallery" breadcrumb="Photo Gallery" />

      <section className="pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-classic-navy"><strong>Photo Gallery</strong></h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <div key={product.id} className="relative group overflow-hidden bg-white shadow-sm">
                <div className="aspect-w-4 aspect-h-3 overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                
                {/* Dark Overlay (mimicking the reference site's slide-up overlay) */}
                <div className="absolute inset-0 bg-classic-navy/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-6 text-center">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">
                      <span className="hover:text-classic-red transition-colors cursor-pointer">{product.name}</span>
                    </h3>
                    <div className="w-12 h-1 bg-classic-red mx-auto mt-4"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
