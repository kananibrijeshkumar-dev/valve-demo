import React from 'react';
import PageBanner from '../components/PageBanner';

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
    <div className="bg-white min-h-screen pb-24">
      <PageBanner title="Quality Standards" breadcrumb="Quality Standards" />

      <section className="pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16">
            <div className="lg:w-1/2">
              <h3 className="text-2xl font-bold text-classic-navy mb-6"><strong>Zero-Leakage Guarantee</strong></h3>
              <div className="w-16 h-1 bg-classic-red mb-6"></div>
              
              <p className="text-classic-textGrey text-lg mb-8 leading-relaxed">
                At D.M. Valve Product, quality control begins the moment raw materials enter our facility and continues through every stage of CNC machining, assembly, and final testing. Our ISO 9001:2015 certified processes ensure that no defective unit ever reaches our clients.
              </p>
              
              <h4 className="text-xl font-bold text-classic-navy mb-4">Standard Testing Protocols:</h4>
              <ul className="space-y-4">
                {tests.map((test, index) => (
                  <li key={index} className="flex items-center text-classic-textGrey">
                    <i className="fa fa-check text-classic-red mr-3"></i>
                    {test}
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="lg:w-1/2">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="bg-classic-bgGrey p-8 border border-classic-borderGrey hover:border-classic-red transition-colors">
                  <h4 className="text-classic-red font-bold mb-2 text-xl">API 598</h4>
                  <p className="text-classic-textGrey text-sm">Valve Inspection and Testing standard strictly followed for all shipments.</p>
                </div>
                <div className="bg-classic-bgGrey p-8 border border-classic-borderGrey hover:border-classic-red transition-colors">
                  <h4 className="text-classic-red font-bold mb-2 text-xl">ASME B16.34</h4>
                  <p className="text-classic-textGrey text-sm">Valves Flanged, Threaded, and Welding End standards compliance.</p>
                </div>
                <div className="bg-classic-bgGrey p-8 border border-classic-borderGrey hover:border-classic-red transition-colors">
                  <h4 className="text-classic-red font-bold mb-2 text-xl">ISO 9001:2015</h4>
                  <p className="text-classic-textGrey text-sm">Internationally recognized Quality Management System.</p>
                </div>
                <div className="bg-classic-bgGrey p-8 border border-classic-borderGrey hover:border-classic-red transition-colors">
                  <h4 className="text-classic-red font-bold mb-2 text-xl">NACE MR0175</h4>
                  <p className="text-classic-textGrey text-sm">Materials for use in H2S-containing environments in oil and gas.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
