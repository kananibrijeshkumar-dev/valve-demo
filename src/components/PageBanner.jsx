import React from 'react';
import { Home, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function PageBanner({ title, breadcrumb }) {
  return (
    <div className="bg-minimal-bg py-16 border-b border-minimal-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <h2 className="text-3xl font-light text-minimal-text tracking-tight mb-4 md:mb-0">{title}</h2>
          <div className="flex items-center text-minimal-textLight text-sm font-medium">
            <Link to="/" className="hover:text-minimal-text transition-colors flex items-center">
              <Home className="h-4 w-4 mr-1" />
            </Link>
            <ChevronRight className="h-4 w-4 mx-2 text-minimal-border" />
            <span className="text-minimal-text">{breadcrumb}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
