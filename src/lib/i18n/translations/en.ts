import type { AppMessages } from "@/types/i18n.types";

export const enMessages: AppMessages = {
  metadata: {
    appName: "Nightclub",
    appDescription:
      "Landing page starter with bilingual support, reusable sections, and existing theme integration.",
  },
  navigation: {
    eyebrow: "Creative nightlife systems",
    brand: "Nightclub Studio",
    description:
      "A bilingual landing experience built on the existing Next.js, Zustand, and next-themes setup.",
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
      eyebrow: "Launch faster",
      title: "Design, operate, and market nightlife brands from one polished system.",
      description:
        "Nightclub Studio helps venue teams turn strategy into campaigns, events, and guest experiences without losing visual consistency.",
      announcement: "English and Vietnamese are available with the same landing structure.",
      primaryAction: {
        label: "Explore services",
        href: "#services",
      },
      secondaryAction: {
        label: "See the workflow",
        href: "#workflow",
      },
      highlights: [
        "Reusable landing sections",
        "Theme-aware interface",
        "Translation-first content",
      ],
      metrics: [
        {
          value: "48h",
          label: "Campaign turnaround",
          description: "Move from brief to launch assets with a predictable creative pipeline.",
        },
        {
          value: "2",
          label: "Supported languages",
          description: "Switch between English and Vietnamese without duplicating components.",
        },
        {
          value: "1",
          label: "Unified source of truth",
          description: "All landing copy is maintained in translation files instead of components.",
        },
      ],
    },
    featureSection: {
      eyebrow: "Services",
      title: "Reusable sections for a modern nightlife landing page.",
      description:
        "Each section is split into focused components so the page can grow without mixing copy, layout, and interactions.",
      items: [
        {
          title: "Brand positioning",
          description:
            "Shape a clear creative direction for launches, seasonal drops, and resident event series.",
        },
        {
          title: "Campaign systems",
          description:
            "Turn promotional ideas into reusable formats across social content, web touchpoints, and on-site messaging.",
        },
        {
          title: "Guest experience design",
          description:
            "Coordinate digital and physical details so the venue story feels intentional at every touchpoint.",
        },
      ],
    },
    processSection: {
      eyebrow: "Workflow",
      title: "A lean process that respects both speed and consistency.",
      description:
        "The landing layout highlights how strategy, production, and rollout stay aligned without adding extra client-side complexity.",
      items: [
        {
          title: "Clarify the brief",
          description:
            "Define audience, event intent, and creative constraints before production starts.",
        },
        {
          title: "Build the system",
          description:
            "Translate the direction into reusable assets, copy frameworks, and on-brand layouts.",
        },
        {
          title: "Launch with confidence",
          description:
            "Ship campaigns with bilingual messaging and theme-aware presentation already in place.",
        },
      ],
    },
    showcaseSection: {
      eyebrow: "Why this setup works",
      title: "The page reuses what the project already had instead of starting over.",
      description:
        "The existing theme provider, query provider, and UI store remain in place. Only the missing landing and i18n pieces were added.",
      items: [
        {
          title: "Existing dark and light theme support",
          description:
            "The landing UI inherits the current token-based styling so both modes stay visually consistent.",
        },
        {
          title: "Store extension instead of duplication",
          description:
            "Locale selection lives in the current UI store, which keeps the implementation lightweight.",
        },
        {
          title: "Translation-driven sections",
          description:
            "Every visible string on the landing experience comes from locale dictionaries for easier maintenance.",
        },
      ],
    },
    ctaSection: {
      title: "Ready to turn the starter into a production-ready marketing site?",
      description:
        "The current structure is prepared for more locales, CMS integration, and additional landing sections without changing the theme or provider architecture.",
      primaryAction: {
        label: "Start with this foundation",
        href: "#top",
      },
      secondaryAction: {
        label: "Review the section layout",
        href: "#services",
      },
    },
  },
};
