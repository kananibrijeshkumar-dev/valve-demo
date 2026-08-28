import React from 'react';
import { X, Settings } from 'lucide-react';

export default function QuoteModal({ isOpen, onClose, productName }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-industrial-950/80 backdrop-blur-md" 
        onClick={onClose}
      ></div>
      
      {/* Modal Container */}
      <div className="relative bg-industrial-900 border border-gray-800 rounded-2xl shadow-[0_0_50px_rgba(0,0,0,0.8)] w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        
        {/* Header */}
        <div className="sticky top-0 bg-industrial-950/90 backdrop-blur-xl border-b border-gray-800 p-6 flex justify-between items-center z-10">
          <h3 className="text-2xl font-bold text-white tracking-tight">Request <span className="text-industrial-400 font-light">Specs</span></h3>
          <button onClick={onClose} className="text-gray-500 hover:text-industrial-400 transition-colors">
            <X className="h-6 w-6" />
          </button>
        </div>
        
        {/* Body */}
        <div className="p-6 sm:p-8">
          <form className="space-y-6">
            {productName && (
              <div className="bg-industrial-950 p-4 rounded-xl border border-industrial-400/30 text-industrial-400 font-medium flex items-center shadow-[inset_0_0_15px_rgba(45,212,191,0.05)]">
                <Settings className="h-5 w-5 mr-3 flex-shrink-0 animate-[spin_4s_linear_infinite]" /> 
                <span>Quoting for: <strong className="text-white ml-1">{productName}</strong></span>
              </div>
            )}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Company Name</label>
                <input type="text" className="w-full bg-industrial-950 text-white px-4 py-4 border border-gray-800 rounded-lg focus:ring-1 focus:ring-industrial-400 focus:border-industrial-400 outline-none transition-all" placeholder="Your Company Ltd" />
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Contact Person</label>
                <input type="text" className="w-full bg-industrial-950 text-white px-4 py-4 border border-gray-800 rounded-lg focus:ring-1 focus:ring-industrial-400 focus:border-industrial-400 outline-none transition-all" placeholder="John Doe" />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Email Address</label>
                <input type="email" className="w-full bg-industrial-950 text-white px-4 py-4 border border-gray-800 rounded-lg focus:ring-1 focus:ring-industrial-400 focus:border-industrial-400 outline-none transition-all" placeholder="john@company.com" />
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Phone Number</label>
                <input type="tel" className="w-full bg-industrial-950 text-white px-4 py-4 border border-gray-800 rounded-lg focus:ring-1 focus:ring-industrial-400 focus:border-industrial-400 outline-none transition-all" placeholder="+91 98765 43210" />
              </div>
            </div>
            <div>
              <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Quantity & Specifications</label>
              <textarea rows={4} className="w-full bg-industrial-950 text-white px-4 py-4 border border-gray-800 rounded-lg focus:ring-1 focus:ring-industrial-400 focus:border-industrial-400 outline-none resize-none transition-all" placeholder="Please specify sizes, pressure ratings, and quantities..."></textarea>
            </div>
            <button type="button" onClick={onClose} className="w-full mt-4 bg-industrial-400 text-industrial-950 font-bold py-5 rounded-lg hover:bg-industrial-300 hover:shadow-[0_0_20px_rgba(45,212,191,0.4)] transition-all duration-300 text-lg uppercase tracking-widest">
              Submit Quote Request
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
