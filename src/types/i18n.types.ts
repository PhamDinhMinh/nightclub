export type Locale = "en" | "vi";

export interface TranslationAction {
  label: string;
  href: string;
}

export interface TranslationCardItem {
  title: string;
  description: string;
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
    eyebrow: string;
    brand: string;
    description: string;
  };
  controls: {
    languageSwitcherLabel: string;
    themeToggleLabel: string;
    languages: Record<Locale, string>;
    themes: {
      light: string;
      dark: string;
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
      items: TranslationCardItem[];
    };
    showcaseSection: TranslationSectionContent & {
      items: TranslationCardItem[];
    };
    ctaSection: {
      title: string;
      description: string;
      primaryAction: TranslationAction;
      secondaryAction: TranslationAction;
    };
  };
}
