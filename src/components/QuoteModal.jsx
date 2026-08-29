import React from 'react';
import { X, Settings } from 'lucide-react';

export default function QuoteModal({ isOpen, onClose, productName }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-minimal-text/40 backdrop-blur-sm transition-opacity" 
        onClick={onClose}
      ></div>
      
      {/* Modal Container */}
      <div className="relative bg-white rounded-3xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto transform transition-all">
        
        {/* Header */}
        <div className="sticky top-0 bg-white/90 backdrop-blur-md border-b border-minimal-border p-6 sm:px-8 flex justify-between items-center z-10 rounded-t-3xl">
          <h3 className="text-2xl font-light text-minimal-text tracking-tight">Request <span className="font-bold">Specs</span></h3>
          <button onClick={onClose} className="text-minimal-textLight hover:text-minimal-text hover:bg-minimal-bg p-2 rounded-full transition-colors">
            <X className="h-5 w-5" />
          </button>
        </div>
        
        {/* Body */}
        <div className="p-6 sm:p-8">
          <form className="space-y-6">
            {productName && (
              <div className="bg-minimal-bg p-4 rounded-xl text-minimal-text font-medium flex items-center border border-minimal-border">
                <Settings className="h-5 w-5 mr-3 text-minimal-textLight flex-shrink-0 animate-[spin_4s_linear_infinite]" /> 
                <span className="font-light">Quoting for: <span className="font-bold ml-1">{productName}</span></span>
              </div>
            )}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-semibold text-minimal-textLight uppercase tracking-widest mb-2 ml-1">Company Name</label>
                <input type="text" className="w-full bg-minimal-bg text-minimal-text px-5 py-4 rounded-xl border border-transparent focus:border-minimal-border focus:bg-white outline-none transition-all shadow-sm" placeholder="Your Company Ltd" />
              </div>
              <div>
                <label className="block text-xs font-semibold text-minimal-textLight uppercase tracking-widest mb-2 ml-1">Contact Person</label>
                <input type="text" className="w-full bg-minimal-bg text-minimal-text px-5 py-4 rounded-xl border border-transparent focus:border-minimal-border focus:bg-white outline-none transition-all shadow-sm" placeholder="John Doe" />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-semibold text-minimal-textLight uppercase tracking-widest mb-2 ml-1">Email Address</label>
                <input type="email" className="w-full bg-minimal-bg text-minimal-text px-5 py-4 rounded-xl border border-transparent focus:border-minimal-border focus:bg-white outline-none transition-all shadow-sm" placeholder="john@company.com" />
              </div>
              <div>
                <label className="block text-xs font-semibold text-minimal-textLight uppercase tracking-widest mb-2 ml-1">Phone Number</label>
                <input type="tel" className="w-full bg-minimal-bg text-minimal-text px-5 py-4 rounded-xl border border-transparent focus:border-minimal-border focus:bg-white outline-none transition-all shadow-sm" placeholder="+91 98765 43210" />
              </div>
            </div>
            <div>
              <label className="block text-xs font-semibold text-minimal-textLight uppercase tracking-widest mb-2 ml-1">Quantity & Specifications</label>
              <textarea rows={4} className="w-full bg-minimal-bg text-minimal-text px-5 py-4 rounded-xl border border-transparent focus:border-minimal-border focus:bg-white outline-none resize-none transition-all shadow-sm" placeholder="Please specify sizes, pressure ratings..."></textarea>
            </div>
            <button type="button" onClick={onClose} className="w-full mt-4 bg-minimal-text text-white font-medium py-4 rounded-full hover:bg-minimal-accent transition-all duration-300 shadow-md">
              Submit Quote Request
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
