import React from 'react';
import PageBanner from '../components/PageBanner';
import SEO from '../components/SEO';

export default function AboutPage() {
  return (
    <div className="bg-white min-h-screen pt-16">
      <SEO title="About Us" description="Learn about D.M. Valve Product, an ISO 9001:2015 certified manufacturer of industrial valves in Ahmedabad, Gujarat." />
      <PageBanner title="About Us" breadcrumb="About" />

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
            
            <div className="relative">
              <div className="absolute inset-0 bg-minimal-bg rounded-3xl transform -rotate-3 scale-105 -z-10"></div>
              <img 
                src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80" 
                alt="Engineering" 
                className="w-full h-auto rounded-3xl shadow-xl"
              />
            </div>

            <div>
              <h3 className="text-3xl font-light text-minimal-text mb-8 tracking-tight">Our <span className="font-bold">Legacy</span></h3>
              
              <p className="text-minimal-textLight text-lg mb-6 leading-relaxed font-light">
                Located in the industrial hub of Bapunagar, Gujarat, our manufacturing facility is equipped with state-of-the-art CNC machinery and rigorous testing environments. 
              </p>
              <p className="text-minimal-textLight text-lg leading-relaxed mb-10 font-light">
                Since 2002, we have specialized in manufacturing heavy-duty TC End Ball Valves, SS Three Way Ball Valves, and Flush Bottom Tank Valves. Our commitment is simple: zero-leakage, absolute precision, and unyielding durability.
              </p>
              
              <div className="grid grid-cols-2 gap-8 border-t border-minimal-border pt-10">
                <div>
                  <h4 className="text-5xl font-light text-minimal-text mb-2">20<span className="text-minimal-accent">+</span></h4>
                  <p className="text-minimal-textLight font-medium uppercase tracking-widest text-xs">Years Experience</p>
                </div>
                <div>
                  <h4 className="text-5xl font-light text-minimal-text mb-2">500<span className="text-minimal-accent">+</span></h4>
                  <p className="text-minimal-textLight font-medium uppercase tracking-widest text-xs">Industrial Clients</p>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </section>
    </div>
  );
}
