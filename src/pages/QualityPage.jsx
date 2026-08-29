import React from 'react';
import PageBanner from '../components/PageBanner';
import { Shield, Settings, CheckCircle2, Award } from 'lucide-react';

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
    <div className="bg-white min-h-screen pt-16">
      <PageBanner title="Quality Standards" breadcrumb="Quality" />

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h3 className="text-3xl font-light text-minimal-text mb-6 tracking-tight">Zero-Leakage <span className="font-bold">Guarantee</span></h3>
            <p className="text-minimal-textLight text-lg leading-relaxed font-light">
              At D.M. Valve Product, quality control begins the moment raw materials enter our facility and continues through every stage of CNC machining, assembly, and final testing. Our ISO 9001:2015 certified processes ensure that no defective unit ever reaches our clients.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            <div>
              <h4 className="text-xl font-semibold text-minimal-text mb-8">Standard Testing Protocols</h4>
              <ul className="space-y-4">
                {tests.map((test, index) => (
                  <li key={index} className="flex items-center text-minimal-textLight font-light p-4 rounded-2xl bg-minimal-bg">
                    <CheckCircle2 className="text-minimal-accent mr-4 h-5 w-5" />
                    {test}
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="text-xl font-semibold text-minimal-text mb-8">Compliance & Standards</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="p-8 rounded-3xl border border-minimal-border hover:border-minimal-accent hover:shadow-lg transition-all duration-300">
                  <Shield className="h-8 w-8 text-minimal-textLight mb-4" />
                  <h4 className="text-minimal-text font-bold mb-2">API 598</h4>
                  <p className="text-minimal-textLight text-sm font-light">Valve Inspection and Testing standard strictly followed.</p>
                </div>
                <div className="p-8 rounded-3xl border border-minimal-border hover:border-minimal-accent hover:shadow-lg transition-all duration-300">
                  <Settings className="h-8 w-8 text-minimal-textLight mb-4" />
                  <h4 className="text-minimal-text font-bold mb-2">ASME B16.34</h4>
                  <p className="text-minimal-textLight text-sm font-light">Valves Flanged, Threaded, and Welding End compliance.</p>
                </div>
                <div className="p-8 rounded-3xl border border-minimal-border hover:border-minimal-accent hover:shadow-lg transition-all duration-300">
                  <Award className="h-8 w-8 text-minimal-textLight mb-4" />
                  <h4 className="text-minimal-text font-bold mb-2">ISO 9001:2015</h4>
                  <p className="text-minimal-textLight text-sm font-light">Internationally recognized Quality Management System.</p>
                </div>
                <div className="p-8 rounded-3xl border border-minimal-border hover:border-minimal-accent hover:shadow-lg transition-all duration-300">
                  <Shield className="h-8 w-8 text-minimal-textLight mb-4" />
                  <h4 className="text-minimal-text font-bold mb-2">NACE MR0175</h4>
                  <p className="text-minimal-textLight text-sm font-light">Materials for use in H2S-containing environments.</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
