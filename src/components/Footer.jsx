import React from 'react';
import { Link } from 'react-router-dom';
import { Settings, MapPin, Phone, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-minimal-footerBg pt-16 pb-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          
          {/* Brand & About */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <Settings className="h-8 w-8 text-white" />
              <div className="flex flex-col">
                <span className="font-extrabold text-2xl tracking-tight text-white leading-none">
                  D.M. VALVE
                </span>
              </div>
            </div>
            <p className="text-gray-400 mb-6 text-sm leading-relaxed font-light">
              Leading manufacturer and exporter of premium quality industrial valves in India. Commited to precision and zero-leakage performance since 2002.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-minimal-footerBorder text-white h-10 w-10 flex items-center justify-center rounded-full hover:bg-white hover:text-minimal-footerBg transition-all"><i className="fa-brands fa-whatsapp text-lg"></i></a>
              <a href="#" className="bg-minimal-footerBorder text-white h-10 w-10 flex items-center justify-center rounded-full hover:bg-white hover:text-minimal-footerBg transition-all"><i className="fa-brands fa-facebook text-lg"></i></a>
              <a href="#" className="bg-minimal-footerBorder text-white h-10 w-10 flex items-center justify-center rounded-full hover:bg-white hover:text-minimal-footerBg transition-all"><i className="fa-brands fa-youtube text-lg"></i></a>
              <a href="#" className="bg-minimal-footerBorder text-white h-10 w-10 flex items-center justify-center rounded-full hover:bg-white hover:text-minimal-footerBg transition-all"><i className="fa-brands fa-instagram text-lg"></i></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-6 uppercase tracking-widest">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors text-sm font-light">About Us</Link></li>
              <li><Link to="/products" className="text-gray-400 hover:text-white transition-colors text-sm font-light">Photo Gallery</Link></li>
              <li><Link to="/quality" className="text-gray-400 hover:text-white transition-colors text-sm font-light">Quality Standards</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-white transition-colors text-sm font-light">Contact Us</Link></li>
            </ul>
          </div>

          {/* Address */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-6 uppercase tracking-widest">Contact Details</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-gray-400 mr-3 flex-shrink-0 mt-0.5" />
                <span className="text-gray-400 text-sm leading-relaxed font-light">
                  88, Sattadhar Nagar, Khodiar Nagar,<br/>
                  Ahmedabad, Gujarat 382350
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="h-4 w-4 text-gray-400 mr-3 flex-shrink-0" />
                <span className="text-gray-400 text-sm font-light">+91 9624481284</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-4 w-4 text-gray-400 mr-3 flex-shrink-0" />
                <span className="text-gray-400 text-sm font-light">sales@dmvalveproduct.com</span>
              </li>
            </ul>
          </div>

          {/* Our Timings */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-6 uppercase tracking-widest">Hours of Operation</h4>
            <div className="bg-minimal-footerBorder/50 rounded-xl p-5">
              <ul className="space-y-3">
                <li className="flex justify-between text-sm text-gray-300 font-light">
                  <span>Mon - Sat</span>
                  <span className="font-medium text-white">10:00 am - 7:00 pm</span>
                </li>
                <li className="flex justify-between text-sm text-gray-300 font-light border-t border-gray-700 pt-3">
                  <span>Sunday</span>
                  <span className="font-medium text-gray-500">Closed</span>
                </li>
              </ul>
            </div>
          </div>

        </div>
      </div>
      
      {/* Bottom Bar */}
      <div className="bg-[#0b1120] py-6 mt-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-xs font-light">
            <p className="text-gray-500 mb-2 md:mb-0 uppercase tracking-widest">
              © {new Date().getFullYear()} D.M. VALVE PRODUCT. All rights reserved. 
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
