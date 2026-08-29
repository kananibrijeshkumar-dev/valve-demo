import React from 'react';
import { Link } from 'react-router-dom';
import { Settings, MapPin, Phone, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-classic-navy pt-16 pb-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          
          {/* Brand & About */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <Settings className="h-8 w-8 text-classic-red" />
              <div className="flex flex-col">
                <span className="font-extrabold text-2xl tracking-tight text-white leading-none">
                  D.M. VALVE
                </span>
              </div>
            </div>
            <p className="text-gray-400 mb-6 text-sm leading-relaxed">
              Leading manufacturer and exporter of premium quality industrial valves in India. Commited to precision and zero-leakage performance since 2002.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-classic-navyLight text-classic-red h-10 w-10 flex items-center justify-center rounded hover:bg-classic-red hover:text-white transition-colors"><i className="fa-brands fa-whatsapp text-xl"></i></a>
              <a href="#" className="bg-classic-navyLight text-classic-red h-10 w-10 flex items-center justify-center rounded hover:bg-classic-red hover:text-white transition-colors"><i className="fa-brands fa-facebook text-xl"></i></a>
              <a href="#" className="bg-classic-navyLight text-classic-red h-10 w-10 flex items-center justify-center rounded hover:bg-classic-red hover:text-white transition-colors"><i className="fa-brands fa-youtube text-xl"></i></a>
              <a href="#" className="bg-classic-navyLight text-classic-red h-10 w-10 flex items-center justify-center rounded hover:bg-classic-red hover:text-white transition-colors"><i className="fa-brands fa-instagram text-xl"></i></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6 uppercase">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-gray-400 hover:text-classic-red transition-colors text-sm"><i className="fa fa-angle-right mr-2"></i>About Us</Link></li>
              <li><Link to="/products" className="text-gray-400 hover:text-classic-red transition-colors text-sm"><i className="fa fa-angle-right mr-2"></i>Photo Gallery</Link></li>
              <li><Link to="/quality" className="text-gray-400 hover:text-classic-red transition-colors text-sm"><i className="fa fa-angle-right mr-2"></i>Quality Standards</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-classic-red transition-colors text-sm"><i className="fa fa-angle-right mr-2"></i>Contact Us</Link></li>
            </ul>
          </div>

          {/* Address */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6 uppercase">Contact Details</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-classic-red mr-3 flex-shrink-0 mt-1" />
                <span className="text-gray-400 text-sm leading-relaxed">
                  88, Sattadhar Nagar, Khodiar Nagar,<br/>
                  Ahmedabad, Gujarat 382350
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="h-4 w-4 text-classic-red mr-3 flex-shrink-0" />
                <span className="text-gray-400 text-sm">+91 9624481284</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-4 w-4 text-classic-red mr-3 flex-shrink-0" />
                <span className="text-gray-400 text-sm">sales@dmvalveproduct.com</span>
              </li>
            </ul>
          </div>

          {/* Our Timings */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6 uppercase">Our Timings</h4>
            <div className="bg-classic-navyLight p-5 border-l-4 border-classic-red">
              <ul className="space-y-3">
                <li className="flex justify-between text-sm text-gray-300">
                  <span>Mon to Sat</span>
                  <span className="font-bold text-white">10:00 am to 7:00 pm</span>
                </li>
                <li className="flex justify-between text-sm text-gray-300 border-t border-gray-600 pt-3">
                  <span>Sunday</span>
                  <span className="font-bold text-classic-red">Closed</span>
                </li>
              </ul>
            </div>
          </div>

        </div>
      </div>
      
      {/* Bottom Bar */}
      <div className="bg-classic-navyLight py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm">
            <p className="text-gray-400 mb-2 md:mb-0">
              Copyright © {new Date().getFullYear()} <span className="text-classic-red">D.M. VALVE PRODUCT</span>. All rights reserved. 
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
