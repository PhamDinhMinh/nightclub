"use client";

import { useEffect } from "react";
import { AppHeader } from "@/components/app-header";
import { useTranslation } from "@/hooks/use-translation";
import { LandingCtaSection } from "@/features/landing/components/landing-cta-section";
import { LandingFeatureSection } from "@/features/landing/components/landing-feature-section";
import { LandingHeroSection } from "@/features/landing/components/landing-hero-section";
import { LandingProcessSection } from "@/features/landing/components/landing-process-section";
import { LandingShowcaseSection } from "@/features/landing/components/landing-showcase-section";

export function LandingPage() {
  const { locale, messages } = useTranslation();

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  return (
    <main className="mx-auto flex min-h-screen w-full max-w-7xl flex-col px-5 py-6 sm:px-8 sm:py-8 lg:px-10">
      <div id="top" />
      <AppHeader />
      <LandingHeroSection content={messages.landing.hero} />
      <LandingFeatureSection content={messages.landing.featureSection} />
      <LandingProcessSection content={messages.landing.processSection} />
      <LandingShowcaseSection content={messages.landing.showcaseSection} />
      <LandingCtaSection content={messages.landing.ctaSection} />
    </main>
  );
}
