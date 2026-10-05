import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Leaf, Flame, Sparkles } from 'lucide-react';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';

export default function HomePage() {
  const signatures = products.filter(p => p.isSignature);

  return (
    <div className="space-y-16 md:space-y-24 pb-20">
      
      {/* ==================================================
          HERO SECTION (Panel 1 from Mockup)
          ================================================== */}
      <section className="relative pt-6 md:pt-10 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Hero Content */}
            <div className="lg:col-span-7 space-y-6">
              {/* Brand Label */}
              <div className="inline-flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-chili" />
                <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-charcoal">
                  HU CULINARY
                </span>
              </div>

              {/* Main Headline */}
              <h1 className="font-heading text-5xl sm:text-7xl lg:text-8xl tracking-wide uppercase text-charcoal leading-[0.92]">
                FRESH HOT &amp; <br />
                <span className="text-chili">MADE TO LOVE</span>
              </h1>

              {/* Supporting Text */}
              <p className="text-base sm:text-lg text-charcoal/80 max-w-lg leading-relaxed font-normal">
                “Những món ăn nóng hổi, nguyên liệu tươi và một chút nghệ thuật trong từng lớp bánh.”
              </p>

              {/* CTA Button */}
              <div className="pt-2">
                <Link
                  to="/products"
                  className="inline-flex items-center gap-3 bg-chili hover:bg-chili-hover text-white px-8 py-4 rounded-full font-bold text-sm uppercase tracking-wider transition-all duration-300 shadow-md hover:shadow-lift hover:-translate-y-0.5"
                >
                  <span>Khám Phá Ngay</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              {/* Editorial handwritten note */}
              <div className="pt-2">
                <span className="font-handwritten text-3xl sm:text-4xl text-chili font-bold -rotate-3 inline-block select-none">
                  Good Food Good Mood
                </span>
              </div>
            </div>

            {/* Right Hero Image Card (Exact match with Reference Mockup Panel 1) */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-3xl overflow-hidden bg-charcoal shadow-2xl border-4 border-white group">
                <img
                  src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=1200&auto=format&fit=crop"
                  alt="HU Signature Burger"
                  className="w-full h-[380px] sm:h-[460px] object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />

                {/* Floating Handwritten Badge */}
                <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-2xl shadow-lg border border-cream-200 rotate-2">
                  <p className="font-handwritten text-xl text-chili font-bold leading-none">
                    Fresh Smash Daily
                  </p>
                </div>

                {/* Bottom Overlay Label */}
                <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-charcoal/90 via-charcoal/40 to-transparent text-white">
                  <span className="text-[11px] font-bold uppercase tracking-widest text-cheddar">
                    Signature Taste
                  </span>
                  <h3 className="font-heading text-2xl tracking-wide mt-0.5">
                    The Classic HU Burger
                  </h3>
                  <p className="text-xs text-cream-100/80 font-light mt-1">
                    Bò nướng vỉ đập nóng hổi · Cheddar tan chảy
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ==================================================
          SECTION: TRIẾT LÝ ẨM THỰC CỦA HU (Editorial Split Layout)
          ================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#FAF6EE] rounded-3xl p-8 sm:p-12 lg:p-14 border border-[#EFE5D5] shadow-soft">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Headline & Text */}
            <div className="lg:col-span-5 space-y-3">
              <p className="text-chili text-xs sm:text-sm font-bold uppercase tracking-widest flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-chili inline-block" />
                TRIẾT LÝ ẨM THỰC CỦA HU
              </p>
              <h2 className="font-heading text-3xl sm:text-5xl uppercase tracking-wide text-charcoal leading-[0.95]">
                NHANH GỌN, <br />
                <span className="text-chili">ĐẬM VỊ NGUYÊN BẢN.</span>
              </h2>
              <p className="text-sm sm:text-base text-charcoal/80 leading-relaxed font-normal pt-2">
                Chúng tôi tin rằng, một bữa ăn ngon không cần quá nhiều thứ. Chỉ cần nguyên liệu tươi, kỹ thuật đúng và một chút tình yêu được đặt vào đúng chỗ.
              </p>
            </div>

            {/* Right 3 Philosophy Items (Red circular badges with clean text) */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-6">
              
              {/* Item 1 */}
              <div className="bg-white rounded-2xl p-6 text-center shadow-sm border border-cream-200 flex flex-col items-center card-hover-lift">
                <div className="w-14 h-14 rounded-full bg-chili text-white flex items-center justify-center mb-4 shadow-sm">
                  <Leaf className="w-6 h-6 stroke-[2.2]" />
                </div>
                <h3 className="font-heading text-xl tracking-wide uppercase text-charcoal mb-2">
                  Nguyên liệu tươi ngon
                </h3>
                <p className="text-xs text-charcoal/70 leading-relaxed font-normal">
                  Rau tươi giao mỗi sáng, phô mai chuẩn vị và thịt bò tuyển chọn.
                </p>
              </div>

              {/* Item 2 */}
              <div className="bg-white rounded-2xl p-6 text-center shadow-sm border border-cream-200 flex flex-col items-center card-hover-lift">
                <div className="w-14 h-14 rounded-full bg-chili text-white flex items-center justify-center mb-4 shadow-sm">
                  <Flame className="w-6 h-6 stroke-[2.2]" />
                </div>
                <h3 className="font-heading text-xl tracking-wide uppercase text-charcoal mb-2">
                  Chế biến thủ công
                </h3>
                <p className="text-xs text-charcoal/70 leading-relaxed font-normal">
                  Từng chiếc patty được ép trực tiếp trên vỉ gang ở nhiệt độ lý tưởng.
                </p>
              </div>

              {/* Item 3 */}
              <div className="bg-white rounded-2xl p-6 text-center shadow-sm border border-cream-200 flex flex-col items-center card-hover-lift">
                <div className="w-14 h-14 rounded-full bg-chili text-white flex items-center justify-center mb-4 shadow-sm">
                  <Sparkles className="w-6 h-6 stroke-[2.2]" />
                </div>
                <h3 className="font-heading text-xl tracking-wide uppercase text-charcoal mb-2">
                  Hương vị nguyên bản
                </h3>
                <p className="text-xs text-charcoal/70 leading-relaxed font-normal">
                  Tôn trọng độ ngọt tự nhiên của thịt bò, không phụ gia công nghiệp.
                </p>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* ==================================================
          SECTION: ĐƯỢC YÊU THÍCH / HU SIGNATURES
          ================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between border-b border-cream-300 pb-4 mb-8">
          <div>
            <p className="text-chili text-xs sm:text-sm font-bold uppercase tracking-widest flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-chili inline-block" />
              ĐƯỢC YÊU THÍCH
            </p>
            <h2 className="font-heading text-3xl sm:text-5xl uppercase tracking-wide text-charcoal mt-1">
              HU SIGNATURES
            </h2>
          </div>
          <Link
            to="/products"
            className="text-xs sm:text-sm font-bold uppercase tracking-wider text-charcoal hover:text-chili transition-colors"
          >
            Xem tất cả →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {signatures.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

    </div>
  );
}
