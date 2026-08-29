import React from 'react';
import { Home } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function PageBanner({ title, breadcrumb }) {
  return (
    <div className="bg-classic-navy py-12 border-b-4 border-classic-red">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <h2 className="text-3xl font-bold text-white mb-4 md:mb-0">{title}</h2>
          <div className="flex items-center text-gray-300 text-sm font-medium">
            <Link to="/" className="hover:text-classic-red transition-colors flex items-center">
              <Home className="h-4 w-4 mr-1" />
            </Link>
            <span className="mx-3 text-gray-500">/</span>
            <span className="text-white">{breadcrumb}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
