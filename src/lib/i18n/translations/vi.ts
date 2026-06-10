import type { AppMessages } from "@/types/i18n.types";

export const viMessages: AppMessages = {
  metadata: {
    appName: "Lunar Club",
    appDescription:
      "Lunar Club là điểm hẹn nightlife với DJ live, cocktail signature và không gian âm nhạc giàu năng lượng.",
  },
  navigation: {
    brand: "Lunar Club",
    navItems: [
      { label: "Trang chủ", href: "#top" },
      { label: "Đêm diễn", href: "#events" },
      { label: "Không gian", href: "#space" },
      { label: "Menu", href: "#menu" },
      { label: "Đặt bàn", href: "#booking" },
    ],
    primaryAction: {
      label: "Giữ chỗ tối nay",
      href: "#booking",
    },
  },
  controls: {
    languageSwitcherLabel: "Chuyển ngôn ngữ",
    themeToggleLabel: "Đổi giao diện",
    languages: {
      en: "Tiếng Anh",
      vi: "Tiếng Việt",
    },
    themes: {
      light: "Giao diện sáng",
      dark: "Giao diện tối",
    },
  },
  landing: {
    hero: {
      eyebrow: "Mở cửa từ 20:00 mỗi ngày",
      title: "Một đêm rực nhịp bass, ánh đèn và cocktail signature giữa trung tâm thành phố.",
      description:
        "Lunar Club mang đến line-up DJ chọn lọc, sân khấu ánh sáng sống động và lounge riêng cho những nhóm muốn tận hưởng đêm theo cách chỉn chu hơn.",
      announcement: "Thứ Sáu này: Neon Fever với resident DJ KAI và set guest lúc 23:30.",
      primaryAction: {
        label: "Đặt bàn VIP",
        href: "#booking",
      },
      secondaryAction: {
        label: "Xem lịch diễn",
        href: "#events",
      },
      highlights: ["DJ live hằng đêm", "Cocktail signature", "Khu VIP riêng tư"],
      metrics: [
        {
          value: "20:00",
          label: "Mở cửa",
          description: "Đón khách sớm cho dinner drink, group meetup và warm-up set.",
        },
        {
          value: "4",
          label: "Khu trải nghiệm",
          description: "Main floor, neon bar, private lounge và balcony nhìn xuống sân khấu.",
        },
        {
          value: "120+",
          label: "Món đồ uống",
          description: "Từ classic cocktail, mocktail đến bottle service cho bàn nhóm.",
        },
      ],
    },
    featureSection: {
      eyebrow: "Trải nghiệm",
      title: "Một venue được thiết kế cho những đêm muốn đi xa hơn một ly drink.",
      description:
        "Từ âm thanh, ánh sáng đến nhịp phục vụ tại bàn, mọi chi tiết đều được giữ gọn để bạn có thể bước vào và tận hưởng ngay.",
      items: [
        {
          title: "Main floor bùng nổ",
          description:
            "Hệ thống âm thanh công suất lớn, LED wall và ánh sáng chuyển động theo từng set nhạc.",
        },
        {
          title: "Neon cocktail bar",
          description:
            "Menu signature cân bằng giữa vị mạnh, hương trái cây nhiệt đới và những phiên bản low-alcohol dễ uống.",
        },
        {
          title: "Private lounge",
          description:
            "Không gian riêng cho sinh nhật, after-party và nhóm khách muốn có host phục vụ sát bàn.",
        },
      ],
    },
    processSection: {
      eyebrow: "Đêm diễn",
      title: "Line-up mỗi tuần luôn có điểm nhấn riêng.",
      description:
        "Lunar Club xoay lịch theo từng mood để bạn chọn đúng đêm: hip-hop, house, open format hoặc showcase khách mời.",
      items: [
        {
          title: "Thứ Năm - RnB Room",
          description:
            "Không khí gần gũi, nhịp chậm hơn, phù hợp để bắt đầu cuối tuần bằng cocktail và vocal set.",
        },
        {
          title: "Thứ Sáu - Neon Fever",
          description: "Đêm đông nhất tuần với EDM, bass house và guest DJ xuất hiện sau 23:30.",
        },
        {
          title: "Thứ Bảy - After Midnight",
          description:
            "Open format kéo dài đến khuya, dành cho nhóm đặt bàn và những ai thích năng lượng cao.",
        },
      ],
    },
    showcaseSection: {
      eyebrow: "Không gian",
      title: "Ánh sáng đẹp, âm thanh dày, góc ngồi đủ riêng tư.",
      description:
        "Venue được chia thành nhiều lớp trải nghiệm để nhóm nhỏ, couple hay bàn đông đều có vị trí hợp mood.",
      items: [
        {
          title: "Balcony view",
          description:
            "Nhìn trọn main floor từ tầng lửng, hợp cho nhóm muốn quan sát sân khấu mà vẫn thoải mái trò chuyện.",
        },
        {
          title: "Bottle service",
          description:
            "Host chuẩn bị bàn, mixer, đá và garnish để nhóm có trải nghiệm liền mạch từ lúc đến.",
        },
        {
          title: "Photo corner",
          description:
            "Các mảng đèn neon và gương chrome tạo khung hình rõ chất club mà không cần setup thêm.",
        },
      ],
    },
    ctaSection: {
      title: "Tối nay đi đâu? Giữ trước một bàn ở Lunar Club.",
      description:
        "Đội host sẽ xác nhận số lượng khách, khu vực ngồi và gợi ý combo đồ uống phù hợp với mood của nhóm.",
      primaryAction: {
        label: "Đặt bàn ngay",
        href: "#booking",
      },
      secondaryAction: {
        label: "Xem menu",
        href: "#menu",
      },
    },
    footer: {
      tagline:
        "Điểm hẹn nightlife tại Quảng Xương với âm nhạc, ánh sáng và những buổi tối đáng nhớ.",
      addressLabel: "Địa chỉ",
      address: "Phạm Tiến hộp đêm, Ngọc Nhị, Quảng Xương, Thanh Hóa, Việt Nam",
      hoursLabel: "Giờ mở cửa",
      hours: "20:00 - 02:00, hằng ngày",
      contactLabel: "Liên hệ",
      contact: "Hotline đặt bàn: 0345864328",
      quickLinksLabel: "Đi nhanh",
      mapTitle: "Bản đồ Lunar Club",
      copyright: "Lunar Club. All rights reserved.",
    },
  },
};
