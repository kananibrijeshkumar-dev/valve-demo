import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Settings } from 'lucide-react';

export default function Header({ onOpenQuote }) {
  const location = useLocation();

  const getLinkClass = (path) => {
    return location.pathname === path 
      ? "text-industrial-600 font-bold"
      : "text-gray-600 hover:text-industrial-600 font-medium transition-colors";
  };

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <Link to="/" className="flex items-center space-x-2">
            <Settings className="h-8 w-8 text-industrial-600" />
            <span className="font-bold text-2xl tracking-tight text-gray-900">
              D.M. Valve <span className="text-industrial-600">Product</span>
            </span>
          </Link>
          <div className="hidden md:flex space-x-8">
            <Link to="/" className={getLinkClass('/')}>Home</Link>
            <Link to="/products" className={getLinkClass('/products')}>Products</Link>
            <Link to="/contact" className={getLinkClass('/contact')}>Contact Us</Link>
          </div>
          <button 
            onClick={() => onOpenQuote("General Inquiry")}
            className="bg-industrial-600 text-white px-6 py-2.5 rounded-md font-semibold hover:bg-industrial-700 transition-colors shadow-md"
          >
            Get a Quote
          </button>
        </div>
      </div>
    </nav>
  );
}
