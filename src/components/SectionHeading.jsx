import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function SectionHeading({ 
  label, 
  title, 
  description, 
  handwritten, 
  actionLink, 
  actionText,
  centered = false,
  dark = false
}) {
  return (
    <div className={`mb-10 md:mb-12 ${centered ? 'text-center' : ''}`}>
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          {label && (
            <p className="text-chili text-xs sm:text-sm font-bold uppercase tracking-widest mb-2 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-chili inline-block" />
              {label}
            </p>
          )}

          <div className="flex flex-wrap items-baseline gap-4">
            <h2 className={`font-heading text-3xl sm:text-5xl lg:text-6xl tracking-wide uppercase leading-none ${dark ? 'text-white' : 'text-charcoal'}`}>
              {title}
            </h2>
            {handwritten && (
              <span className="font-handwritten text-2xl sm:text-3xl text-chili font-bold -rotate-3">
                {handwritten}
              </span>
            )}
          </div>

          {description && (
            <p className={`mt-3 max-w-2xl text-sm sm:text-base leading-relaxed ${dark ? 'text-cream-200/80' : 'text-charcoal/80'}`}>
              {description}
            </p>
          )}
        </div>

        {actionLink && actionText && (
          <Link
            to={actionLink}
            className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-charcoal hover:text-chili transition-colors group shrink-0"
          >
            <span>{actionText}</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 text-chili" />
          </Link>
        )}
      </div>
    </div>
  );
}
