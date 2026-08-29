import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Settings, Phone } from 'lucide-react';

export default function Header({ onOpenQuote }) {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const getLinkClass = (path) => {
    return location.pathname === path 
      ? "text-minimal-text font-semibold border-b-2 border-minimal-text pb-1"
      : "text-minimal-textLight font-medium hover:text-minimal-text transition-colors";
  };

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-2' : 'bg-white py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo & Contact Combined */}
          <div className="flex items-center space-x-10">
            <Link to="/" className="flex items-center space-x-3">
              <Settings className="h-8 w-8 text-minimal-text" />
              <div className="flex flex-col">
                <span className="font-bold text-xl tracking-tight text-minimal-text leading-none">
                  D.M. VALVE
                </span>
                <span className="text-[0.65rem] font-medium text-minimal-textLight tracking-[0.2em] mt-1 uppercase">
                  Product
                </span>
              </div>
            </Link>
            
            <div className="hidden lg:flex items-center text-sm text-minimal-textLight space-x-6 border-l border-minimal-border pl-6">
              <div className="flex items-center hover:text-minimal-text transition-colors">
                <Phone className="h-4 w-4 mr-2" />
                <span>+91 9624481284</span>
              </div>
              <div className="flex items-center space-x-4 text-base">
                <a href="#" className="hover:text-minimal-text transition-colors"><i className="fa-brands fa-whatsapp"></i></a>
                <a href="#" className="hover:text-minimal-text transition-colors"><i className="fa-brands fa-facebook"></i></a>
                <a href="#" className="hover:text-minimal-text transition-colors"><i className="fa-brands fa-youtube"></i></a>
                <a href="#" className="hover:text-minimal-text transition-colors"><i className="fa-brands fa-instagram"></i></a>
              </div>
            </div>
          </div>

          {/* Nav Links & CTA */}
          <div className="hidden md:flex items-center space-x-8">
            <nav className="flex space-x-8 text-sm tracking-wide">
              <Link to="/" className={getLinkClass('/')}>Home</Link>
              <Link to="/about" className={getLinkClass('/about')}>About</Link>
              <Link to="/products" className={getLinkClass('/products')}>Gallery</Link>
              <Link to="/quality" className={getLinkClass('/quality')}>Quality</Link>
              <Link to="/contact" className={getLinkClass('/contact')}>Contact</Link>
            </nav>
            
            <button 
              onClick={() => onOpenQuote("General Inquiry")}
              className="bg-minimal-text text-white px-6 py-2.5 rounded-full font-medium hover:bg-minimal-accent transition-all duration-300 text-sm shadow-sm"
            >
              Request Quote
            </button>
          </div>

        </div>
      </div>
    </header>
  );
}
