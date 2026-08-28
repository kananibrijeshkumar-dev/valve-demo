import React from 'react';
import { CheckCircle } from 'lucide-react';

export default function QualityPage() {
  const tests = [
    "Hydrostatic Shell Testing",
    "High-Pressure Seat Testing",
    "Pneumatic Air Under Water Testing",
    "Material Traceability (MTC)",
    "Dye Penetrant Testing (DPT)",
    "Ultrasonic Thickness Measurement"
  ];

  return (
    <div className="bg-industrial-900 min-h-screen pt-20">
      {/* Page Header */}
      <div className="bg-industrial-950 py-24 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-extrabold text-white tracking-tighter sm:text-6xl mb-6">
            QUALITY <span className="text-industrial-400 font-light">STANDARDS</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto font-light leading-relaxed">
            We don't just manufacture valves; we engineer peace of mind. Every product is subjected to the most rigorous testing protocols in the industry.
          </p>
        </div>
      </div>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16">
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold text-white mb-8">Zero-Leakage Guarantee</h2>
              <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                At D.M. Valve Product, quality control begins the moment raw materials enter our facility and continues through every stage of CNC machining, assembly, and final testing. Our ISO 9001:2015 certified processes ensure that no defective unit ever reaches our clients.
              </p>
              
              <h3 className="text-xl font-bold text-white mb-6">Standard Testing Protocols:</h3>
              <ul className="space-y-4">
                {tests.map((test, index) => (
                  <li key={index} className="flex items-center text-gray-300">
                    <CheckCircle className="h-6 w-6 text-industrial-400 mr-4 flex-shrink-0" />
                    {test}
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="lg:w-1/2">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="bg-industrial-950 p-8 rounded-2xl border border-gray-800">
                  <h4 className="text-industrial-400 font-bold mb-2">API 598</h4>
                  <p className="text-gray-400 text-sm">Valve Inspection and Testing standard strictly followed for all shipments.</p>
                </div>
                <div className="bg-industrial-950 p-8 rounded-2xl border border-gray-800">
                  <h4 className="text-industrial-400 font-bold mb-2">ASME B16.34</h4>
                  <p className="text-gray-400 text-sm">Valves Flanged, Threaded, and Welding End standards compliance.</p>
                </div>
                <div className="bg-industrial-950 p-8 rounded-2xl border border-gray-800">
                  <h4 className="text-industrial-400 font-bold mb-2">ISO 9001:2015</h4>
                  <p className="text-gray-400 text-sm">Internationally recognized Quality Management System.</p>
                </div>
                <div className="bg-industrial-950 p-8 rounded-2xl border border-gray-800">
                  <h4 className="text-industrial-400 font-bold mb-2">NACE MR0175</h4>
                  <p className="text-gray-400 text-sm">Materials for use in H2S-containing environments in oil and gas.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
