import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, Mail, Settings } from 'lucide-react';

export default function Header({ onOpenQuote }) {
  const location = useLocation();

  const getLinkClass = (path) => {
    return location.pathname === path 
      ? "text-classic-red font-bold"
      : "text-classic-navy font-bold hover:text-classic-red transition-colors";
  };

  return (
    <header className="w-full shadow-md z-50 bg-white sticky top-0">
      {/* Top Bar */}
      <div className="bg-classic-navyLight text-white py-2 hidden md:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center text-sm">
          <div className="flex items-center space-x-6">
            <div className="flex items-center">
              <Phone className="h-4 w-4 mr-2 text-classic-red" />
              <span><strong>Mobile:</strong> +91 98765 43210</span>
            </div>
          </div>
          <div className="flex items-center">
            <Mail className="h-4 w-4 mr-2 text-classic-red" />
            <span><strong>Email:</strong> <a href="mailto:sales@dmvalveproduct.com" className="hover:text-classic-red transition-colors">sales@dmvalveproduct.com</a></span>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <Settings className="h-10 w-10 text-classic-red" />
            <div className="flex flex-col">
              <span className="font-extrabold text-2xl tracking-tight text-classic-navy leading-none">
                D.M. VALVE
              </span>
              <span className="text-xs font-bold text-classic-textGrey tracking-widest">PRODUCT</span>
            </div>
          </Link>

          {/* Nav Links */}
          <div className="hidden md:flex space-x-8 items-center">
            <Link to="/" className={getLinkClass('/')}>HOME</Link>
            <Link to="/about" className={getLinkClass('/about')}>ABOUT US</Link>
            <Link to="/products" className={getLinkClass('/products')}>PHOTO GALLERY</Link>
            <Link to="/quality" className={getLinkClass('/quality')}>QUALITY</Link>
            <Link to="/contact" className={getLinkClass('/contact')}>CONTACT US</Link>
            
            <button 
              onClick={() => onOpenQuote("General Inquiry")}
              className="bg-classic-red text-white px-6 py-2.5 font-bold hover:bg-classic-navy transition-colors text-sm uppercase tracking-wider"
            >
              Get a Quote
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
