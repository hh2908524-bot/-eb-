import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail } from 'lucide-react';
import { InstagramIcon, FacebookIcon, TikTokIcon } from './SocialIcons';

export default function Footer() {
  return (
    <footer className="bg-charcoal-footer text-cream-100 pt-16 pb-12 border-t border-charcoal-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 pb-12 border-b border-white/10">
          
          {/* Brand Info */}
          <div className="md:col-span-2 space-y-4">
            <Link to="/" className="inline-flex items-center gap-2.5">
              <span className="bg-chili text-white font-black text-xl px-2.5 py-1 rounded-lg">HU</span>
              <span className="font-heading text-2xl tracking-wider text-white">Culinary</span>
            </Link>
            <p className="text-cream-200/70 text-sm max-w-sm leading-relaxed">
              Một thương hiệu ẩm thực hiện đại, nơi hương vị tươi ngon thủ công hòa cùng nghệ thuật thị giác và đam mê tuổi trẻ.
            </p>
            <div className="pt-2">
              <span className="font-handwritten text-2xl text-cheddar font-bold tracking-wide">
                Good Food · Good Mood
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-white text-xs font-bold uppercase tracking-widest border-b border-white/10 pb-2">
              Khám Phá
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/" className="text-cream-200/70 hover:text-chili transition-colors">
                  Trang chủ
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-cream-200/70 hover:text-chili transition-colors">
                  Giới thiệu &amp; Câu chuyện
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-cream-200/70 hover:text-chili transition-colors">
                  Bộ sưu tập Burgers
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-cream-200/70 hover:text-chili transition-colors">
                  Visual Archive Lookbook
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-cream-200/70 hover:text-chili transition-colors">
                  Liên hệ &amp; Vị trí
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Socials */}
          <div className="space-y-4">
            <h4 className="text-white text-xs font-bold uppercase tracking-widest border-b border-white/10 pb-2">
              Kết Nối Với HU
            </h4>
            <div className="space-y-2 text-sm text-cream-200/70">
              <div className="flex items-center gap-2.5">
                <MapPin className="w-4 h-4 text-chili shrink-0" />
                <span>123 Phố Ẩm Thực, Cầu Giấy, HN</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-chili shrink-0" />
                <span>hello@huculinary.vn</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-chili shrink-0" />
                <span>0900 000 000</span>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 hover:bg-chili hover:text-white flex items-center justify-center transition-all text-cream-200/80"
                aria-label="Instagram"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 hover:bg-chili hover:text-white flex items-center justify-center transition-all text-cream-200/80"
                aria-label="Facebook"
              >
                <FacebookIcon className="w-4 h-4" />
              </a>
              <a
                href="https://tiktok.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 hover:bg-chili hover:text-white flex items-center justify-center transition-all text-cream-200/80"
                aria-label="TikTok"
              >
                <TikTokIcon className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-cream-200/50 gap-4">
          <p>© 2026 HU Culinary. All rights reserved. Crafted with passion.</p>
          <div className="flex items-center gap-6">
            <span>Portfolio Brand Showcase</span>
            <span>·</span>
            <span>Hà Nội, Việt Nam</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
