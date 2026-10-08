export const products = [
  {
    id: "classic-hu",
    name: "The Classic HU Burger",
    tagline: "Sau giờ học, mình lại về với gian bếp",
    category: "Bò Smash",
    isSignature: true,
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=1200&auto=format&fit=crop",
    fallbackImage: "/images/mockup_hero_burger.png",
    thumbnails: [
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?q=80&w=600&auto=format&fit=crop",
    ],
    description: `Mỗi ngày đi học về, mình lại thay đồ rồi bắt đầu ca làm trong bếp đến tận tối.
Có hôm khá mệt vì khách đông, bếp nóng và phải đứng suốt nhiều giờ.
Nhưng cũng có những lúc rất vui, như khi hoàn thành một chiếc Burger thật đẹp hay nghe một lời cảm ơn từ khách.
Nhìn một chiếc Burger đơn giản vậy thôi, nhưng phía sau nó là rất nhiều công sức và những câu chuyện nhỏ.
Mỗi ngày đi học, đi làm rồi trở về nhà, mình lại học thêm được một điều mới.
Có lẽ tuổi trẻ chính là những ngày bận rộn nhưng vẫn tìm được niềm vui trong những điều giản dị như thế`,
    longDescription: "",
    ingredients: [
      { name: "Thịt bò 100%", desc: "Tươi ngon, thượng hạng", icon: "Flame" },
      { name: "Phô mai Cheddar", desc: "Béo ngậy, tan chảy", icon: "Layers" },
      { name: "Xà lách thủy canh", desc: "Tươi sạch, giòn xanh", icon: "Leaf" },
      { name: "Vỏ bánh nướng bơ", desc: "Thơm bơ, vàng giòn", icon: "Sparkles" },
    ],
    timeline: [
      { step: "01", title: "Chuẩn bị nguyên liệu tươi", desc: "Chọn lọc kỹ càng, đảm bảo chất lượng và độ tươi mới mỗi sáng." },
      { step: "02", title: "Kỹ thuật Smash", desc: "Ép trực tiếp trên vỉ nóng ở nhiệt độ cao, tạo lớp vỏ cháy cạnh đậm đà." },
      { step: "03", title: "Hoàn thiện hoàn hảo", desc: "Kết hợp ngay khi còn nóng, giữ trọn vẹn kết cấu giòn mềm hòa quyện." },
    ]
  },
  {
    id: "melted-cheese",
    name: "HU Melted Cheese",
    tagline: "Một chút béo ngậy sau một ngày dài",
    category: "Phô mai",
    isSignature: true,
    image: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?q=80&w=1200&auto=format&fit=crop",
    thumbnails: [
      "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?q=80&w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1553979459-d2229ba7433b?q=80&w=600&auto=format&fit=crop",
    ],
    description: `Tan học xong, mình lại về bếp và bắt đầu một buổi tối quen thuộc với những chiếc Burger.
Có những hôm đứng bếp khá lâu, người mệt nhưng nhìn phô mai tan chảy trên chiếc Burger này lại thấy vui lạ.
Mình thích khoảnh khắc mọi nguyên liệu được xếp lại với nhau và trở thành một món ăn hoàn chỉnh.
Công việc có thể lặp lại mỗi ngày, nhưng mỗi ngày mình lại có thêm một câu chuyện nhỏ để nhớ.
Có lẽ niềm vui tuổi trẻ đôi khi chỉ đơn giản là làm việc mình thích và cố gắng tốt hơn một chút mỗi ngày.
Một chiếc Burger nóng hổi, một ngày dài đã qua, và mình lại có thêm một kỷ niệm để kể`,
    longDescription: "",
    ingredients: [
      { name: "Phô mai Cheddar kép", desc: "Gấp đôi lớp cheese vàng óng", icon: "Layers" },
      { name: "Bò Smash mọng nước", desc: "Cháy cạnh giòn, mềm ngọt trong", icon: "Flame" },
      { name: "Sốt kem bơ tỏi", desc: "Thơm nức, béo ngậy dịu", icon: "Sparkles" },
      { name: "Bánh Brioche bơ Pháp", desc: "Mềm mịn, vàng ươm hấp dẫn", icon: "Leaf" },
    ],
    timeline: [
      { step: "01", title: "Chuẩn bị nguyên liệu tươi", desc: "Cheddar bảo quản đúng nhiệt độ để đạt độ tan chảy lý tưởng." },
      { step: "02", title: "Kỹ thuật Smash & Phủ", desc: "Smash nhiệt cao kết hợp đậy vòm nhiệt giúp phô mai ôm trọn mặt thịt." },
      { step: "03", title: "Hoàn thiện hoàn hảo", desc: "Rưới sốt kem bơ ấm nóng trước khi gập bánh trao tới bạn." },
    ]
  },
  {
    id: "spicy-bbq",
    name: "Spicy BBQ Burger",
    tagline: "Vị cay nồng, bùng nổ cảm xúc.",
    category: "Bò Smash",
    isSignature: true,
    image: "https://images.unsplash.com/photo-1553979459-d2229ba7433b?q=80&w=1200&auto=format&fit=crop",
    thumbnails: [
      "https://images.unsplash.com/photo-1553979459-d2229ba7433b?q=80&w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=600&auto=format&fit=crop",
    ],
    description: "Vị cay nồng, bùng nổ cảm xúc. Sốt BBQ xông khói kết hợp ớt nướng và hành tây caramel tạo nên trải nghiệm đa tầng.",
    longDescription: "Một bản giao hưởng đầy nhiệt huyết. Sốt BBQ cay khói được ủ theo công thức riêng của HU, cân bằng hoàn hảo giữa vị ngọt của hành tây caramel hoá và vị cay nồng của hạt tiêu đen giã dập.",
    ingredients: [
      { name: "Sốt BBQ Khói thủ công", desc: "Hương gỗ sồi tự nhiên đậm đà", icon: "Flame" },
      { name: "Ớt Jalapeño nướng", desc: "Cay the kích thích vị giác", icon: "Sparkles" },
      { name: "Hành tây Caramel", desc: "Ngọt thanh tự nhiên", icon: "Layers" },
      { name: "Thịt bò nướng lửa", desc: "Đậm vị, thơm lừng khói than", icon: "Leaf" },
    ],
    timeline: [
      { step: "01", title: "Chuẩn bị nguyên liệu tươi", desc: "Hành tây xào chậm 45 phút để đạt màu nâu caramel thơm ngọt." },
      { step: "02", title: "Kỹ thuật Smash & Glaze", desc: "Quét sốt BBQ khói trực tiếp lên patty đang xèo xèo trên vỉ gang." },
      { step: "03", title: "Hoàn thiện hoàn hảo", desc: "Bổ sung lát ớt nướng tươi tạo điểm nhấn bùng nổ khi thưởng thức." },
    ]
  },
  {
    id: "truffle-mushroom",
    name: "Truffle Mushroom Burger",
    tagline: "Thanh tao, tinh tế, đậm vị nấm.",
    category: "Phô mai",
    isSignature: false,
    image: "https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?q=80&w=1200&auto=format&fit=crop",
    thumbnails: [
      "https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?q=80&w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=600&auto=format&fit=crop",
    ],
    description: "Thanh tao, tinh tế, đậm vị nấm. Sự kết hợp giữa nấm xào bơ thảo mộc và hương thơm truffle quý phái trên lớp phô mai béo ngậy.",
    longDescription: "Hương thơm quý phái từ nấm Truffle đen hòa cùng vị ngọt tự nhiên của nấm nâu áp chảo bơ tỏi. Một sự lựa chọn mang phong thái ẩm thực Âu thanh lịch, êm ái và sâu lắng.",
    ingredients: [
      { name: "Sốt Truffle đen", desc: "Hương thơm sang trọng quyến rũ", icon: "Sparkles" },
      { name: "Nấm mỡ xào bơ tỏi", desc: "Giữ trọn độ ngọt mọng tự nhiên", icon: "Leaf" },
      { name: "Phô mai Swiss tan mềm", desc: "Béo thanh, không ngấy", icon: "Layers" },
      { name: "Bò thượng hạng", desc: "Nướng chín tới, mềm ẩm", icon: "Flame" },
    ],
    timeline: [
      { step: "01", title: "Chuẩn bị nguyên liệu tươi", desc: "Nấm tươi được thái lát dày vừa phải để giữ trọn kết cấu mọng nước." },
      { step: "02", title: "Áp chảo bơ thảo mộc", desc: "Xào nhanh ở lửa lớn cùng bơ lạt Pháp và lá hương thảo tươi." },
      { step: "03", title: "Hoàn thiện hoàn hảo", desc: "Phủ sốt nấm Truffle đen bóng bẩy ngay trước khi đóng nắp bánh." },
    ]
  },
  {
    id: "crispy-chicken",
    name: "Crispy Chicken Burger",
    tagline: "Gà giòn rụm, tươi mát, đầy năng lượng.",
    category: "Gà giòn",
    isSignature: false,
    image: "https://images.unsplash.com/photo-1625813506062-0aeb1d7a094b?q=80&w=1200&auto=format&fit=crop",
    thumbnails: [
      "https://images.unsplash.com/photo-1625813506062-0aeb1d7a094b?q=80&w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=600&auto=format&fit=crop",
    ],
    description: "Gà giòn rụm, tươi mát, đầy năng lượng. Má đùi gà tẩm ướp thảo mộc chiên vàng giòn rụm, ăn cùng sốt mè cay mát lạnh.",
    longDescription: "Phần má đùi gà tươi ngon được tẩm ướp cùng sữa chua và gia vị thảo mộc suốt 12 tiếng. Lớp vỏ bột ngoài giòn rụm như tan ra, giữ lại từng thớ thịt gà ẩm mọng nước bên trong.",
    ingredients: [
      { name: "Má đùi gà tẩm bột giòn", desc: "Vỏ ngoài giòn tan, thịt mọng nước", icon: "Flame" },
      { name: "Bắp cải tím ngâm giòn", desc: "Thanh mát, cân bằng vị giác", icon: "Leaf" },
      { name: "Sốt Mù tạt Mật ong", desc: "Chua ngọt êm dịu, thơm lừng", icon: "Sparkles" },
      { name: "Bánh mì hạt mè", desc: "Thơm nức mùi bơ hạt mè", icon: "Layers" },
    ],
    timeline: [
      { step: "01", title: "Chuẩn bị nguyên liệu tươi", desc: "Má đùi tươi tẩm ướp thảo mộc tươi trong 12 giờ chuẩn nhiệt độ." },
      { step: "02", title: "Chiên ngập dầu kiểm soát nhiệt", desc: "Nhiệt độ 175°C chuẩn xác giúp lớp vỏ giòn rụm không ngấm dầu." },
      { step: "03", title: "Hoàn thiện hoàn hảo", desc: "Kẹp cùng xà lách tươi và sốt Honey Mustard lạnh kích thích vị giác." },
    ]
  },
  {
    id: "double-beef",
    name: "Double Beef Burger",
    tagline: "Hai lớp thịt, gấp đôi trải nghiệm.",
    category: "Bò Smash",
    isSignature: false,
    image: "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?q=80&w=1200&auto=format&fit=crop",
    thumbnails: [
      "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?q=80&w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=600&auto=format&fit=crop",
    ],
    description: "Hai lớp thịt, gấp đôi trải nghiệm. Nhân đôi niềm vui với hai tầng bò smash cháy cạnh xen kẽ hai lớp phô mai tan chảy.",
    longDescription: "Sự thăng hoa tột cùng của phong cách Smash Burger. Hai miếng patty ép chặt trên bề mặt vỉ gang siêu nóng, hai lớp cheddar tan chảy quyện chặt giữa từng tầng thịt, tạo nên độ đầy đặn và thỏa mãn tuyệt đối.",
    ingredients: [
      { name: "2 x Bò Smash thượng hạng", desc: "Gấp đôi độ đậm đà và giòn cạnh", icon: "Flame" },
      { name: "2 x Cheddar tan chảy", desc: "Bao phủ trọn vẹn cả hai lớp thịt", icon: "Layers" },
      { name: "Dưa chuột bao tử muối", desc: "Giòn giòn, vị chua thanh giải ngấy", icon: "Leaf" },
      { name: "Sốt HU Signature", desc: "Công thức gia vị bí truyền", icon: "Sparkles" },
    ],
    timeline: [
      { step: "01", title: "Chuẩn bị nguyên liệu tươi", desc: "Định lượng hai phần thịt bằng nhau, vo viên chuẩn kích thước." },
      { step: "02", title: "Smash kép đồng thời", desc: "Ép mỏng hai patty cùng lúc, lật mặt và phủ ngay hai lát cheddar." },
      { step: "03", title: "Hoàn thiện hoàn hảo", desc: "Chồng hai tầng thịt phô mai nóng hổi, kẹp vỏ bánh nướng thơm lừng." },
    ]
  }
];

export const philosophies = [
  {
    step: "01",
    title: "Nguyên liệu tươi ngon",
    subtitle: "Tươi sạch mỗi sớm mai",
    desc: "Chúng tôi chọn lọc rau hữu cơ, phô mai thượng hạng và thịt bò tươi mới mỗi ngày. Không đông lạnh dài ngày, không chất phụ gia công nghiệp.",
    icon: "Leaf",
  },
  {
    step: "02",
    title: "Chế biến thủ công",
    subtitle: "Bàn tay & Ngọn lửa",
    desc: "Từng miếng patty được smash trực tiếp trên vỉ gang ở nhiệt độ cao chuẩn xác, giữ trọn vẹn lớp vỏ ngoài giòn cháy cạnh và phần ruột mọng nước.",
    icon: "Flame",
  },
  {
    step: "03",
    title: "Hương vị nguyên bản",
    subtitle: "Tôn vinh độ ngon tự nhiên",
    desc: "Không che đậy bằng các loại gia vị nồng gắt. HU chú trọng làm nổi bật vị ngọt tự nhiên của thịt bò, vị béo thơm của bơ và độ giòn ngọt của rau.",
    icon: "Sparkles",
  }
];
