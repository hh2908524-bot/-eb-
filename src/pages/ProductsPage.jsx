import React, { useState } from 'react';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Bò Smash', 'Phô mai', 'Gà giòn'];

  const filteredProducts = selectedCategory === 'All'
    ? products
    : products.filter(p => p.category === selectedCategory);

  return (
    <div className="pt-6 md:pt-10 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      
      {/* ==================================================
          PAGE HEADER
          ================================================== */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-cream-300">
        <div>
          <p className="text-chili text-xs sm:text-sm font-bold uppercase tracking-widest mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-chili inline-block" />
            COLLECTION
          </p>
          <h1 className="font-heading text-4xl sm:text-6xl lg:text-7xl tracking-wide uppercase text-charcoal leading-none">
            THE HU COLLECTION
          </h1>
          <p className="mt-4 text-base sm:text-lg text-charcoal/80 max-w-2xl font-normal leading-relaxed">
            “Những công thức được tạo nên từ nguyên liệu tươi, kỹ thuật thủ công và tinh thần không ngừng thử nghiệm.”
          </p>
        </div>

        {/* Handwritten Editorial Accent */}
        <div className="shrink-0 text-left md:text-right">
          <span className="font-handwritten text-3xl sm:text-4xl text-chili font-bold inline-block -rotate-3">
            Real Ingredients<br />
            <span className="text-charcoal">Real Flavor</span>
          </span>
        </div>
      </div>

      {/* ==================================================
          CATEGORY FILTER PILLS
          ================================================== */}
      <div className="flex flex-wrap items-center gap-2.5">
        <span className="text-xs uppercase font-bold tracking-wider text-charcoal/50 mr-2">
          Lọc món:
        </span>
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold uppercase tracking-wider transition-all duration-200 ${
              selectedCategory === cat
                ? 'bg-chili text-white shadow-md'
                : 'bg-white hover:bg-cream-200 text-charcoal border border-cream-300'
            }`}
          >
            {cat === 'All' ? 'Tất Cả Sáng Tạo' : cat}
          </button>
        ))}
      </div>

      {/* ==================================================
          3-COLUMN PRODUCT GRID
          ================================================== */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {/* Editorial Note at Bottom */}
      <div className="pt-8 text-center border-t border-cream-200">
        <p className="text-xs sm:text-sm text-charcoal/60 uppercase tracking-widest font-medium">
          HU Culinary · Chế biến thủ công tươi mới mỗi ngày khi bạn ghé thăm
        </p>
      </div>

    </div>
  );
}
