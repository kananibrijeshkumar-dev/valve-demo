import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Page Header */}
      <div className="bg-industrial-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold text-white sm:text-5xl">Contact Us</h1>
          <p className="mt-4 text-xl text-industrial-200 max-w-2xl">
            Skip the B2B platform fees. Contact D.M. Valve Product directly for wholesale pricing, custom fabrication, and bulk orders.
          </p>
        </div>
      </div>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl overflow-hidden shadow-2xl flex flex-col lg:flex-row border border-gray-100">
            
            {/* Contact Info */}
            <div className="lg:w-2/5 p-12 lg:p-16 bg-industrial-800 text-white">
              <h2 className="text-3xl font-bold mb-8">Get in Touch</h2>
              <p className="text-industrial-200 mb-10 text-lg">
                Our engineering team is ready to provide precise quotes and delivery timelines for your industrial requirements.
              </p>
              
              <div className="space-y-8">
                <div className="flex items-center">
                  <div className="bg-industrial-700 p-4 rounded-xl mr-5">
                    <Phone className="h-7 w-7 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-industrial-200 mb-1">Sales & Inquiries</p>
                    <p className="font-semibold text-lg">+91 98765 43210</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="bg-industrial-700 p-4 rounded-xl mr-5">
                    <Mail className="h-7 w-7 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-industrial-200 mb-1">Email Address</p>
                    <p className="font-semibold text-lg">sales@dmvalveproduct.com</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-industrial-700 p-4 rounded-xl mr-5">
                    <MapPin className="h-7 w-7 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-industrial-200 mb-1">Manufacturing Facility</p>
                    <p className="font-semibold text-lg leading-snug">
                      Plot No. 45/A, Phase 2,<br/>
                      GIDC Estate, Vatva,<br/>
                      Ahmedabad - 380052,<br/>
                      Gujarat, India
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Direct Form */}
            <div className="lg:w-3/5 p-12 lg:p-16">
              <h3 className="text-2xl font-bold text-gray-900 mb-8">Send a Direct Message</h3>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Company Name</label>
                    <input type="text" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-industrial-500 focus:border-industrial-500 outline-none" placeholder="Your Company Ltd" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Contact Person</label>
                    <input type="text" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-industrial-500 focus:border-industrial-500 outline-none" placeholder="John Doe" />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                    <input type="email" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-industrial-500 focus:border-industrial-500 outline-none" placeholder="john@company.com" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                    <input type="tel" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-industrial-500 focus:border-industrial-500 outline-none" placeholder="+91 98765 43210" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Message or Requirements</label>
                  <textarea rows={5} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-industrial-500 focus:border-industrial-500 outline-none resize-none" placeholder="How can we help you?"></textarea>
                </div>
                <button type="button" className="w-full bg-industrial-600 text-white font-bold py-4 rounded-lg hover:bg-industrial-700 transition-colors text-lg shadow-lg">
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
