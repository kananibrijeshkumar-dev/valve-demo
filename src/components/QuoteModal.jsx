import React from 'react';
import { X, Settings } from 'lucide-react';

export default function QuoteModal({ isOpen, onClose, productName }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-classic-navy/80" 
        onClick={onClose}
      ></div>
      
      {/* Modal Container */}
      <div className="relative bg-white border-t-4 border-classic-red shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        
        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-classic-borderGrey p-6 flex justify-between items-center z-10">
          <h3 className="text-2xl font-bold text-classic-navy">Request a Quote</h3>
          <button onClick={onClose} className="text-classic-textGrey hover:text-classic-red transition-colors">
            <X className="h-6 w-6" />
          </button>
        </div>
        
        {/* Body */}
        <div className="p-6 sm:p-8">
          <form className="space-y-6">
            {productName && (
              <div className="bg-classic-bgGrey p-4 border-l-4 border-classic-red text-classic-navy font-bold flex items-center">
                <Settings className="h-5 w-5 mr-3 text-classic-red flex-shrink-0" /> 
                <span>Quoting for: <span className="text-classic-red ml-1">{productName}</span></span>
              </div>
            )}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <input type="text" className="w-full bg-white text-classic-navy px-4 py-3 border border-classic-borderGrey focus:border-classic-red outline-none transition-colors" placeholder="Company Name *" />
              </div>
              <div>
                <input type="text" className="w-full bg-white text-classic-navy px-4 py-3 border border-classic-borderGrey focus:border-classic-red outline-none transition-colors" placeholder="Contact Person *" />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <input type="email" className="w-full bg-white text-classic-navy px-4 py-3 border border-classic-borderGrey focus:border-classic-red outline-none transition-colors" placeholder="Email Address *" />
              </div>
              <div>
                <input type="tel" className="w-full bg-white text-classic-navy px-4 py-3 border border-classic-borderGrey focus:border-classic-red outline-none transition-colors" placeholder="Phone Number *" />
              </div>
            </div>
            <div>
              <textarea rows={4} className="w-full bg-white text-classic-navy px-4 py-3 border border-classic-borderGrey focus:border-classic-red outline-none resize-none transition-colors" placeholder="Quantity & Specifications..."></textarea>
            </div>
            <button type="button" onClick={onClose} className="w-full mt-4 bg-classic-red text-white font-bold py-4 hover:bg-classic-navy transition-all duration-300 uppercase tracking-widest text-sm">
              Submit Request
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
