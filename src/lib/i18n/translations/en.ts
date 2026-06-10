import type { AppMessages } from "@/types/i18n.types";

export const enMessages: AppMessages = {
  metadata: {
    appName: "Lunar Club",
    appDescription:
      "Lunar Club is a nightlife venue with live DJs, signature cocktails, and high-energy music rooms.",
  },
  navigation: {
    brand: "Lunar Club",
    navItems: [
      { label: "Home", href: "#top" },
      { label: "Events", href: "#events" },
      { label: "Space", href: "#space" },
      { label: "Menu", href: "#menu" },
      { label: "Booking", href: "#booking" },
    ],
    primaryAction: {
      label: "Reserve tonight",
      href: "#booking",
    },
  },
  controls: {
    languageSwitcherLabel: "Language switcher",
    themeToggleLabel: "Toggle theme",
    languages: {
      en: "English",
      vi: "Vietnamese",
    },
    themes: {
      light: "Light mode",
      dark: "Dark mode",
    },
  },
  landing: {
    hero: {
      eyebrow: "Open daily from 8 PM",
      title: "A night of bass, light, and signature cocktails in the heart of the city.",
      description:
        "Lunar Club brings curated DJ lineups, immersive stage lighting, and private lounges for groups that want a sharper way to spend the night.",
      announcement: "This Friday: Neon Fever with resident DJ KAI and a guest set at 11:30 PM.",
      primaryAction: {
        label: "Book a VIP table",
        href: "#booking",
      },
      secondaryAction: {
        label: "See events",
        href: "#events",
      },
      highlights: ["Live DJs nightly", "Signature cocktails", "Private VIP zones"],
      metrics: [
        {
          value: "8 PM",
          label: "Doors open",
          description: "Arrive early for dinner drinks, group meetups, and warm-up sets.",
        },
        {
          value: "4",
          label: "Experience zones",
          description: "Main floor, neon bar, private lounge, and a balcony above the stage.",
        },
        {
          value: "120+",
          label: "Drinks",
          description: "Classic cocktails, mocktails, and bottle service for group tables.",
        },
      ],
    },
    featureSection: {
      eyebrow: "Experience",
      title: "A venue designed for nights that go beyond one drink.",
      description:
        "From sound and lighting to table service rhythm, every detail is tuned so guests can step in and enjoy the night immediately.",
      items: [
        {
          title: "High-energy main floor",
          description:
            "A powerful sound system, LED wall, and lighting that shifts with every DJ set.",
        },
        {
          title: "Neon cocktail bar",
          description:
            "A signature menu balancing strong classics, tropical notes, and easy low-alcohol pours.",
        },
        {
          title: "Private lounge",
          description:
            "A reserved space for birthdays, after-parties, and groups that want dedicated table hosts.",
        },
      ],
    },
    processSection: {
      eyebrow: "Events",
      title: "Every weekly lineup has its own mood.",
      description:
        "Lunar Club rotates nights across hip-hop, house, open format, and guest showcases so you can pick the right energy.",
      items: [
        {
          title: "Thursday - RnB Room",
          description:
            "A warmer room with slower grooves, cocktails, and vocal sets to ease into the weekend.",
        },
        {
          title: "Friday - Neon Fever",
          description: "The busiest night of the week with EDM, bass house, and guest DJs after 11:30 PM.",
        },
        {
          title: "Saturday - After Midnight",
          description:
            "Open format until late, made for table groups and anyone chasing a high-energy room.",
        },
      ],
    },
    showcaseSection: {
      eyebrow: "Space",
      title: "Beautiful light, deep sound, and seating that still feels private.",
      description:
        "The venue is divided into layered zones so small groups, couples, and larger tables can find the right mood.",
      items: [
        {
          title: "Balcony view",
          description:
            "Take in the full main floor from above while keeping enough distance for conversation.",
        },
        {
          title: "Bottle service",
          description:
            "Hosts prepare the table, mixers, ice, and garnish so your group can stay in the moment.",
        },
        {
          title: "Photo corner",
          description:
            "Neon panels and chrome mirrors create a strong club look without extra setup.",
        },
      ],
    },
    ctaSection: {
      title: "Where are you going tonight? Hold a table at Lunar Club.",
      description:
        "Our host team will confirm guest count, seating zone, and the drink set that fits your group mood.",
      primaryAction: {
        label: "Book a table",
        href: "#booking",
      },
      secondaryAction: {
        label: "View menu",
        href: "#menu",
      },
    },
    footer: {
      tagline:
        "A nightlife stop in Quang Xuong for music, lighting, cocktails, and memorable late nights.",
      addressLabel: "Address",
      address: "Pham Tien nightclub, Ngoc Nhi, Quang Xuong, Thanh Hoa, Vietnam",
      hoursLabel: "Opening hours",
      hours: "8 PM - 2 AM, daily",
      contactLabel: "Contact",
      contact: "Table hotline: 0345864328",
      quickLinksLabel: "Quick links",
      mapTitle: "Lunar Club map",
      copyright: "Lunar Club. All rights reserved.",
    },
  },
};
