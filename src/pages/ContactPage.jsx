import React from 'react';
import PageBanner from '../components/PageBanner';
import { Phone, Mail, MapPin } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="bg-white min-h-screen pt-16">
      <PageBanner title="Contact Us" breadcrumb="Contact" />

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Direct Form */}
            <div>
              <div className="mb-10">
                <h3 className="text-3xl font-light text-minimal-text mb-4 tracking-tight">Send a <span className="font-bold">Message</span></h3>
                <p className="text-minimal-textLight font-light">Contact D.M. Valve Product directly for wholesale pricing, custom fabrication, and bulk orders.</p>
              </div>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <input type="text" className="w-full bg-minimal-bg text-minimal-text px-5 py-4 rounded-xl border border-transparent focus:border-minimal-border focus:bg-white outline-none transition-all duration-300 shadow-sm" placeholder="Your Name" />
                  </div>
                  <div>
                    <input type="email" className="w-full bg-minimal-bg text-minimal-text px-5 py-4 rounded-xl border border-transparent focus:border-minimal-border focus:bg-white outline-none transition-all duration-300 shadow-sm" placeholder="Your Email" />
                  </div>
                </div>
                <div>
                  <input type="tel" className="w-full bg-minimal-bg text-minimal-text px-5 py-4 rounded-xl border border-transparent focus:border-minimal-border focus:bg-white outline-none transition-all duration-300 shadow-sm" placeholder="Phone Number" />
                </div>
                <div>
                  <textarea rows={5} className="w-full bg-minimal-bg text-minimal-text px-5 py-4 rounded-xl border border-transparent focus:border-minimal-border focus:bg-white outline-none resize-none transition-all duration-300 shadow-sm" placeholder="How can we help you?"></textarea>
                </div>
                <button type="button" className="bg-minimal-text text-white font-medium px-8 py-4 rounded-full hover:bg-minimal-accent hover:shadow-lg transition-all duration-300 w-full md:w-auto">
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="lg:pl-12">
              <div className="mb-10">
                <h3 className="text-3xl font-light text-minimal-text mb-4 tracking-tight">Contact <span className="font-bold">Info</span></h3>
                <p className="text-minimal-textLight font-light">Our engineering team is ready to provide precise quotes and delivery timelines.</p>
              </div>
              
              <div className="space-y-8">
                <div className="flex items-start p-6 rounded-3xl bg-minimal-bg border border-transparent hover:border-minimal-border transition-colors">
                  <div className="bg-white p-3 rounded-xl shadow-sm mr-5">
                    <MapPin className="h-6 w-6 text-minimal-text" />
                  </div>
                  <div>
                    <h5 className="font-semibold text-minimal-text mb-1">Corporate Office & Works</h5>
                    <p className="text-minimal-textLight font-light leading-relaxed">
                      88, Sattadhar Nagar, Khodiar Nagar,<br/>
                      Ahmedabad, Gujarat 382350
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start p-6 rounded-3xl bg-minimal-bg border border-transparent hover:border-minimal-border transition-colors">
                  <div className="bg-white p-3 rounded-xl shadow-sm mr-5">
                    <Phone className="h-6 w-6 text-minimal-text" />
                  </div>
                  <div>
                    <h5 className="font-semibold text-minimal-text mb-1">Direct Line</h5>
                    <p className="text-minimal-textLight font-light">+91 9624481284</p>
                  </div>
                </div>
                
                <div className="flex items-start p-6 rounded-3xl bg-minimal-bg border border-transparent hover:border-minimal-border transition-colors">
                  <div className="bg-white p-3 rounded-xl shadow-sm mr-5">
                    <Mail className="h-6 w-6 text-minimal-text" />
                  </div>
                  <div>
                    <h5 className="font-semibold text-minimal-text mb-1">Email Address</h5>
                    <p className="text-minimal-textLight font-light">sales@dmvalveproduct.com</p>
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
