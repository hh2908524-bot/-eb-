import React, { useState } from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import SearchModal from './components/SearchModal';
import ScrollToTop from './components/ScrollToTop';

import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProductsPage from './pages/ProductsPage';
import ProductDetailPage from './pages/ProductDetailPage';
import GalleryPage from './pages/GalleryPage';
import ContactPage from './pages/ContactPage';

export default function App() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-[#FDF5E6] text-charcoal font-sans selection:bg-chili selection:text-white">
        {/* Sticky Header Navigation */}
        <Navbar onOpenSearch={() => setIsSearchOpen(true)} />

        {/* Search Modal */}
        <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />

        {/* Main Content Router */}
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/products/:id" element={<ProductDetailPage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>

        {/* Dark Footer */}
        <Footer />
      </div>
    </Router>
  );
}
