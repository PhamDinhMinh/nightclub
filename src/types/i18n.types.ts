export type Locale = "en" | "vi";

export interface TranslationAction {
  label: string;
  href: string;
}

export interface TranslationNavItem {
  label: string;
  href: string;
}

export interface TranslationCardItem {
  title: string;
  description: string;
}

export interface TranslationEventCard extends TranslationCardItem {
  eyebrow: string;
  actionLabel: string;
}

export interface TranslationGalleryItem {
  alt: string;
  src: string;
}

export interface TranslationMetric {
  value: string;
  label: string;
  description: string;
}

export interface TranslationSectionContent {
  eyebrow: string;
  title: string;
  description: string;
}

export interface AppMessages {
  metadata: {
    appName: string;
    appDescription: string;
  };
  navigation: {
    brand: string;
    navItems: TranslationNavItem[];
    primaryAction: TranslationAction;
  };
  controls: {
    languageSwitcherLabel: string;
    themeToggleLabel: string;
    languages: Record<Locale, string>;
    themes: {
      light: string;
      dark: string;
    };
    menu: {
      open: string;
      close: string;
    };
  };
  screens: {
    events: {
      featuredLabel: string;
      featuredDate: string;
      featuredDescription: string;
      primaryAction: string;
      secondaryAction: string;
      heading: string;
      description: string;
      filters: string[];
      cards: Array<{
        month: string;
        tag: string;
        title: string;
        description: string;
        artist: string;
        action: string;
      }>;
    };
    gallery: {
      title: string;
      description: string;
      filters: string[];
      items: Array<{
        meta: string;
        title: string;
      }>;
    };
    booking: {
      eyebrow: string;
      title: string;
      description: string;
      packageTitle: string;
      drinkTitle: string;
      detailsTitle: string;
      packages: Array<{
        description: string;
      }>;
      fieldLabels: {
        date: string;
        guests: string;
        table: string;
        requests: string;
      };
      guestOptions: string[];
      placeholders: {
        table: string;
        requests: string;
      };
      submit: string;
      mapTitle: string;
      availability: string;
      legends: string[];
      policiesTitle: string;
      policies: string[];
    };
    feedback: {
      eyebrow: string;
      title: string;
      highlightedTitle: string;
      titleSuffix: string;
      description: string;
      contactCards: Array<{
        title: string;
        lines: string[];
      }>;
      socialLabels: string[];
      formTitle: string;
      formDescription: string;
      fields: {
        name: string;
        email: string;
        subject: string;
        message: string;
      };
      placeholders: {
        name: string;
        email: string;
        message: string;
      };
      subjects: Array<{
        value: string;
        label: string;
      }>;
      submit: string;
      sending: string;
      success: string;
      error: string;
      mapBadge: string;
      mapTitle: string;
      mapHighlightedTitle: string;
      mapImageAlt: string;
    };
  };
  landing: {
    hero: TranslationSectionContent & {
      announcement: string;
      primaryAction: TranslationAction;
      secondaryAction: TranslationAction;
      highlights: string[];
      metrics: TranslationMetric[];
    };
    featureSection: TranslationSectionContent & {
      items: TranslationCardItem[];
    };
    processSection: TranslationSectionContent & {
      primaryEvent: {
        badge: string;
        title: string;
        genre: string;
        artist: string;
        imageAlt: string;
      };
      items: TranslationEventCard[];
      actionLabel: string;
    };
    showcaseSection: TranslationSectionContent & {
      imageAlt: string;
      items: TranslationCardItem[];
    };
    ctaSection: {
      title: string;
      description: string;
      primaryAction: TranslationAction;
      secondaryAction: TranslationAction;
      items: TranslationGalleryItem[];
    };
    footer: {
      tagline: string;
      addressLabel: string;
      address: string;
      mapQuery: string;
      hoursLabel: string;
      hours: string;
      contactLabel: string;
      contact: string;
      quickLinksLabel: string;
      quickLinks: TranslationNavItem[];
      mapTitle: string;
      madeWith: string;
      copyright: string;
    };
  };
}
