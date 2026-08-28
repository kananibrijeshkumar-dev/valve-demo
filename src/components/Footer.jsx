import React from 'react';
import { Link } from 'react-router-dom';
import { Settings, MapPin, Phone, Mail } from 'lucide-react';

export default function Footer({ onOpenQuote }) {
  return (
    <footer className="bg-industrial-950 pt-24 pb-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Massive Typography Banner */}
        <div className="mb-20 text-center md:text-left flex flex-col md:flex-row justify-between items-end border-b border-gray-800 pb-12">
          <div>
            <h2 className="text-5xl md:text-7xl font-extrabold text-white tracking-tighter mb-4">
              PRECISION <span className="text-industrial-400 font-light">VALVES.</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-xl">
              Engineered in Gujarat. Delivered worldwide. Zero-leakage performance guaranteed.
            </p>
          </div>
          <button 
            onClick={() => onOpenQuote("Footer Direct Quote")}
            className="mt-8 md:mt-0 bg-transparent border border-industrial-400 text-industrial-400 px-8 py-4 rounded-full font-bold hover:bg-industrial-400 hover:text-industrial-950 transition-all duration-300"
          >
            Request Specs
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <Settings className="h-8 w-8 text-industrial-400" />
              <span className="font-bold text-2xl text-white">D.M. VALVE</span>
            </div>
            <p className="text-gray-400 mb-6 text-sm leading-relaxed">
              Leading manufacturer and exporter of premium quality industrial valves in India since 2002.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-bold text-white mb-6 uppercase tracking-widest">Company</h4>
            <ul className="space-y-4">
              <li><Link to="/about" className="text-gray-400 hover:text-industrial-400 transition-colors text-sm">About Us</Link></li>
              <li><Link to="/quality" className="text-gray-400 hover:text-industrial-400 transition-colors text-sm">Quality Standards</Link></li>
              <li><Link to="/products" className="text-gray-400 hover:text-industrial-400 transition-colors text-sm">Full Catalog</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-industrial-400 transition-colors text-sm">Contact Us</Link></li>
            </ul>
          </div>

          {/* Full Address */}
          <div className="md:col-span-2">
            <h4 className="text-sm font-bold text-white mb-6 uppercase tracking-widest">Corporate Office & Works</h4>
            <ul className="space-y-5">
              <li className="flex items-start">
                <MapPin className="h-6 w-6 text-industrial-400 mr-4 flex-shrink-0 mt-1" />
                <span className="text-gray-300 leading-relaxed text-lg font-light">
                  <strong>D.M. Valve Product</strong><br/>
                  5/9/55, Lilanagar, Near Khodiyar Nagar,<br/>
                  Nikol Road, Bapunagar,<br/>
                  Ahmedabad - 380024, Gujarat, India
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-industrial-400 mr-4 flex-shrink-0" />
                <span className="text-gray-300 text-lg">+91 98765 43210</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-industrial-400 mr-4 flex-shrink-0" />
                <span className="text-gray-300 text-lg">sales@dmvalveproduct.com</span>
              </li>
            </ul>
          </div>

        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 text-xs tracking-widest uppercase mb-4 md:mb-0">
            © {new Date().getFullYear()} D.M. VALVE PRODUCT. ALL RIGHTS RESERVED. 
          </p>
          <p className="text-gray-600 text-xs tracking-widest uppercase">
            Designed by Briz Patel
          </p>
        </div>
      </div>
    </footer>
  );
}
