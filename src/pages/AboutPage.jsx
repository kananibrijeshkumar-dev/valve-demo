import React from 'react';
import PageBanner from '../components/PageBanner';

export default function AboutPage() {
  return (
    <div className="bg-white min-h-screen pb-24">
      <PageBanner title="About Us" breadcrumb="About Us" />

      <section className="pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
            <div>
              <h3 className="text-2xl font-bold text-classic-navy mb-6"><strong>About D.M. Valve Product</strong></h3>
              <div className="w-16 h-1 bg-classic-red mb-6"></div>
              
              <p className="text-classic-textGrey text-lg mb-6 leading-relaxed">
                Located in the industrial hub of Vatva and Bapunagar, Gujarat, our manufacturing facility is equipped with state-of-the-art CNC machinery and rigorous testing environments. 
              </p>
              <p className="text-classic-textGrey text-lg leading-relaxed mb-8">
                Since 2002, we have specialized in manufacturing heavy-duty TC End Ball Valves, SS Three Way Ball Valves, and Flush Bottom Tank Valves. Our commitment is simple: zero-leakage, absolute precision, and unyielding durability.
              </p>
              
              <div className="grid grid-cols-2 gap-8 border-t border-classic-borderGrey pt-8">
                <div>
                  <h4 className="text-4xl font-bold text-classic-red mb-2">20+</h4>
                  <p className="text-classic-navy font-bold uppercase tracking-widest text-sm">Years Experience</p>
                </div>
                <div>
                  <h4 className="text-4xl font-bold text-classic-red mb-2">500+</h4>
                  <p className="text-classic-navy font-bold uppercase tracking-widest text-sm">Industrial Clients</p>
                </div>
              </div>
            </div>
            
            <div className="relative p-4 border border-classic-borderGrey bg-classic-bgGrey">
              <img 
                src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80" 
                alt="Engineering" 
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
