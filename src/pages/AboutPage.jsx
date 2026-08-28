import React from 'react';
import { ShieldCheck, Target, Award } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="bg-industrial-900 min-h-screen pt-20">
      {/* Page Header */}
      <div className="bg-industrial-950 py-24 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-extrabold text-white tracking-tighter sm:text-6xl mb-6">
            OUR <span className="text-industrial-400 font-light">LEGACY</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto font-light leading-relaxed">
            Since 2002, D.M. Valve Product has been at the forefront of industrial fluid control, engineering uncompromising solutions for the world's most demanding environments.
          </p>
        </div>
      </div>

      {/* Content Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Engineered in Ahmedabad. Trusted Globally.</h2>
              <p className="text-gray-400 text-lg mb-6 leading-relaxed">
                Located in the industrial hub of Vatva and Bapunagar, Gujarat, our manufacturing facility is equipped with state-of-the-art CNC machinery and rigorous testing environments. 
              </p>
              <p className="text-gray-400 text-lg leading-relaxed mb-8">
                We specialize in manufacturing heavy-duty TC End Ball Valves, SS Three Way Ball Valves, and Flush Bottom Tank Valves. Our commitment is simple: zero-leakage, absolute precision, and unyielding durability.
              </p>
              <div className="grid grid-cols-2 gap-8 border-t border-gray-800 pt-8">
                <div>
                  <h4 className="text-4xl font-bold text-industrial-400 mb-2">20+</h4>
                  <p className="text-gray-500 uppercase tracking-widest text-sm">Years Experience</p>
                </div>
                <div>
                  <h4 className="text-4xl font-bold text-industrial-400 mb-2">500+</h4>
                  <p className="text-gray-500 uppercase tracking-widest text-sm">Industrial Clients</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-industrial-400 blur-3xl opacity-10 rounded-full"></div>
              <img 
                src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80" 
                alt="Engineering" 
                className="rounded-2xl border border-gray-800 shadow-2xl relative z-10 opacity-90"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-industrial-950 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <div className="p-8 border border-gray-800 rounded-2xl bg-industrial-900/50 hover:border-industrial-400 transition-colors duration-300">
              <Target className="h-12 w-12 text-industrial-400 mx-auto mb-6" />
              <h3 className="text-xl font-bold text-white mb-4">Precision First</h3>
              <p className="text-gray-400">Micro-tolerance engineering ensures perfect fit and function in high-pressure systems.</p>
            </div>
            <div className="p-8 border border-gray-800 rounded-2xl bg-industrial-900/50 hover:border-industrial-400 transition-colors duration-300">
              <ShieldCheck className="h-12 w-12 text-industrial-400 mx-auto mb-6" />
              <h3 className="text-xl font-bold text-white mb-4">Absolute Safety</h3>
              <p className="text-gray-400">Every valve undergoes intense hydrostatic testing to guarantee zero-leakage performance.</p>
            </div>
            <div className="p-8 border border-gray-800 rounded-2xl bg-industrial-900/50 hover:border-industrial-400 transition-colors duration-300">
              <Award className="h-12 w-12 text-industrial-400 mx-auto mb-6" />
              <h3 className="text-xl font-bold text-white mb-4">ISO Certified</h3>
              <p className="text-gray-400">Manufacturing processes adhering strictly to international quality standards.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
