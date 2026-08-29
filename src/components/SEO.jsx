import { useEffect } from 'react';

export default function SEO({ title, description }) {
  useEffect(() => {
    // Update Title
    document.title = title ? `${title} | D.M. Valve Product` : 'D.M. Valve Product - Industrial Valves Manufacturer';
    
    // Update Meta Description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.name = 'description';
      document.head.appendChild(metaDescription);
    }
    metaDescription.content = description || 'Leading manufacturer of heavy-duty, zero-leakage industrial valves. Based in Ahmedabad, Gujarat, India. TC End Ball Valves, Flush Bottom Tank Valves.';
    
    // Keywords for SEO
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta');
      metaKeywords.name = 'keywords';
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.content = 'industrial valves, ball valves, TC end ball valve, flush bottom tank valve, ahmedabad manufacturer, zero-leakage valves, gujarat valve export';
    
  }, [title, description]);

  return null;
}
