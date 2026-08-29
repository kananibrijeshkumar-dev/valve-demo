import React from 'react';
import PageBanner from '../components/PageBanner';
import { Phone, Mail, MapPin } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="bg-white min-h-screen pb-24">
      <PageBanner title="Contact Us" breadcrumb="Contact Us" />

      <section className="pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Direct Form */}
            <div>
              <h3 className="text-2xl font-bold text-classic-navy mb-6"><strong>Send a Message</strong></h3>
              <div className="w-16 h-1 bg-classic-red mb-8"></div>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <input type="text" className="w-full bg-classic-bgGrey text-classic-navy px-4 py-3 border border-classic-borderGrey focus:border-classic-red outline-none transition-colors" placeholder="Your Name *" />
                  </div>
                  <div>
                    <input type="email" className="w-full bg-classic-bgGrey text-classic-navy px-4 py-3 border border-classic-borderGrey focus:border-classic-red outline-none transition-colors" placeholder="Your Email *" />
                  </div>
                </div>
                <div>
                  <input type="tel" className="w-full bg-classic-bgGrey text-classic-navy px-4 py-3 border border-classic-borderGrey focus:border-classic-red outline-none transition-colors" placeholder="Phone Number *" />
                </div>
                <div>
                  <textarea rows={5} className="w-full bg-classic-bgGrey text-classic-navy px-4 py-3 border border-classic-borderGrey focus:border-classic-red outline-none resize-none transition-colors" placeholder="Message..."></textarea>
                </div>
                <button type="button" className="bg-classic-red text-white font-bold px-8 py-3 hover:bg-classic-navy transition-colors uppercase tracking-widest text-sm">
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-2xl font-bold text-classic-navy mb-6"><strong>Contact Info</strong></h3>
              <div className="w-16 h-1 bg-classic-red mb-8"></div>
              
              <div className="bg-classic-navy p-10 text-white space-y-8">
                <div className="flex items-start">
                  <MapPin className="h-6 w-6 text-classic-red mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h5 className="font-bold text-lg mb-2">Location</h5>
                    <p className="text-gray-400 leading-relaxed">
                      88, Sattadhar Nagar, Khodiar Nagar,<br/>
                      Ahmedabad, Gujarat 382350
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Phone className="h-6 w-6 text-classic-red mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h5 className="font-bold text-lg mb-2">Phone</h5>
                    <p className="text-gray-400">+91 9624481284</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Mail className="h-6 w-6 text-classic-red mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h5 className="font-bold text-lg mb-2">Email</h5>
                    <p className="text-gray-400">sales@dmvalveproduct.com</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
