import React, { useState } from 'react';
import { MapPin, Mail, Phone, Clock, Send, CheckCircle2 } from 'lucide-react';
import { InstagramIcon, FacebookIcon, TikTokIcon } from '../components/SocialIcons';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    
    // Simulate contact submission
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 5000);
  };

  return (
    <div className="pt-6 md:pt-10 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      
      {/* ==================================================
          PAGE HEADER
          ================================================== */}
      <div className="pb-6 border-b border-cream-300">
        <p className="text-chili text-xs sm:text-sm font-bold uppercase tracking-widest mb-2 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-chili inline-block" />
          KẾT NỐI
        </p>
        <h1 className="font-heading text-4xl sm:text-6xl lg:text-7xl tracking-wide uppercase text-charcoal leading-none">
          GHÉ <span className="text-chili">HU</span> NHÉ.
        </h1>
        <p className="mt-4 text-base sm:text-lg text-charcoal/80 max-w-2xl font-normal leading-relaxed">
          “Một chiếc burger ngon nhất khi được thưởng thức cùng một câu chuyện hay. Nếu có dịp, hãy ghé HU.”
        </p>
      </div>

      {/* ==================================================
          TWO-COLUMN EDITORIAL LAYOUT
          ================================================== */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
        
        {/* LEFT COLUMN: Dark Info Card & Contact Form */}
        <div className="lg:col-span-6 space-y-8">
          
          {/* Dark Charcoal Contact Card */}
          <div className="bg-charcoal rounded-3xl p-8 sm:p-10 text-white shadow-xl relative overflow-hidden">
            {/* Background Accent */}
            <div className="absolute -top-12 -right-12 w-48 h-48 rounded-full bg-chili/10 blur-2xl" />

            <div className="relative z-10 space-y-6">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div className="flex items-center gap-2.5">
                  <span className="bg-chili text-white font-black text-lg px-2.5 py-1 rounded-lg">HU</span>
                  <span className="font-heading text-xl tracking-wider text-white">Culinary</span>
                </div>
                <span className="font-handwritten text-2xl text-cheddar font-bold -rotate-3">
                  See you at HU!
                </span>
              </div>

              {/* Information Rows */}
              <div className="space-y-4 text-sm sm:text-base">
                <div className="flex items-start gap-3.5">
                  <MapPin className="w-5 h-5 text-chili shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs uppercase font-bold text-white/50 block">Địa chỉ</span>
                    <span className="text-cream-100 font-medium">123 Phố Ẩm Thực, Cầu Giấy, Hà Nội</span>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <Mail className="w-5 h-5 text-chili shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs uppercase font-bold text-white/50 block">Email</span>
                    <a href="mailto:hello@huculinary.vn" className="text-cream-100 hover:text-cheddar transition-colors font-medium">
                      hello@huculinary.vn
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <Phone className="w-5 h-5 text-chili shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs uppercase font-bold text-white/50 block">Hotline</span>
                    <a href="tel:0900000000" className="text-cream-100 hover:text-cheddar transition-colors font-medium">
                      0900 000 000
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <Clock className="w-5 h-5 text-chili shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs uppercase font-bold text-white/50 block">Thời gian mở cửa</span>
                    <span className="text-cream-100 font-medium">10:00 – 22:00 (Mỗi ngày)</span>
                  </div>
                </div>
              </div>

              {/* Socials */}
              <div className="pt-4 border-t border-white/10">
                <p className="text-xs uppercase font-bold text-white/50 mb-3 tracking-wider">
                  Theo dõi chúng tôi
                </p>
                <div className="flex items-center gap-3">
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 hover:bg-chili text-white text-xs font-semibold transition-all"
                  >
                    <InstagramIcon className="w-4 h-4" />
                    <span>Instagram</span>
                  </a>
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 hover:bg-chili text-white text-xs font-semibold transition-all"
                  >
                    <FacebookIcon className="w-4 h-4" />
                    <span>Facebook</span>
                  </a>
                  <a
                    href="https://tiktok.com"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 hover:bg-chili text-white text-xs font-semibold transition-all"
                  >
                    <TikTokIcon className="w-4 h-4" />
                    <span>TikTok</span>
                  </a>
                </div>
              </div>

            </div>
          </div>

          {/* Simple Contact Form */}
          <div className="bg-[#FAF6EE] rounded-3xl p-8 border border-[#EFE5D5] shadow-soft">
            <h3 className="font-heading text-2xl tracking-wide uppercase text-charcoal mb-1">
              GỬI THÔNG ĐIỆP
            </h3>
            <p className="text-xs sm:text-sm text-charcoal/70 mb-6">
              Bạn có câu hỏi, góp ý hay chỉ đơn giản muốn chia sẻ câu chuyện ẩm thực cùng HU?
            </p>

            {submitted ? (
              <div className="p-6 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-800 flex items-start gap-3 animate-in zoom-in-95 duration-200">
                <CheckCircle2 className="w-6 h-6 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-base">Cảm ơn thông điệp từ bạn!</h4>
                  <p className="text-sm mt-1 text-emerald-700">
                    Căn bếp HU đã nhận được lời nhắn và sẽ phản hồi qua email trong thời gian sớm nhất.
                  </p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-charcoal/70 mb-1.5">
                    Tên của bạn *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Nguyễn Văn A"
                    className="w-full px-4 py-3 rounded-xl bg-white border border-cream-300 text-charcoal placeholder:text-charcoal/40 text-sm focus:outline-none focus:border-chili focus:ring-1 focus:ring-chili transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-charcoal/70 mb-1.5">
                    Email của bạn *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="yourname@gmail.com"
                    className="w-full px-4 py-3 rounded-xl bg-white border border-cream-300 text-charcoal placeholder:text-charcoal/40 text-sm focus:outline-none focus:border-chili focus:ring-1 focus:ring-chili transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-charcoal/70 mb-1.5">
                    Lời nhắn *
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Hãy viết điều bạn muốn chia sẻ với HU..."
                    className="w-full px-4 py-3 rounded-xl bg-white border border-cream-300 text-charcoal placeholder:text-charcoal/40 text-sm focus:outline-none focus:border-chili focus:ring-1 focus:ring-chili transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 bg-chili hover:bg-chili-hover text-white py-3.5 rounded-xl font-bold text-sm uppercase tracking-wider transition-all duration-300 shadow-md hover:shadow-lift"
                >
                  <Send className="w-4 h-4" />
                  <span>Gửi Thông Điệp</span>
                </button>
              </form>
            )}
          </div>

        </div>

        {/* RIGHT COLUMN: Google Maps Style Container & Restaurant Storefront Photo */}
        <div className="lg:col-span-6 space-y-6">
          
          {/* Simulated Google Maps card */}
          <div className="rounded-3xl overflow-hidden border border-cream-300 bg-white shadow-soft">
            {/* Map Header */}
            <div className="p-4 bg-cream-100 border-b border-cream-200 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-chili" />
                <div>
                  <p className="text-xs font-bold text-charcoal uppercase tracking-wider">
                    HU Culinary · Cầu Giấy
                  </p>
                  <p className="text-[11px] text-charcoal/60">
                    123 Phố Ẩm Thực, Cầu Giấy, Hà Nội
                  </p>
                </div>
              </div>
              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noreferrer"
                className="text-xs text-chili font-semibold hover:underline"
              >
                Xem bản đồ lớn hơn
              </a>
            </div>

            {/* Simulated Map Visual */}
            <div className="relative h-64 bg-[#E8EDE0] overflow-hidden flex items-center justify-center">
              {/* Map vector grid lines */}
              <div className="absolute inset-0 opacity-20 pointer-events-none" style={{
                backgroundImage: `linear-gradient(#4A5568 1px, transparent 1px), linear-gradient(90deg, #4A5568 1px, transparent 1px)`,
                backgroundSize: '40px 40px'
              }} />

              {/* Roads */}
              <div className="absolute w-full h-8 bg-white/90 top-1/2 -translate-y-1/2 rotate-[-12deg] shadow-sm" />
              <div className="absolute h-full w-8 bg-white/90 left-1/2 -translate-x-1/2 rotate-[25deg] shadow-sm" />

              {/* Custom Pin */}
              <div className="relative z-10 flex flex-col items-center animate-bounce duration-1000">
                <div className="bg-chili text-white font-bold text-xs px-3 py-1.5 rounded-full shadow-lg flex items-center gap-1.5 border-2 border-white">
                  <span className="w-2 h-2 rounded-full bg-cheddar" />
                  <span>HU Culinary</span>
                </div>
                <div className="w-3 h-3 bg-chili rotate-45 -mt-1.5 border-r border-b border-white" />
              </div>

              {/* Zoom controls simulation */}
              <div className="absolute bottom-3 right-3 flex flex-col rounded-lg bg-white shadow-md border border-cream-300 overflow-hidden text-xs font-bold text-charcoal">
                <button className="px-2.5 py-1 hover:bg-cream-200 border-b border-cream-200">+</button>
                <button className="px-2.5 py-1 hover:bg-cream-200">-</button>
              </div>
            </div>
          </div>

          {/* Night Storefront Photo Card */}
          <div className="relative rounded-3xl overflow-hidden bg-charcoal shadow-2xl border-4 border-white group">
            <img
              src="/images/gallery_storefront.jpg"
              alt="HU Culinary Storefront"
              className="w-full h-[320px] sm:h-[380px] object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />

            {/* Floating Brand Plaque on Storefront */}
            <div className="absolute bottom-6 left-6 right-6 p-5 rounded-2xl bg-charcoal/85 backdrop-blur-md border border-white/10 text-white">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-[10px] uppercase font-bold tracking-widest text-cheddar">
                    Không gian mở
                  </span>
                  <h4 className="font-heading text-2xl tracking-wide text-white mt-0.5">
                    HU Culinary Flagship
                  </h4>
                  <p className="text-xs text-cream-100/70 mt-0.5 font-light">
                    Hương thơm bơ tỏi và vỉ nướng nóng luôn sẵn sàng chào đón bạn.
                  </p>
                </div>
                <div className="w-10 h-10 rounded-full bg-chili flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-white" />
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>

    </div>
  );
}
