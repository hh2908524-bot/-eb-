import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Flame, Layers, Leaf, Sparkles, CheckCircle2 } from 'lucide-react';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';

export default function ProductDetailPage() {
  const { id } = useParams();
  
  // Find current product or default to classic-hu
  const product = products.find(p => p.id === id) || products[0];

  // Active gallery thumbnail
  const [activeImage, setActiveImage] = useState(product.image);

  // Other products for exploration
  const otherProducts = products.filter(p => p.id !== product.id).slice(0, 3);

  // Icon mapping
  const renderIcon = (iconName) => {
    switch (iconName) {
      case 'Flame': return <Flame className="w-5 h-5 text-chili" />;
      case 'Layers': return <Layers className="w-5 h-5 text-cheddar-warm" />;
      case 'Leaf': return <Leaf className="w-5 h-5 text-emerald-600" />;
      default: return <Sparkles className="w-5 h-5 text-chili" />;
    }
  };

  return (
    <div className="pt-6 md:pt-10 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 md:space-y-24">
      
      {/* Back to Collection Link */}
      <div>
        <Link
          to="/products"
          className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold uppercase tracking-wider text-charcoal/70 hover:text-chili transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Quay lại Bộ sưu tập</span>
        </Link>
      </div>

      {/* ==================================================
          PRODUCT HERO / TWO-COLUMN EDITORIAL
          ================================================== */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
        
        {/* Left: Product Images */}
        <div className="lg:col-span-6 space-y-4">
          {/* Main Large Image */}
          <div className="relative aspect-[4/3] rounded-3xl overflow-hidden bg-charcoal shadow-2xl border-4 border-white group">
            <img
              src={activeImage}
              alt={product.name}
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
            {/* Category tag */}
            <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm px-3 py-1 rounded-full shadow-md text-xs font-bold uppercase tracking-wider text-charcoal">
              {product.category}
            </div>
          </div>

          {/* Thumbnail Strip */}
          {product.thumbnails && product.thumbnails.length > 0 && (
            <div className="flex items-center gap-3 pt-2">
              {product.thumbnails.map((thumb, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImage(thumb)}
                  className={`relative w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden border-2 transition-all ${
                    activeImage === thumb 
                      ? 'border-chili scale-105 shadow-md' 
                      : 'border-cream-300 opacity-70 hover:opacity-100 hover:border-charcoal'
                  }`}
                >
                  <img
                    src={thumb}
                    alt={`Góc chụp ${idx + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Right: Editorial Information */}
        <div className="lg:col-span-6 space-y-8">
          
          <div>
            {/* Small red label */}
            <p className="text-chili text-xs sm:text-sm font-bold uppercase tracking-widest mb-2 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-chili inline-block" />
              HU CULINARY
            </p>

            {/* Large title */}
            <h1 className="font-heading text-4xl sm:text-6xl tracking-wide uppercase text-charcoal leading-none">
              {product.name}
            </h1>

            {/* Tagline */}
            <p className="mt-3 text-lg sm:text-xl font-medium text-chili">
              “{product.tagline}”
            </p>

            {/* Detailed Description */}
            <p className="mt-4 text-sm sm:text-base text-charcoal/80 leading-relaxed font-normal">
              {product.description}
            </p>

            <p className="mt-2 text-sm text-charcoal/70 leading-relaxed">
              {product.longDescription}
            </p>
          </div>

          {/* Section: THÀNH PHẦN CỐT LÕI */}
          <div className="pt-4 border-t border-cream-300">
            <h3 className="text-xs font-bold uppercase tracking-widest text-charcoal mb-4 flex items-center justify-between">
              <span>THÀNH PHẦN CỐT LÕI</span>
              <span className="font-handwritten text-lg text-chili">Selected with care</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {product.ingredients.map((item, index) => (
                <div 
                  key={index}
                  className="bg-white rounded-2xl p-4 border border-cream-200 flex items-start gap-3.5 shadow-sm"
                >
                  <div className="p-2.5 rounded-xl bg-cream-100 shrink-0">
                    {renderIcon(item.icon)}
                  </div>
                  <div>
                    <h4 className="font-semibold text-charcoal text-sm">
                      {item.name}
                    </h4>
                    <p className="text-xs text-charcoal/60 mt-0.5">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>

      {/* ==================================================
          SECTION: QUY TRÌNH CHẾ BIẾN (3-STEP TIMELINE)
          ================================================== */}
      <div className="bg-[#FAF6EE] rounded-3xl p-8 sm:p-12 lg:p-16 border border-[#EFE5D5] shadow-soft">
        
        <div className="text-center max-w-xl mx-auto mb-12">
          <p className="text-chili text-xs font-bold uppercase tracking-widest mb-1">
            NGHỆ THUẬT BẾP NÓNG
          </p>
          <h2 className="font-heading text-3xl sm:text-5xl uppercase tracking-wide text-charcoal">
            QUY TRÌNH CHẾ BIẾN
          </h2>
          <p className="text-xs sm:text-sm text-charcoal/70 mt-2">
            3 bước chuẩn hóa bảo tồn độ mọng nước và tạo nên lớp vỏ giòn rụm đặc trưng.
          </p>
        </div>

        {/* 3-Step Horizontal Timeline */}
        <div className="relative">
          {/* Connector Line on Desktop */}
          <div className="hidden md:block absolute top-1/4 left-16 right-16 h-0.5 bg-cream-300 -translate-y-1/2 z-0" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
            {product.timeline.map((step, idx) => (
              <div 
                key={idx} 
                className="bg-white rounded-2xl p-6 sm:p-8 border border-cream-200 shadow-sm text-center flex flex-col items-center card-hover-lift"
              >
                {/* Numbered circle */}
                <div className="w-14 h-14 rounded-full bg-chili text-white font-heading text-2xl flex items-center justify-center shadow-md mb-4">
                  {step.step}
                </div>

                <h3 className="font-heading text-xl sm:text-2xl tracking-wide uppercase text-charcoal mb-2">
                  {step.title}
                </h3>

                <p className="text-xs sm:text-sm text-charcoal/70 leading-relaxed font-normal">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* ==================================================
          RELATED SIGNATURES
          ================================================== */}
      <div className="space-y-8">
        <div className="flex items-end justify-between border-b border-cream-300 pb-4">
          <div>
            <p className="text-chili text-xs font-bold uppercase tracking-widest">
              KHÁM PHÁ THÊM
            </p>
            <h3 className="font-heading text-2xl sm:text-4xl uppercase tracking-wide text-charcoal">
              NHỮNG HƯƠNG VỊ ĐẶC BIỆT KHÁC
            </h3>
          </div>
          <Link
            to="/products"
            className="text-xs sm:text-sm font-bold uppercase tracking-wider text-charcoal hover:text-chili transition-colors"
          >
            Xem tất cả →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {otherProducts.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </div>

    </div>
  );
}
