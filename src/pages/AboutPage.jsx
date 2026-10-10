import React from 'react';
import { Lightbulb, Palette, Heart, Quote } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="space-y-16 md:space-y-24 pb-20">
      
      {/* ==================================================
          MAIN ABOUT / STORY SECTION
          ================================================== */}
      <section className="pt-6 md:pt-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Heading */}
        <div className="mb-10 sm:mb-12">
          <p className="text-chili text-xs sm:text-sm font-bold uppercase tracking-widest mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-chili inline-block" />
            VỀ HU
          </p>
          <h1 className="font-heading text-4xl sm:text-6xl lg:text-7xl tracking-wide uppercase text-charcoal leading-none">
            CÂU CHUYỆN <br className="hidden sm:inline" />
            <span className="text-chili">CỦA HU</span>
          </h1>
          <p className="mt-3 text-base sm:text-lg text-charcoal/70 max-w-xl font-medium">
            Từ những ý tưởng trên giảng đường đến một không gian ẩm thực thật sự.
          </p>
        </div>

        {/* Two-Column Editorial Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* Left Column: Natural Authentic Story */}
          <div className="lg:col-span-6 space-y-6 text-charcoal/85 text-base sm:text-lg leading-relaxed">
            <p className="font-normal first-letter:text-5xl first-letter:font-heading first-letter:text-chili first-letter:mr-3 first-letter:float-left first-letter:leading-none">
              Mình hiện là sinh viên năm 3, ban ngày đến giảng đường, tối lại dành thời gian làm việc trong gian bếp. Ban đầu mình đến với công việc bếp chỉ vì tò mò, nhưng càng làm mình càng thấy thích cảm giác tự tay tạo ra một món ăn hoàn chỉnh.
            </p>

            <p>
              Mình là người khá vui vẻ, cởi mở và thích nói chuyện, nên những giờ làm việc cùng mọi người thường có rất nhiều tiếng cười. Có những hôm khách đông đến mức chẳng kịp thở, nhưng chỉ cần cả bếp cùng động viên nhau là mọi thứ lại trở nên nhẹ nhàng hơn. Mình cũng khá thích đùa và đôi khi tự biến những chuyện mệt mỏi thành một câu chuyện để cùng mọi người cười.
            </p>

            <p>
              Có lẽ vì thế mà mình luôn muốn những điều mình làm ra, dù là một chiếc Burger hay một câu chuyện nhỏ, đều mang theo một chút năng lượng tích cực. Đây cũng chính là lý do mình tạo nên góc nhỏ này — để kể về Burger, công việc và những điều thú vị của tuổi trẻ.
            </p>

            {/* Handwritten note on left */}
            <div className="pt-4 border-t border-cream-300">
              <span className="font-handwritten text-xl sm:text-2xl text-chili font-bold inline-block -rotate-2">
                “Từ một ý tưởng trên giảng đường đến một thương hiệu ẩm thực.”
              </span>
            </div>

            <div className="pt-1">
              <span className="font-handwritten text-xl sm:text-2xl text-charcoal/60 font-semibold block">
                Good Food Builds Better Connections
              </span>
            </div>
          </div>

          {/* Right Column: Full Body Founder Image (100% Uncropped) & Quote */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* The Founder Image Card (Entire Person Visible from Head to Shoes) */}
            <div className="relative rounded-3xl overflow-hidden bg-white shadow-2xl border-4 border-white group">
              <img
                src="./images/founder.jpg"
                alt="HU Founder - Toàn bộ người trong ảnh"
                className="w-full h-auto block object-contain transition-transform duration-700 ease-out group-hover:scale-[1.01]"
              />

              {/* Floating Badge */}
              <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm px-4 py-1.5 rounded-full shadow-md border border-cream-200">
                <span className="text-xs font-bold uppercase tracking-wider text-charcoal">
                  HU Founder
                </span>
              </div>
            </div>

            {/* Quote Card */}
            <div className="bg-[#FAF6EE] rounded-2xl p-6 sm:p-8 border border-[#EFE5D5] shadow-soft relative">
              <Quote className="w-8 h-8 text-chili/20 absolute top-4 right-4" />
              <p className="font-serif italic text-base sm:text-lg text-charcoal font-medium leading-relaxed">
                “Tôi không chỉ bán burger, tôi đang kể câu chuyện về đam mê của chính mình.”
              </p>
              <div className="mt-3 flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-widest text-chili">
                  — HU Founder
                </span>
                <span className="font-handwritten text-lg text-charcoal/60">
                  Crafted with passion
                </span>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ==================================================
          YELLOW HIGHLIGHT SECTION: HU ĐƯỢC TẠO NÊN TỪ
          ================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-cheddar rounded-3xl p-8 sm:p-12 lg:p-16 text-charcoal shadow-soft border border-cheddar-hover/20">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Headline */}
            <div className="lg:col-span-5 space-y-3">
              <span className="text-xs uppercase font-bold tracking-widest text-charcoal/70 block">
                HU ĐƯỢC TẠO NÊN TỪ
              </span>
              <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl uppercase tracking-wide leading-[0.95]">
                MỘT Ý TƯỞNG NHỎ. <br />
                <span className="text-chili">MỘT TÌNH YÊU LỚN.</span>
              </h2>
              <p className="text-sm sm:text-base text-charcoal/80 leading-relaxed pt-2">
                Bắt đầu từ những điều học được trên giảng đường, HU là nơi Marketing, sáng tạo và tình yêu F&amp;B chân chính gặp nhau.
              </p>
            </div>

            {/* Right 3 Items */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-6">
              
              {/* Item 1: Ý TƯỞNG */}
              <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 text-center shadow-sm border border-white/60 flex flex-col items-center card-hover-lift">
                <div className="w-14 h-14 rounded-full bg-cheddar/30 text-chili flex items-center justify-center mb-4 shadow-sm">
                  <Lightbulb className="w-7 h-7 stroke-[2.2]" />
                </div>
                <h3 className="font-heading text-2xl tracking-wide uppercase text-charcoal mb-2">
                  Ý TƯỞNG
                </h3>
                <p className="text-xs sm:text-sm text-charcoal/80 leading-relaxed font-medium">
                  Bắt đầu từ những điều được học trên giảng đường đại học.
                </p>
              </div>

              {/* Item 2: SÁNG TẠO */}
              <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 text-center shadow-sm border border-white/60 flex flex-col items-center card-hover-lift">
                <div className="w-14 h-14 rounded-full bg-cheddar/30 text-chili flex items-center justify-center mb-4 shadow-sm">
                  <Palette className="w-7 h-7 stroke-[2.2]" />
                </div>
                <h3 className="font-heading text-2xl tracking-wide uppercase text-charcoal mb-2">
                  SÁNG TẠO
                </h3>
                <p className="text-xs sm:text-sm text-charcoal/80 leading-relaxed font-medium">
                  Kết hợp hài hòa giữa Marketing, hình ảnh và trải nghiệm vị giác.
                </p>
              </div>

              {/* Item 3: ĐAM MÊ */}
              <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 text-center shadow-sm border border-white/60 flex flex-col items-center card-hover-lift">
                <div className="w-14 h-14 rounded-full bg-cheddar/30 text-chili flex items-center justify-center mb-4 shadow-sm">
                  <Heart className="w-7 h-7 stroke-[2.2]" />
                </div>
                <h3 className="font-heading text-2xl tracking-wide uppercase text-charcoal mb-2">
                  ĐAM MÊ
                </h3>
                <p className="text-xs sm:text-sm text-charcoal/80 leading-relaxed font-medium">
                  Biến tình yêu với thế giới F&amp;B thành một thương hiệu mang bản sắc riêng.
                </p>
              </div>

            </div>

          </div>

        </div>
      </section>

    </div>
  );
}
