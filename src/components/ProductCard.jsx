import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

export default function ProductCard({ product }) {
  return (
    <Link
      to={`/products/${product.id}`}
      className="group block bg-[#FAF6EE] rounded-2xl p-3 sm:p-4 border border-[#EFE5D5] transition-all duration-300 hover:shadow-card hover:-translate-y-1"
    >
      {/* Image Container */}
      <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-cream-200">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
        />
        {/* Subtle Category Pill */}
        <span className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm text-charcoal text-[11px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider shadow-sm">
          {product.category}
        </span>
        
        {/* Quick View Indicator */}
        <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/90 backdrop-blur-sm text-charcoal flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-sm">
          <ArrowUpRight className="w-4 h-4 text-chili" />
        </div>
      </div>

      {/* Content */}
      <div className="pt-4 pb-2 px-1">
        <h3 className="font-heading text-2xl tracking-wide text-charcoal group-hover:text-chili transition-colors leading-tight">
          {product.name}
        </h3>
        <p className="text-sm text-charcoal-light/80 mt-1 line-clamp-2 leading-relaxed">
          {product.tagline}
        </p>
      </div>
    </Link>
  );
}
