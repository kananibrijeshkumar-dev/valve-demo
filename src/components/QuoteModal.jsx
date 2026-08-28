import React from 'react';
import { X, Settings } from 'lucide-react';

export default function QuoteModal({ isOpen, onClose, productName }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
      <div className="absolute inset-0 bg-gray-900/70 backdrop-blur-sm" onClick={onClose}></div>
      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white border-b border-gray-100 p-6 flex justify-between items-center z-10">
          <h3 className="text-2xl font-bold text-gray-900">Request a Direct Quote</h3>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-900 transition-colors">
            <X className="h-6 w-6" />
          </button>
        </div>
        <div className="p-6 sm:p-8">
          <form className="space-y-6">
            {productName && (
              <div className="bg-industrial-50 p-4 rounded-lg border border-industrial-100 text-industrial-800 font-medium flex items-center">
                <Settings className="h-5 w-5 mr-2 flex-shrink-0" /> You are requesting a quote for: {productName}
              </div>
            )}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Company Name</label>
                <input type="text" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-industrial-500 focus:border-industrial-500 outline-none" placeholder="Your Company Ltd" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Contact Person</label>
                <input type="text" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-industrial-500 focus:border-industrial-500 outline-none" placeholder="John Doe" />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                <input type="email" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-industrial-500 focus:border-industrial-500 outline-none" placeholder="john@company.com" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                <input type="tel" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-industrial-500 focus:border-industrial-500 outline-none" placeholder="+91 98765 43210" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Quantity & Specifications</label>
              <textarea rows={4} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-industrial-500 focus:border-industrial-500 outline-none resize-none" placeholder="Please specify sizes, pressure ratings, and quantities..."></textarea>
            </div>
            <button type="button" onClick={onClose} className="w-full bg-industrial-600 text-white font-bold py-4 rounded-lg hover:bg-industrial-700 transition-colors text-lg shadow-lg">
              Submit Quote Request
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
