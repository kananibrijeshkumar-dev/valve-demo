import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import QuoteModal from './components/QuoteModal';

// Pages
import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';
import ContactPage from './pages/ContactPage';
import AboutPage from './pages/AboutPage';
import QualityPage from './pages/QualityPage';
import AdminPortal from './pages/AdminPortal';

// Scroll to top helper
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState("");

  const handleOpenQuote = (productName = "") => {
    setSelectedProduct(productName);
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-white font-sans flex flex-col text-classic-navy selection:bg-classic-red selection:text-white">
      <ScrollToTop />
      
      {/* Global Quote Modal */}
      <QuoteModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        productName={selectedProduct} 
      />

      {/* Global Header (Hide on Admin Portal) */}
      <Routes>
        <Route path="/secret-admin" element={null} />
        <Route path="*" element={<Header onOpenQuote={handleOpenQuote} />} />
      </Routes>

      {/* Page Content Routes */}
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<HomePage onOpenQuote={handleOpenQuote} />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/quality" element={<QualityPage />} />
          <Route path="/products" element={<ProductsPage onOpenQuote={handleOpenQuote} />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/secret-admin" element={<AdminPortal />} />
        </Routes>
      </main>

      {/* Global Footer (Hide on Admin Portal) */}
      <Routes>
        <Route path="/secret-admin" element={null} />
        <Route path="*" element={<Footer onOpenQuote={handleOpenQuote} />} />
      </Routes>
    </div>
  );
}

export default App;
