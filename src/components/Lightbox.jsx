import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

export default function Lightbox({ images, currentIndex, isOpen, onClose, onPrev, onNext }) {
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose, onPrev, onNext]);

  if (!isOpen || currentIndex === null || !images[currentIndex]) return null;

  const current = images[currentIndex];

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-charcoal-pure/95 backdrop-blur-md p-4 sm:p-8 animate-in fade-in duration-300"
      onClick={onClose}
    >
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-6 right-6 z-50 p-3 rounded-full bg-white/10 hover:bg-chili text-white transition-all duration-200"
        aria-label="Đóng"
      >
        <X className="w-6 h-6" />
      </button>

      {/* Prev Button */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onPrev();
        }}
        className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-50 p-3 sm:p-4 rounded-full bg-white/10 hover:bg-chili text-white transition-all duration-200 shadow-lg"
        aria-label="Ảnh trước"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      {/* Next Button */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onNext();
        }}
        className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-50 p-3 sm:p-4 rounded-full bg-white/10 hover:bg-chili text-white transition-all duration-200 shadow-lg"
        aria-label="Ảnh sau"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Image and Caption Container */}
      <div 
        className="relative max-w-5xl max-h-[88vh] flex flex-col items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={current.image}
          alt={current.title}
          className="max-h-[75vh] w-auto max-w-full object-contain rounded-xl shadow-2xl animate-in zoom-in-95 duration-200"
        />

        {/* Caption bar */}
        <div className="mt-4 text-center text-white max-w-xl px-4">
          <div className="flex items-center justify-center gap-3">
            <span className="text-xs uppercase font-bold tracking-wider px-2.5 py-0.5 rounded-full bg-chili text-white">
              {current.category}
            </span>
            <span className="text-xs text-white/50">
              {currentIndex + 1} / {images.length}
            </span>
          </div>
          <h3 className="font-heading text-xl sm:text-2xl tracking-wide mt-2 text-white">
            {current.title}
          </h3>
          <p className="text-xs sm:text-sm text-white/70 mt-1 font-light">
            {current.caption}
          </p>
        </div>
      </div>
    </div>
  );
}
