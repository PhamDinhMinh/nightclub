import type { AppMessages } from "@/types/i18n.types";

export const viMessages: AppMessages = {
  metadata: {
    appName: "PhamTienClub",
    appDescription:
      "PhamTienClub là điểm hẹn nightlife cao cấp với năng lượng neon, âm thanh nhập vai, dịch vụ VIP và trải nghiệm âm nhạc độc quyền.",
  },
  navigation: {
    brand: "PhamTienClub",
    navItems: [
      { label: "Trang chủ", href: "home" },
      { label: "Sự kiện", href: "events" },
      { label: "Thư viện ảnh", href: "gallery" },
      { label: "VIP/Đặt bàn", href: "booking" },
    ],
    primaryAction: {
      label: "Đặt ngay",
      href: "booking",
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
    menu: {
      open: "Mở menu",
      close: "Đóng menu",
    },
  },
  screens: {
    events: {
      featuredLabel: "Sự kiện nổi bật",
      featuredDate: "Thứ Bảy này",
      featuredDescription:
        "Tham gia một đêm bùng nổ giác quan tại PhamTienClub cùng headliner quốc tế DJ AXON. Light show 360° và các gói bottle service cao cấp đã sẵn sàng.",
      primaryAction: "Mua vé",
      secondaryAction: "Bàn VIP",
      heading: "Những đêm sắp tới",
      description:
        "Các trải nghiệm âm nhạc được tuyển chọn cho số ít khách thật sự biết tận hưởng.",
      filters: ["Tất cả", "Techno", "House", "Khách mời đặc biệt"],
      cards: [
        {
          month: "Th10",
          tag: "Nghi thức nửa đêm",
          title: "GIẤC MƠ SẮC MÀU",
          description:
            "Một hành trình melodic techno cùng resident master DJ KAIRO và visual artist LUMA.",
          artist: "DJ KAIRO",
          action: "Vào danh sách khách",
        },
        {
          month: "Th10",
          tag: "Đêm nhạc underground",
          title: "SẢNH HỒNG NGOẠI",
          description:
            "Tái định nghĩa bass culture với một đêm năng lượng cao, local legends và sound design thử nghiệm.",
          artist: "VOX POPULI",
          action: "Mua vé",
        },
        {
          month: "Th10",
          tag: "Halloween đặc biệt",
          title: "DẠ TIỆC OBSIDIAN",
          description:
            "Đêm masquerade thường niên tại PhamTienClub. Dress code: Onyx & Silver. Headliner bí mật lộ diện lúc nửa đêm.",
          artist: "KHÁCH MỜI BÍ MẬT",
          action: "Danh sách chờ",
        },
        {
          month: "Th11",
          tag: "House vocal",
          title: "BUỒNG VANG",
          description:
            "Vocal giàu cảm xúc gặp nhịp house dày lực trong một đêm tập trung vào sự tinh khiết của giọng hát.",
          artist: "ELARA BLU",
          action: "Mua vé",
        },
        {
          month: "Th11",
          tag: "Thứ Ba VIP",
          title: "NHUNG LỎNG",
          description:
            "Cocktail curation độc quyền cùng downtempo groove, một điểm thoát giữa tuần cho khách thành viên.",
          artist: "LO-FI JAY",
          action: "Giữ chỗ",
        },
        {
          month: "Th11",
          tag: "Live concept",
          title: "SÓNG SYNTH LIVE",
          description:
            "Live hardware performance bởi SYNTH-A, khám phá gốc rễ electronic thập niên 80 theo tinh thần hiện đại.",
          artist: "SYNTH-A",
          action: "Mua vé",
        },
      ],
    },
    gallery: {
      title: "Hình ảnh PhamTien",
      description:
        "Một lát cắt của linh hồn neon-noir tại PHAMTIENCLUB. Cảm nhận năng lượng, con người và nhịp đập của màn đêm.",
      filters: ["Tất cả khoảnh khắc", "Sàn nhảy", "VIP Lounge", "Mixology", "DJ"],
      items: [
        { meta: "Sàn nhảy / 02:44", title: "Năng lượng đỉnh PhamTien" },
        { meta: "Bar / Signature", title: "Neon Nectar" },
        { meta: "Main Stage / Khách mời", title: "Nhịp đập PhamTien" },
        { meta: "VIP / The Obsidian Room", title: "Riêng tư độc quyền" },
        { meta: "Kỹ thuật / Chính xác", title: "Nghệ thuật âm thanh" },
        { meta: "Sự kiện / Midnight Drop", title: "Ký ức ánh vàng" },
      ],
    },
    booking: {
      eyebrow: "Trải nghiệm độc quyền",
      title: "Đặt bàn VIP",
      description:
        "Nâng đêm của bạn lên một tầng trải nghiệm khác. Giữ không gian riêng giữa nhịp đập PhamTienClub. Số lượng bàn giới hạn.",
      packageTitle: "Chọn gói bàn",
      drinkTitle: "Menu đồ uống",
      detailsTitle: "Thông tin đặt bàn",
      packages: [
        { description: "Vị trí bàn đẹp, bao gồm 1 chai và 4 vé khách mời." },
        { description: "Quyền vào balcony VIP, 2 chai premium và 8 vé khách mời." },
        { description: "Booth cạnh main stage, concierge riêng và guest list không giới hạn." },
      ],
      fieldLabels: {
        date: "Chọn ngày",
        guests: "Số lượng khách",
        table: "Bàn / booth mong muốn",
        requests: "Yêu cầu đặc biệt",
      },
      guestOptions: ["1-4 khách", "5-8 khách", "9-12 khách", "12+ khách (báo giá riêng)"],
      placeholders: {
        table: "VD: V-04 (xem sơ đồ)",
        requests: "Sinh nhật, loại rượu muốn dùng, giờ đến...",
      },
      submit: "Gửi yêu cầu đặt bàn",
      mapTitle: "Sơ đồ club",
      availability: "Còn bàn trực tiếp",
      legends: ["VIP Diamond", "Đã đặt"],
      policiesTitle: "Quy định VIP",
      policies: [
        "Dress code: lịch sự, thời trang. Ban quản lý có quyền quyết định cuối cùng.",
        "Tất cả khách trong bàn cần đủ 21+ và có giấy tờ tùy thân.",
        "Mức chi tiêu tối thiểu áp dụng cho mọi đặt bàn.",
      ],
    },
  },
  landing: {
    hero: {
      eyebrow: "Nightlife venue cao cấp",
      title: "TRẢI NGHIỆM PhamTien ĐỈNH CAO",
      description:
        "Bước vào thế giới nơi neon chuyển động trong không khí và từng nhịp beat trở thành một ký ức. Tận hưởng sự độc quyền ở đỉnh cao cùng PhamTienClub.",
      announcement: "Cuộn để khám phá",
      primaryAction: {
        label: "Đặt bàn của bạn",
        href: "#booking",
      },
      secondaryAction: {
        label: "Xem lịch diễn",
        href: "#events",
      },
      highlights: [],
      metrics: [],
    },
    featureSection: {
      eyebrow: "Tinh thần PhamTien",
      title: "Đắm chìm giác quan vượt mọi giới hạn",
      description:
        "Mỗi chi tiết đều được chỉnh cho một đêm cao cấp: âm thanh dày, hình ảnh chuyển động và cocktail giàu tính trình diễn.",
      items: [
        {
          title: "Âm thanh hiện đại",
          description:
            "Âm thanh không gian tạo nên trải nghiệm vật lý mạnh mẽ, chuyển động cùng từng set nhạc.",
        },
        {
          title: "Nghệ thuật thị giác động",
          description:
            "Mapping kỹ thuật số và ánh sáng kinetic biến đổi không gian theo năng lượng của sàn nhảy.",
        },
        {
          title: "Mixology thủ công",
          description:
            "Đội bartender tạo nên cocktail signature với khói, ánh sáng và nhịp phục vụ chỉn chu.",
        },
      ],
    },
    processSection: {
      eyebrow: "Lineup tối nay",
      title: "Lineup tối nay",
      description: "Đừng bỏ lỡ set nhạc độc quyền nhất tháng tại PhamTienClub.",
      actionLabel: "Xem tất cả sự kiện",
      primaryEvent: {
        badge: "Đang diễn: 22:00",
        title: "Cyberpunk Sessions feat. X-Neon",
        genre: "Melodic techno",
        artist: "DJ X-Neon + khách mời",
        imageAlt: "DJ biểu diễn trong ánh neon hồng và xanh cyan.",
      },
      items: [
        {
          eyebrow: "Vé vào cửa",
          title: "Ladies Night",
          description: "Tặng drink cho nữ đến nửa đêm. Bao gồm quyền vào khu lounge riêng.",
          actionLabel: "Vào guest list",
        },
        {
          eyebrow: "Độc quyền VIP",
          title: "Bottle Service",
          description: "Chỉ còn 3 bàn cho main event tối nay. Rượu premium và host riêng.",
          actionLabel: "Giữ chỗ ngay",
        },
      ],
    },
    showcaseSection: {
      eyebrow: "Tinh thần PhamTien",
      title: "Đắm chìm giác quan vượt mọi giới hạn",
      description:
        "Một không gian nightlife tinh gọn từ âm thanh, ánh sáng, dịch vụ và nguồn năng lượng chạm ngay khi bước vào.",
      imageAlt:
        "Quầy bar nightclub cao cấp với chai rượu được chiếu neon và bề mặt tối phản chiếu.",
      items: [
        {
          title: "Âm thanh hiện đại",
          description: "Spatial audio cao cấp tạo nên trải nghiệm club sắc nét và giàu lực.",
        },
        {
          title: "Nghệ thuật thị giác động",
          description: "Hệ đèn kinetic định hình lại căn phòng mỗi giờ bằng chuyển động neon.",
        },
        {
          title: "Mixology thủ công",
          description:
            "Cocktail signature được pha bằng nguyên liệu cao cấp và trình bày giàu tính sân khấu.",
        },
      ],
    },
    ctaSection: {
      title: "Thư viện ảnh",
      description:
        "Một lát cắt của những đêm làm nên chúng tôi. Cảm nhận năng lượng, con người và nhịp đập PhamTienClub.",
      primaryAction: {
        label: "Theo dõi Instagram",
        href: "#gallery",
      },
      secondaryAction: {
        label: "Đặt bàn của bạn",
        href: "#booking",
      },
      items: [
        {
          alt: "Sàn nhảy đông người dưới ánh strobe đỏ.",
          src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDlws8Vsb3IhEYVitTpCm3SG3rheicZsftVYF9MkshHlwWBs-xfFZj-defTPio37VB5Me5iOISo6ocYDkez0_Y7siEgQJEwegnFB4788mW03VxFARV2ONQ_z0fYm6-ehC-_a8A7WFkOq0-fIxenkfHxRZ8bgTmpsFEbt6LVS1QbfDc1C4MG70VjNp8PqXqy3FTswnuO-Gzbu3JgLg_DwKYZn0rJnpa9rAQpwYgGew4mG2NoAJfHBDzXv_kZpYXhRhmAvCepZf_sqBM",
        },
        {
          alt: "Cocktail trên quầy bar phát sáng xanh.",
          src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCR2MzQVIOa_U3yxd85qlsoeBPA0HnWLZi5UoKHg2IesbezGdtV76hZ_v7vXLCk2iCkJegdQr02TcGYzB5-b-aItHjSrHxsX2pnSy6VHyQY3oYS3VmNYBt_a22YH6FGBAP4a-I382Q3rzJfeMH9wH64KztyPtAyQTOkBiuoZ5xWhQKa8CFwcXsQoP_NIa4cB_-IetWzAq85bLC0VzKWS4R7IL3FhQEYElpbjNcklD2Bf2IKguw00owhzRpjnsZe1VrXzsH5HhjurbQ",
        },
        {
          alt: "Tay DJ đang mix trên bàn điều khiển trong booth tối.",
          src: "https://lh3.googleusercontent.com/aida-public/AB6AXuD_nfEMOTMfONqN1mAuM57i1PfIoy_bWYxdfJfEBkzfLSXfO3KtM-HIWlZyBYjtLFGBMdnltUbUjzAeFQfrM58FBKm7fC-rFjqid69jhOs8TOj6B5ZKbBjUWLCAaSfsaEwGK7lgJLsEj4pOH_n4c9SfDOdycHdFefCBX2ibUzAhcXtacP8Hv4aSRTXFImxyq6Q1NlQaBuFkq0mSs10xbTK4atSl5qEYEhZeJId4I4SSSIXsTd248AKrChXAgPmObam_nj-CAS7tCU4",
        },
        {
          alt: "Khách VIP nhảy trong booth riêng.",
          src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBdG8pS-wYlTLW09hpH8I_30GfmfKZUj7dhNAPncVxBsZgJy7J_2gkbC1doIbQTjJyx3LdzP7GBBtIGslhERGq-i7BaLHFZ33sQkfreQsDdTsJoiLmlxwZu3VzUlBNBOYdsphoFWwjIiuzifc1ZQ3iTEp_VcbMrYpOIcRs3sQrYJxUoHRTTG-LpOFI9lR20ovzb5wlV0_IoYMD28hYD-2EgWEF4KTKqWyOU2gOkdRCoKUd6fRV5rr7LhnV1fp_mPLLOkdsjDt67xXM",
        },
        {
          alt: "Trần nightclub với ánh sáng hình học neon.",
          src: "https://lh3.googleusercontent.com/aida-public/AB6AXuB9RZveL7M5HKkEIZrC2impbaFAlZhU5JIFkqVT0z7WOz2JePErh_8nVE7Py9qWxMvff1-d5VOYWskSo8IA5rGfjHl3zjSj0F8Aohw3guHy424Dnfym-HcJvOtco08F_AxF9Ms5m1CyPjJzGYr7CErzBnxuOZkV2vRofCwehwrzCOZomOOXrVE0dYNnLAKb0iUmT1MGhxGokZ5QGcE-Pmk6k4S_1ZM54GFsU1inZywvu3aYjkEOYpotEIIW_nTroHUfmTYM1UNrcLw",
        },
        {
          alt: "Bóng performer giữa ánh sáng sân khấu.",
          src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAp7-JMezyNOoCZQXZjnvdb2cpjJFnS4rj8am6a_wIt2H_gL7QVMET0EwKEiIxsuYFPwISdJYN_XsNKUoHnfy-mhofrwP5Tg5knQAm5m3jfKPr2H2D_mkVqu8IYYmjW6StPlIQHRtvuf4dgGg9h34rtJgKfx4vGfN2TggFyJKKljZGBjLLs4pyNF9jbmwbCx6Dn-pEAAu_-zzLeCIdLH4ErDPuz3YXG6ZL0CvQARv1zX-PAIq9j9Del2BEaK91-D4uZvC3FKl7HpyE",
        },
        {
          alt: "Bottle service được đưa tới bàn VIP.",
          src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBrISHMpN1f_1oPqah5iHzQdF5gjmeaG3EJezSthYDgaaS3FZt-TmO5CCbVNVb6UqME14dC_wCJWYVZSVNYhQWFOz-qpUFXc9RsWuHFTcbPX6EfxgWJr56k-C8ADBQMzQ3vy-5AOkvinXGVx1vBsWz89kljWbKhuray0W9o9Fu0-qXDwnf1lDT5eUOVK5WVjnHKOdOYnn6OKRf9T-YHuj79kfpBzzcWFzZ3P1ogRhCGZo0yByOzXxuQf0RN1VnUC5dzl7edapzlpLQ",
        },
        {
          alt: "Góc nhìn từ trên xuống sàn nhảy đông người dưới ánh tím.",
          src: "https://lh3.googleusercontent.com/aida-public/AB6AXuC3UdmK8I3vz3rAx05s6JTTnCu4s8lsiHDilJRA9DUMvqjJ0HP0FMUX3Z1rpp51SgwCjadXpWlL0Cc8_ytSW5ubvvy_58wILpgvbzNy-emOL5VkwwkoHe5vcSLaZeVc5RMe18VVl0F5uzKrv9_OsXla1T-tQ93ceJTYTGmDLkzumiozGWFzQOM913yrgQxJpiRRu4547q30U25a8_CNLDQ3j4hp0S2HoQvde5gPWjz6PdP_MT1Ie1pN_wi-kh9x-Ul7fOSsn_oaBxw",
        },
      ],
    },
    footer: {
      tagline: "Điểm đến cao cấp cho nightlife và các trải nghiệm âm nhạc độc quyền.",
      addressLabel: "Địa điểm",
      address: "Phạm Tiến hộp đêm, Ngọc Nhị, Quảng Xương, Thanh Hoa, Vietnam",
      mapQuery: "Phạm Tiến hộp đêm Ngọc Nhị Quảng Xương Thanh Hoa Vietnam",
      hoursLabel: "Giờ hoạt động",
      hours: "THỨ TƯ - CHỦ NHẬT | 22:00 - 05:00",
      contactLabel: "Liên hệ",
      contact: "phamminh030801@gmail.com | 0386653135",
      quickLinksLabel: "Điều hướng",
      quickLinks: [
        { label: "Chính sách bảo mật", href: "#top" },
        { label: "Điều khoản dịch vụ", href: "#top" },
        { label: "Liên hệ", href: "#booking" },
        { label: "Giờ mở cửa", href: "#booking" },
      ],
      mapTitle: "Bản đồ PhamTienClub",
      madeWith: "LÀM BẰNG TÌNH YÊU CHO MÀN ĐÊM",
      copyright: "2024 PHAMTIENCLUB. ALL RIGHTS RESERVED.",
    },
  },
};
