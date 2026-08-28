import React from 'react';
import { Link } from 'react-router-dom';
import { Settings, MapPin, Phone, Mail } from 'lucide-react';

export default function Footer({ onOpenQuote }) {
  return (
    <footer className="bg-gray-900 pt-16 pb-8 border-t-8 border-industrial-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <Settings className="h-8 w-8 text-industrial-500" />
              <span className="font-bold text-2xl text-white">D.M. Valve Product</span>
            </div>
            <p className="text-gray-400 mb-6">
              Leading manufacturer and exporter of premium quality industrial valves in India. Commited to precision, safety, and zero-leakage performance since 2002.
            </p>
            <button 
              onClick={() => onOpenQuote("Footer Contact")}
              className="bg-industrial-600 text-white px-6 py-2 rounded-md font-semibold hover:bg-industrial-500 transition-colors"
            >
              Send Message
            </button>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6 uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link to="/products" className="text-gray-400 hover:text-industrial-400 transition-colors">Full Product Catalog</Link></li>
              <li><Link to="/" className="text-gray-400 hover:text-industrial-400 transition-colors">Manufacturing Facility</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-industrial-400 transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Full Address */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6 uppercase tracking-wider">Corporate Office & Works</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-6 w-6 text-industrial-500 mr-3 flex-shrink-0 mt-1" />
                <span className="text-gray-400 leading-relaxed">
                  <strong>D.M. Valve Product</strong><br/>
                  Plot No. 45/A, Phase 2, GIDC Estate,<br/>
                  Vatva, Ahmedabad - 380052,<br/>
                  Gujarat, India
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-industrial-500 mr-3 flex-shrink-0" />
                <span className="text-gray-400">+91 98765 43210 (Sales)</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-industrial-500 mr-3 flex-shrink-0" />
                <span className="text-gray-400">sales@dmvalveproduct.com</span>
              </li>
            </ul>
          </div>

        </div>
        
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} D.M. Valve Product. All rights reserved. 
          </p>
          <p className="text-gray-600 text-sm">
            Designed by Briz Patel
          </p>
        </div>
      </div>
    </footer>
  );
}
