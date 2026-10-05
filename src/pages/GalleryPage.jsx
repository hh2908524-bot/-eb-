import React, { useState } from 'react';
import { Maximize2, Sparkles } from 'lucide-react';
import { galleryImages } from '../data/gallery';
import Lightbox from '../components/Lightbox';

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const categories = ['All', 'Burger', 'Bếp Lửa', 'Nguyên Liệu', 'Không Gian'];

  const filteredImages = selectedCategory === 'All'
    ? galleryImages
    : galleryImages.filter(img => img.category === selectedCategory);

  const openLightbox = (index) => {
    setLightboxIndex(index);
    setIsLightboxOpen(true);
  };

  const closeLightbox = () => {
    setIsLightboxOpen(false);
  };

  const handlePrev = () => {
    setLightboxIndex((prev) => (prev > 0 ? prev - 1 : filteredImages.length - 1));
  };

  const handleNext = () => {
    setLightboxIndex((prev) => (prev < filteredImages.length - 1 ? prev + 1 : 0));
  };

  return (
    <div className="pt-6 md:pt-10 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      
      {/* ==================================================
          PAGE HEADER
          ================================================== */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-cream-300">
        <div>
          <p className="text-chili text-xs sm:text-sm font-bold uppercase tracking-widest mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-chili inline-block" />
            VISUAL ARCHIVE
          </p>
          <h1 className="font-heading text-4xl sm:text-6xl lg:text-7xl tracking-wide uppercase text-charcoal leading-none">
            HU LOOKBOOK
          </h1>
          <p className="mt-4 text-base sm:text-lg text-charcoal/80 max-w-2xl font-normal leading-relaxed">
            “Một góc nhìn khác về HU — nơi những lớp bánh, vệt lửa và dòng phô mai kể câu chuyện bằng hình ảnh.”
          </p>
        </div>

        {/* Handwritten Accent */}
        <div className="shrink-0">
          <span className="font-handwritten text-3xl sm:text-4xl text-chili font-bold inline-block -rotate-3">
            Moments &amp; Fire
          </span>
        </div>
      </div>

      {/* ==================================================
          CATEGORY FILTER TABS
          ================================================== */}
      <div className="flex flex-wrap items-center gap-2.5">
        <span className="text-xs uppercase font-bold tracking-wider text-charcoal/50 mr-2">
          Chủ đề:
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
            {cat === 'All' ? 'Tất Cả Khoảnh Khắc' : cat}
          </button>
        ))}
      </div>

      {/* ==================================================
          MASONRY-STYLE LOOKBOOK GRID
          ================================================== */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredImages.map((item, index) => {
          // Dynamic aspect ratio classes for editorial masonry feel
          const heightClass = item.aspect === 'tall' 
            ? 'h-[440px]' 
            : item.aspect === 'wide' 
              ? 'h-[300px]' 
              : 'h-[360px]';

          return (
            <div
              key={item.id}
              onClick={() => openLightbox(index)}
              className={`group relative rounded-2xl overflow-hidden bg-charcoal cursor-pointer shadow-soft border-2 border-white/60 card-hover-lift ${heightClass}`}
            >
              <img
                src={item.image}
                alt={item.title}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />

              {/* Tag pill */}
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider text-charcoal shadow-sm">
                {item.tag || item.category}
              </div>

              {/* Expand Icon */}
              <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/90 backdrop-blur-sm text-charcoal flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-md">
                <Maximize2 className="w-4 h-4 text-chili" />
              </div>

              {/* Gradient overlay & caption on hover/bottom */}
              <div className="absolute inset-x-0 bottom-0 p-5 bg-gradient-to-t from-charcoal/90 via-charcoal/40 to-transparent text-white transition-opacity duration-300">
                <span className="text-[10px] font-bold uppercase tracking-widest text-cheddar">
                  {item.category}
                </span>
                <h3 className="font-heading text-lg sm:text-xl tracking-wide mt-0.5 text-white line-clamp-1">
                  {item.title}
                </h3>
                <p className="text-xs text-cream-100/70 mt-1 line-clamp-2 font-light">
                  {item.caption}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Lightbox Modal */}
      <Lightbox
        images={filteredImages}
        currentIndex={lightboxIndex}
        isOpen={isLightboxOpen}
        onClose={closeLightbox}
        onPrev={handlePrev}
        onNext={handleNext}
      />

    </div>
  );
}
