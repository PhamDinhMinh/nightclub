import type { AppMessages } from "@/types/i18n.types";

export const viMessages: AppMessages = {
  metadata: {
    appName: "Nightclub",
    appDescription:
      "Mẫu landing page hỗ trợ song ngữ, có section tái sử dụng và dùng lại cấu hình theme hiện có.",
  },
  navigation: {
    eyebrow: "Hệ thống sáng tạo cho nightlife",
    brand: "Nightclub Studio",
    description:
      "Trải nghiệm landing song ngữ được xây trên chính setup Next.js, Zustand và next-themes hiện tại.",
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
      eyebrow: "Ra mắt nhanh hơn",
      title: "Thiết kế, vận hành và quảng bá thương hiệu nightlife bằng một hệ thống mạch lạc.",
      description:
        "Nightclub Studio giúp đội ngũ venue biến chiến lược thành chiến dịch, sự kiện và trải nghiệm khách hàng mà vẫn giữ được sự đồng nhất hình ảnh.",
      announcement: "Tiếng Anh và tiếng Việt dùng chung một cấu trúc landing page.",
      primaryAction: {
        label: "Xem dịch vụ",
        href: "#services",
      },
      secondaryAction: {
        label: "Xem quy trình",
        href: "#workflow",
      },
      highlights: [
        "Section tái sử dụng",
        "Giao diện tương thích theme",
        "Nội dung quản lý từ file dịch",
      ],
      metrics: [
        {
          value: "48h",
          label: "Tốc độ ra chiến dịch",
          description: "Đi từ brief đến asset launch bằng một pipeline sáng tạo rõ ràng.",
        },
        {
          value: "2",
          label: "Ngôn ngữ hỗ trợ",
          description: "Chuyển giữa tiếng Anh và tiếng Việt mà không cần nhân đôi component.",
        },
        {
          value: "1",
          label: "Nguồn nội dung thống nhất",
          description:
            "Toàn bộ copy landing được quản lý trong file translation thay vì component.",
        },
      ],
    },
    featureSection: {
      eyebrow: "Dịch vụ",
      title: "Các section tái sử dụng cho landing page nightlife hiện đại.",
      description:
        "Mỗi section được tách thành component rõ ràng để landing page mở rộng dễ dàng mà không trộn nội dung, layout và logic tương tác.",
      items: [
        {
          title: "Định vị thương hiệu",
          description:
            "Xây dựng hướng sáng tạo rõ ràng cho campaign ra mắt, seasonal drop và chuỗi event resident.",
        },
        {
          title: "Hệ thống campaign",
          description:
            "Biến ý tưởng quảng bá thành format tái sử dụng cho social content, web touchpoint và thông điệp tại venue.",
        },
        {
          title: "Thiết kế trải nghiệm khách",
          description:
            "Kết nối chi tiết digital và physical để câu chuyện thương hiệu luôn có chủ đích.",
        },
      ],
    },
    processSection: {
      eyebrow: "Quy trình",
      title: "Quy trình gọn, ưu tiên cả tốc độ lẫn tính nhất quán.",
      description:
        "Bố cục landing cho thấy cách chiến lược, sản xuất và rollout luôn đi cùng nhau mà không làm phức tạp state phía client.",
      items: [
        {
          title: "Làm rõ brief",
          description:
            "Chốt audience, mục tiêu sự kiện và giới hạn sáng tạo trước khi bước vào sản xuất.",
        },
        {
          title: "Xây hệ thống",
          description:
            "Chuyển định hướng thành asset tái sử dụng, framework nội dung và layout đúng brand.",
        },
        {
          title: "Ra mắt chắc chắn",
          description:
            "Triển khai campaign với thông điệp song ngữ và giao diện đã sẵn sàng cho dark/light theme.",
        },
      ],
    },
    showcaseSection: {
      eyebrow: "Vì sao setup này hợp lý",
      title: "Landing page tận dụng đúng phần đang có thay vì dựng lại từ đầu.",
      description:
        "Theme provider, query provider và UI store hiện tại vẫn được giữ nguyên. Chỉ các phần còn thiếu cho landing và i18n mới được thêm vào.",
      items: [
        {
          title: "Giữ nguyên hỗ trợ dark và light theme",
          description:
            "Landing UI kế thừa token hiện tại nên hai chế độ vẫn đồng nhất về trải nghiệm thị giác.",
        },
        {
          title: "Mở rộng store thay vì tạo bản sao",
          description:
            "Locale được lưu trong chính UI store hiện có để giải pháp luôn gọn và đúng phạm vi.",
        },
        {
          title: "Section chạy hoàn toàn bằng translation",
          description:
            "Mọi chuỗi hiển thị trên landing đều đến từ dictionary để dễ bảo trì và thêm locale mới.",
        },
      ],
    },
    ctaSection: {
      title: "Sẵn sàng biến starter này thành marketing site chạy production?",
      description:
        "Cấu trúc hiện tại đã đủ chỗ cho thêm locale, kết nối CMS và mở rộng landing section mà không phải đổi kiến trúc theme hay provider.",
      primaryAction: {
        label: "Bắt đầu từ nền tảng này",
        href: "#top",
      },
      secondaryAction: {
        label: "Xem lại bố cục section",
        href: "#services",
      },
    },
  },
};
