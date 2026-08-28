import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Settings } from 'lucide-react';

export default function Header({ onOpenQuote }) {
  const location = useLocation();

  const getLinkClass = (path) => {
    return location.pathname === path 
      ? "text-industrial-400 font-bold"
      : "text-gray-300 hover:text-industrial-400 font-medium transition-colors";
  };

  return (
    <nav className="fixed w-full z-50 bg-industrial-950/80 backdrop-blur-md border-b border-gray-800 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link to="/" className="flex items-center space-x-2 group">
            <Settings className="h-6 w-6 text-industrial-400 group-hover:rotate-90 transition-transform duration-500" />
            <span className="font-bold text-xl tracking-tight text-white">
              D.M. VALVE <span className="text-industrial-400 font-light">PRODUCT</span>
            </span>
          </Link>
          <div className="hidden md:flex space-x-8">
            <Link to="/" className={getLinkClass('/')}>Home</Link>
            <Link to="/about" className={getLinkClass('/about')}>About Us</Link>
            <Link to="/products" className={getLinkClass('/products')}>Products</Link>
            <Link to="/quality" className={getLinkClass('/quality')}>Quality</Link>
            <Link to="/contact" className={getLinkClass('/contact')}>Contact</Link>
          </div>
          <button 
            onClick={() => onOpenQuote("General Inquiry")}
            className="bg-industrial-400 text-industrial-950 px-5 py-2 rounded-full font-bold hover:bg-industrial-300 hover:shadow-[0_0_15px_rgba(45,212,191,0.5)] transition-all duration-300 text-sm"
          >
            Get a Quote
          </button>
        </div>
      </div>
    </nav>
  );
}
