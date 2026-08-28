import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="bg-industrial-900 min-h-screen pt-20">
      {/* Page Header */}
      <div className="bg-industrial-950 py-24 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-extrabold text-white tracking-tighter sm:text-6xl mb-6">
            CONTACT <span className="text-industrial-400 font-light">US</span>
          </h1>
          <p className="mt-4 text-xl text-gray-400 max-w-2xl mx-auto font-light leading-relaxed">
            Skip the B2B platform fees. Contact D.M. Valve Product directly for wholesale pricing, custom fabrication, and bulk orders.
          </p>
        </div>
      </div>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-industrial-950 rounded-3xl overflow-hidden shadow-2xl flex flex-col lg:flex-row border border-gray-800">
            
            {/* Contact Info */}
            <div className="lg:w-2/5 p-12 lg:p-16 bg-industrial-900 border-r border-gray-800">
              <h2 className="text-3xl font-bold mb-8 text-white">Direct Line</h2>
              <p className="text-gray-400 mb-12 text-lg font-light leading-relaxed">
                Our engineering team is ready to provide precise quotes and delivery timelines for your industrial requirements.
              </p>
              
              <div className="space-y-10">
                <div className="flex items-center">
                  <div className="bg-industrial-950 border border-gray-800 p-4 rounded-xl mr-5">
                    <Phone className="h-6 w-6 text-industrial-400" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 uppercase tracking-widest mb-1">Sales & Inquiries</p>
                    <p className="font-semibold text-lg text-white">+91 98765 43210</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="bg-industrial-950 border border-gray-800 p-4 rounded-xl mr-5">
                    <Mail className="h-6 w-6 text-industrial-400" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 uppercase tracking-widest mb-1">Email Address</p>
                    <p className="font-semibold text-lg text-white">sales@dmvalveproduct.com</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-industrial-950 border border-gray-800 p-4 rounded-xl mr-5 mt-1">
                    <MapPin className="h-6 w-6 text-industrial-400" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 uppercase tracking-widest mb-1">Manufacturing Facility</p>
                    <p className="font-light text-lg text-gray-300 leading-relaxed">
                      5/9/55, Lilanagar,<br/>
                      Near Khodiyar Nagar, Nikol Road,<br/>
                      Bapunagar, Ahmedabad - 380024,<br/>
                      Gujarat, India
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Direct Form */}
            <div className="lg:w-3/5 p-12 lg:p-16">
              <h3 className="text-2xl font-bold text-white mb-8">Send a Direct Message</h3>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Company Name</label>
                    <input type="text" className="w-full bg-industrial-900 text-white px-4 py-4 border border-gray-800 rounded-lg focus:ring-1 focus:ring-industrial-400 focus:border-industrial-400 outline-none transition-all" placeholder="Your Company Ltd" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Contact Person</label>
                    <input type="text" className="w-full bg-industrial-900 text-white px-4 py-4 border border-gray-800 rounded-lg focus:ring-1 focus:ring-industrial-400 focus:border-industrial-400 outline-none transition-all" placeholder="John Doe" />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Email Address</label>
                    <input type="email" className="w-full bg-industrial-900 text-white px-4 py-4 border border-gray-800 rounded-lg focus:ring-1 focus:ring-industrial-400 focus:border-industrial-400 outline-none transition-all" placeholder="john@company.com" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Phone Number</label>
                    <input type="tel" className="w-full bg-industrial-900 text-white px-4 py-4 border border-gray-800 rounded-lg focus:ring-1 focus:ring-industrial-400 focus:border-industrial-400 outline-none transition-all" placeholder="+91 98765 43210" />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Message or Requirements</label>
                  <textarea rows={5} className="w-full bg-industrial-900 text-white px-4 py-4 border border-gray-800 rounded-lg focus:ring-1 focus:ring-industrial-400 focus:border-industrial-400 outline-none resize-none transition-all" placeholder="How can we help you?"></textarea>
                </div>
                <button type="button" className="w-full mt-4 bg-industrial-400 text-industrial-950 font-bold py-5 rounded-lg hover:bg-industrial-300 hover:shadow-[0_0_20px_rgba(45,212,191,0.4)] transition-all duration-300 text-lg uppercase tracking-widest">
                  Send Message
                </button>
              </form>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
