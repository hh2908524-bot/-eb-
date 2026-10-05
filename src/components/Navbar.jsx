import React, { useState } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Search, Menu, X, ArrowRight } from 'lucide-react';

export default function Navbar({ onOpenSearch }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Trang chủ', path: '/' },
    { name: 'Giới thiệu', path: '/about' },
    { name: 'Sản phẩm', path: '/products' },
    { name: 'Trưng bày', path: '/gallery' },
    { name: 'Liên hệ', path: '/contact' },
  ];

  return (
    <>
      <header className="sticky top-0 z-40 bg-[#FDF5E6]/95 backdrop-blur-md border-b border-[#F0E6D5] transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5 group">
            <span className="bg-chili text-white font-black text-xl px-2.5 py-1 rounded-lg tracking-wider transition-transform group-hover:scale-105 shadow-sm">
              HU
            </span>
            <span className="font-heading text-2xl tracking-wide text-charcoal group-hover:text-chili transition-colors">
              Culinary
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `relative py-2 text-sm uppercase tracking-wider font-semibold transition-colors duration-200 ${
                    isActive
                      ? 'text-chili'
                      : 'text-charcoal-light hover:text-chili'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    <span>{link.name}</span>
                    {isActive && (
                      <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-chili rounded-full animate-in fade-in zoom-in-50 duration-200" />
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-3">
            {/* Search Trigger */}
            <button
              onClick={onOpenSearch}
              className="p-2.5 rounded-full text-charcoal hover:bg-cream-200 hover:text-chili transition-all duration-200"
              aria-label="Tìm kiếm"
              title="Tìm kiếm (Ctrl + K)"
            >
              <Search className="w-5 h-5 stroke-[2.2]" />
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2.5 rounded-full text-charcoal hover:bg-cream-200 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6 stroke-[2.2]" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-50 bg-charcoal/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="fixed inset-y-0 right-0 w-4/5 max-w-sm bg-cream-50 p-6 shadow-2xl flex flex-col justify-between border-l border-cream-200 animate-in slide-in-from-right duration-300">
            <div>
              {/* Header inside mobile drawer */}
              <div className="flex items-center justify-between pb-6 border-b border-cream-200">
                <Link 
                  to="/" 
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center gap-2"
                >
                  <span className="bg-chili text-white font-black text-lg px-2.5 py-1 rounded-lg">HU</span>
                  <span className="font-heading text-xl text-charcoal">Culinary</span>
                </Link>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 text-charcoal hover:bg-cream-200 rounded-full"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Mobile Links */}
              <div className="flex flex-col gap-2 mt-6">
                {navLinks.map((link) => {
                  const isActive = location.pathname === link.path;
                  return (
                    <Link
                      key={link.path}
                      to={link.path}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`flex items-center justify-between px-4 py-3.5 rounded-xl font-medium tracking-wide transition-all ${
                        isActive
                          ? 'bg-chili text-white font-bold shadow-md'
                          : 'text-charcoal hover:bg-cream-200'
                      }`}
                    >
                      <span>{link.name}</span>
                      <ArrowRight className={`w-4 h-4 ${isActive ? 'text-white' : 'text-charcoal/40'}`} />
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* Bottom info in mobile drawer */}
            <div className="pt-6 border-t border-cream-200">
              <p className="font-handwritten text-xl text-chili font-bold">Good Food Good Mood</p>
              <p className="text-xs text-charcoal/70 mt-1">123 Phố Ẩm Thực, Cầu Giấy, Hà Nội</p>
              <p className="text-xs text-charcoal/60 mt-0.5">Hotline: 0900 000 000</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
