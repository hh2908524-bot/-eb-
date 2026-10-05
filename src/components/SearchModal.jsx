import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, X, ArrowRight, Sparkles } from 'lucide-react';
import { products } from '../data/products';

export default function SearchModal({ isOpen, onClose }) {
  const [query, setQuery] = useState('');
  const inputRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        if (isOpen) onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const filteredProducts = query.trim() === ''
    ? products.slice(0, 3)
    : products.filter(p =>
        p.name.toLowerCase().includes(query.toLowerCase()) ||
        p.tagline.toLowerCase().includes(query.toLowerCase()) ||
        p.description.toLowerCase().includes(query.toLowerCase()) ||
        p.ingredients.some(ing => ing.name.toLowerCase().includes(query.toLowerCase()))
      );

  const quickPages = [
    { name: "Về HU & Câu Chuyện", path: "/about", tag: "Giới thiệu" },
    { name: "Tất Cả Sản Phẩm", path: "/products", tag: "Bộ sưu tập" },
    { name: "Visual Archive Lookbook", path: "/gallery", tag: "Hình ảnh" },
    { name: "Ghé HU & Liên Hệ", path: "/contact", tag: "Địa chỉ" },
  ];

  const handleSelectProduct = (id) => {
    onClose();
    navigate(`/products/${id}`);
  };

  const handleSelectPage = (path) => {
    onClose();
    navigate(path);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-charcoal/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="w-full max-w-2xl bg-cream-50 rounded-2xl shadow-2xl border border-cream-200 overflow-hidden animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="relative flex items-center px-4 py-4 border-b border-cream-200 bg-white">
          <Search className="w-5 h-5 text-chili shrink-0 ml-2" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Tìm món burger, nguyên liệu (bò, cheddar, truffle...)"
            className="w-full px-4 py-2 text-charcoal bg-transparent border-none outline-none font-medium placeholder:text-charcoal/40 text-base"
          />
          {query && (
            <button 
              onClick={() => setQuery('')}
              className="p-1 rounded-full text-charcoal/50 hover:text-charcoal mr-2"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={onClose}
            className="text-xs uppercase font-bold tracking-wider px-2.5 py-1 rounded bg-cream-200 text-charcoal-light hover:bg-cream-300"
          >
            ESC
          </button>
        </div>

        {/* Results Container */}
        <div className="max-h-[60vh] overflow-y-auto p-4 space-y-4">
          {/* Quick Page Suggestions */}
          {query.trim() === '' && (
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-charcoal/40 px-2 mb-2">
                Trang Chính
              </p>
              <div className="grid grid-cols-2 gap-2">
                {quickPages.map((page) => (
                  <button
                    key={page.path}
                    onClick={() => handleSelectPage(page.path)}
                    className="flex items-center justify-between p-3 rounded-xl bg-white hover:bg-cream-200 border border-cream-200 text-left transition-colors group"
                  >
                    <div>
                      <p className="text-sm font-semibold text-charcoal group-hover:text-chili">{page.name}</p>
                      <span className="text-[10px] text-charcoal/50 uppercase tracking-wider">{page.tag}</span>
                    </div>
                    <ArrowRight className="w-4 h-4 text-charcoal/30 group-hover:text-chili transition-transform group-hover:translate-x-0.5" />
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Products List */}
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-charcoal/40 px-2 mb-2 flex items-center justify-between">
              <span>{query.trim() === '' ? 'Món Nổi Bật' : `Kết quả tìm kiếm (${filteredProducts.length})`}</span>
              {query.trim() !== '' && <Sparkles className="w-3.5 h-3.5 text-cheddar" />}
            </p>

            {filteredProducts.length === 0 ? (
              <div className="text-center py-8">
                <p className="text-charcoal/60 text-sm">Không tìm thấy món nào phù hợp với "{query}".</p>
                <p className="text-xs text-charcoal/40 mt-1">Thử tìm "Bò", "Cheddar", "BBQ" hoặc "Truffle".</p>
              </div>
            ) : (
              <div className="space-y-2">
                {filteredProducts.map((product) => (
                  <div
                    key={product.id}
                    onClick={() => handleSelectProduct(product.id)}
                    className="flex items-center gap-4 p-2.5 rounded-xl bg-white hover:bg-cream-200 border border-cream-200 cursor-pointer transition-all group"
                  >
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-14 h-14 object-cover rounded-lg shrink-0 group-hover:scale-105 transition-transform"
                    />
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <h4 className="font-heading text-lg tracking-wide text-charcoal group-hover:text-chili truncate">
                          {product.name}
                        </h4>
                        <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-cream-200 text-charcoal/70">
                          {product.category}
                        </span>
                      </div>
                      <p className="text-xs text-charcoal/60 truncate mt-0.5">
                        {product.tagline}
                      </p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-charcoal/30 group-hover:text-chili shrink-0 mr-2 transition-transform group-hover:translate-x-1" />
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="px-4 py-3 bg-cream-100 border-t border-cream-200 flex items-center justify-between text-xs text-charcoal/60">
          <span>Tìm kiếm thông minh tại HU Culinary</span>
          <span className="font-handwritten text-base text-chili font-bold">Real Ingredients · Real Flavor</span>
        </div>
      </div>
    </div>
  );
}
