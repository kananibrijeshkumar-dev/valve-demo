import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Settings, Phone, Menu, X, Globe } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function Header({ onOpenQuote }) {
  const location = useLocation();
  const { language, setLanguage, t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const getLinkClass = (path) => {
    return location.pathname === path 
      ? "text-minimal-text font-bold border-b-2 border-minimal-accent pb-1"
      : "text-minimal-text font-medium hover:text-minimal-accent transition-colors";
  };

  const getMobileLinkClass = (path) => {
    return location.pathname === path 
      ? "block px-4 py-3 text-lg font-bold text-minimal-accent bg-minimal-bg rounded-xl"
      : "block px-4 py-3 text-lg font-medium text-minimal-text hover:bg-minimal-bg rounded-xl transition-colors";
  };

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-2' : 'bg-white py-4 border-b border-minimal-border'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 z-50">
            <Settings className="h-8 w-8 text-minimal-accent" />
            <div className="flex flex-col">
              <span className="font-extrabold text-xl tracking-tight text-minimal-text leading-none">
                D.M. VALVE
              </span>
              <span className="text-[0.65rem] font-medium text-minimal-accent tracking-[0.2em] mt-1 uppercase">
                Product
              </span>
            </div>
          </Link>
            
          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center space-x-8">
            <nav className="flex space-x-8 text-[1.05rem] tracking-wide">
              <Link to="/" className={getLinkClass('/')}>{t('nav', 'home')}</Link>
              <Link to="/about" className={getLinkClass('/about')}>{t('nav', 'about')}</Link>
              <Link to="/products" className={getLinkClass('/products')}>{t('nav', 'gallery')}</Link>
              <Link to="/quality" className={getLinkClass('/quality')}>{t('nav', 'quality')}</Link>
              <Link to="/contact" className={getLinkClass('/contact')}>{t('nav', 'contact')}</Link>
            </nav>
            
            {/* Contact & Socials */}
            <div className="flex items-center space-x-6 border-l border-minimal-border pl-8">
              <a href="tel:+919624481284" className="flex items-center hover:text-minimal-accent transition-colors font-medium text-minimal-text">
                <Phone className="h-4 w-4 mr-2 text-minimal-accent" />
                <span>+91 9624481284</span>
              </a>
              <div className="flex items-center space-x-4 text-lg">
                <a href="https://wa.me/919624481284" target="_blank" rel="noopener noreferrer" className="text-green-500 hover:scale-110 transition-transform"><i className="fa-brands fa-whatsapp"></i></a>
                <a href="https://facebook.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:scale-110 transition-transform"><i className="fa-brands fa-facebook"></i></a>
                <a href="https://youtube.com/" target="_blank" rel="noopener noreferrer" className="text-red-600 hover:scale-110 transition-transform"><i className="fa-brands fa-youtube"></i></a>
                <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer" className="text-pink-600 hover:scale-110 transition-transform"><i className="fa-brands fa-instagram"></i></a>
              </div>
            </div>

            {/* Language Dropdown */}
            <div className="relative">
              <button 
                onClick={() => setLangDropdownOpen(!langDropdownOpen)}
                className="flex items-center space-x-1 text-sm font-bold text-minimal-text bg-minimal-bg px-3 py-1.5 rounded-full hover:bg-gray-200 transition-colors"
              >
                <Globe className="h-4 w-4" />
                <span>{language.toUpperCase()}</span>
              </button>
              
              {langDropdownOpen && (
                <div className="absolute right-0 mt-2 w-32 bg-white rounded-xl shadow-lg border border-minimal-border py-2 z-50">
                  <button onClick={() => { setLanguage('en'); setLangDropdownOpen(false); }} className={`w-full text-left px-4 py-2 text-sm ${language === 'en' ? 'font-bold bg-minimal-bg text-minimal-accent' : 'text-minimal-text hover:bg-gray-50'}`}>English</button>
                  <button onClick={() => { setLanguage('hi'); setLangDropdownOpen(false); }} className={`w-full text-left px-4 py-2 text-sm ${language === 'hi' ? 'font-bold bg-minimal-bg text-minimal-accent' : 'text-minimal-text hover:bg-gray-50'}`}>हिंदी</button>
                  <button onClick={() => { setLanguage('gu'); setLangDropdownOpen(false); }} className={`w-full text-left px-4 py-2 text-sm ${language === 'gu' ? 'font-bold bg-minimal-bg text-minimal-accent' : 'text-minimal-text hover:bg-gray-50'}`}>ગુજરાતી</button>
                </div>
              )}
            </div>
            
            <button 
              onClick={() => onOpenQuote("General Inquiry")}
              className="bg-minimal-text text-white px-6 py-2.5 rounded-full font-bold hover:bg-minimal-accent transition-all duration-300 shadow-md"
            >
              {t('header', 'request_quote')}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center z-50">
            <div className="relative mr-4">
              <button 
                onClick={() => setLangDropdownOpen(!langDropdownOpen)}
                className="flex items-center space-x-1 text-xs font-bold text-minimal-text bg-minimal-bg px-2 py-1 rounded-full"
              >
                <Globe className="h-4 w-4" />
                <span>{language.toUpperCase()}</span>
              </button>
              {langDropdownOpen && (
                <div className="absolute right-0 mt-2 w-24 bg-white rounded-lg shadow-lg border border-minimal-border py-1 z-50">
                  <button onClick={() => { setLanguage('en'); setLangDropdownOpen(false); }} className="w-full text-left px-3 py-1.5 text-xs font-medium hover:bg-gray-50">EN</button>
                  <button onClick={() => { setLanguage('hi'); setLangDropdownOpen(false); }} className="w-full text-left px-3 py-1.5 text-xs font-medium hover:bg-gray-50">HI</button>
                  <button onClick={() => { setLanguage('gu'); setLangDropdownOpen(false); }} className="w-full text-left px-3 py-1.5 text-xs font-medium hover:bg-gray-50">GU</button>
                </div>
              )}
            </div>
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-minimal-text p-2 hover:bg-minimal-bg rounded-full transition-colors"
            >
              {mobileMenuOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
            </button>
          </div>

        </div>
      </div>

      {/* Fullscreen Mobile Drawer */}
      <div className={`fixed inset-0 bg-white z-40 transform transition-transform duration-300 ease-in-out lg:hidden ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col h-full pt-24 pb-8 px-6 overflow-y-auto">
          <nav className="flex flex-col space-y-2 mb-10">
            <Link to="/" className={getMobileLinkClass('/')}>{t('nav', 'home')}</Link>
            <Link to="/about" className={getMobileLinkClass('/about')}>{t('nav', 'about')}</Link>
            <Link to="/products" className={getMobileLinkClass('/products')}>{t('nav', 'gallery')}</Link>
            <Link to="/quality" className={getMobileLinkClass('/quality')}>{t('nav', 'quality')}</Link>
            <Link to="/contact" className={getMobileLinkClass('/contact')}>{t('nav', 'contact')}</Link>
          </nav>

          <div className="mt-auto">
            <div className="bg-minimal-bg p-6 rounded-2xl mb-6">
              <p className="text-xs font-bold text-minimal-textLight uppercase tracking-widest mb-4">Direct Contact</p>
              <a href="tel:+919624481284" className="flex items-center text-xl font-bold text-minimal-text mb-6">
                <Phone className="h-5 w-5 mr-3 text-minimal-accent" />
                +91 9624481284
              </a>
              <div className="flex justify-between items-center px-2">
                <a href="https://wa.me/919624481284" className="text-green-500 text-3xl"><i className="fa-brands fa-whatsapp"></i></a>
                <a href="https://facebook.com/" className="text-blue-600 text-3xl"><i className="fa-brands fa-facebook"></i></a>
                <a href="https://youtube.com/" className="text-red-600 text-3xl"><i className="fa-brands fa-youtube"></i></a>
                <a href="https://instagram.com/" className="text-pink-600 text-3xl"><i className="fa-brands fa-instagram"></i></a>
              </div>
            </div>
            
            <button 
              onClick={() => { setMobileMenuOpen(false); onOpenQuote("General Inquiry"); }}
              className="w-full bg-minimal-text text-white py-4 rounded-xl font-bold text-lg hover:bg-minimal-accent transition-colors shadow-lg"
            >
              {t('header', 'request_quote')}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
