"use client";

import { useEffect, useState } from "react";
import { AppHeader } from "@/components/app-header";
import { BookingScreen } from "@/features/landing/components/booking-screen";
import { EventsScreen } from "@/features/landing/components/events-screen";
import { FeedbackScreen } from "@/features/landing/components/feedback-screen";
import { GalleryScreen } from "@/features/landing/components/gallery-screen";
import { useTranslation } from "@/hooks/use-translation";
import { LandingCtaSection } from "@/features/landing/components/landing-cta-section";
import { LandingFooter } from "@/features/landing/components/landing-footer";
import { LandingHeroSection } from "@/features/landing/components/landing-hero-section";
import { LandingProcessSection } from "@/features/landing/components/landing-process-section";
import { LandingShowcaseSection } from "@/features/landing/components/landing-showcase-section";
import type { AppView } from "@/types/navigation.types";

export const LandingPage = () => {
  const { locale, messages } = useTranslation();
  const [activeView, setActiveView] = useState<AppView>("home");

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  const renderActiveView = () => {
    if (activeView === "events") {
      return <EventsScreen messages={messages} />;
    }

    if (activeView === "gallery") {
      return <GalleryScreen messages={messages} />;
    }

    if (activeView === "booking") {
      return <BookingScreen messages={messages} />;
    }

    if (activeView === "feedback") {
      return <FeedbackScreen messages={messages} />;
    }

    return (
      <>
        <LandingHeroSection content={messages.landing.hero} />
        <LandingProcessSection content={messages.landing.processSection} />
        <LandingShowcaseSection content={messages.landing.showcaseSection} />
        <LandingCtaSection content={messages.landing.ctaSection} />
        <LandingFooter content={messages.landing.footer} navigation={messages.navigation} />
      </>
    );
  };

  return (
    <div className="min-h-screen w-full overflow-hidden">
      <div id="top" />
      <AppHeader activeView={activeView} onNavigate={setActiveView} />
      {renderActiveView()}
    </div>
  );
};
