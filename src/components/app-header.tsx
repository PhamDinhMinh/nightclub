"use client";

import { LanguageSwitcher } from "@/components/language-switcher";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { useTranslation } from "@/hooks/use-translation";
import type { AppView } from "@/types/navigation.types";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const logoUrl = "https://www.gstatic.com/labs-code/stitch/stitch-placeholder-300x300.svg";

interface AppHeaderProps {
  activeView: AppView;
  onNavigate: (view: AppView) => void;
}

const isAppView = (view: string): view is AppView => {
  return ["home", "events", "gallery", "booking"].includes(view);
};

export const AppHeader = ({ activeView, onNavigate }: AppHeaderProps) => {
  const { messages } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const closeMenu = () => setIsMenuOpen(false);
  const handleToggleMenu = () => setIsMenuOpen((current) => !current);
  const handleNavigate = (view: string) => {
    if (isAppView(view)) {
      onNavigate(view);
      closeMenu();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };
  const handleHome = () => handleNavigate("home");
  const handlePrimaryAction = () => handleNavigate("booking");

  return (
    <header className="bg-card/90 border-border dark:bg-background/80 fixed top-0 z-50 w-full border-b shadow-sm backdrop-blur-xl dark:shadow-[0_0_20px_color-mix(in_srgb,var(--primary)_20%,transparent)]">
      <div className="mx-auto flex max-w-[1440px] items-center justify-between gap-4 px-8 py-2">
        <a
          className="flex min-w-0 items-center gap-3"
          href="#"
          aria-label={messages.navigation.brand}
          onClick={handleHome}
        >
          <img alt="" className="h-10 w-auto shrink-0" src={logoUrl} />
          <span className="font-display text-primary truncate text-2xl font-extrabold tracking-tight sm:text-[32px]">
            {messages.navigation.brand}
          </span>
        </a>

        <nav className="hidden items-center gap-6 text-sm font-semibold tracking-widest uppercase md:flex">
          {messages.navigation.navItems.map((item) => (
            <a
              className={[
                "border-b-2 pb-1 transition-colors",
                item.href === activeView
                  ? "border-primary text-primary"
                  : "text-foreground hover:text-primary border-transparent",
              ].join(" ")}
              href="#"
              key={item.href}
              onClick={() => handleNavigate(item.href)}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <a
            className="neon-glow-primary bg-primary text-primary-foreground inline-flex h-12 items-center justify-center rounded-full px-6 text-sm font-bold tracking-widest uppercase transition-transform hover:scale-105"
            href="#"
            onClick={handlePrimaryAction}
          >
            {messages.navigation.primaryAction.label}
          </a>
          <LanguageSwitcher />
          <ThemeToggle />
        </div>

        <Button
          aria-expanded={isMenuOpen}
          aria-label={isMenuOpen ? messages.controls.menu.close : messages.controls.menu.open}
          className="rounded-full md:hidden"
          onClick={handleToggleMenu}
          size="icon"
          type="button"
          variant="outline"
        >
          {isMenuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
        </Button>
      </div>

      {isMenuOpen && (
        <button
          aria-label={messages.controls.menu.close}
          className="bg-background/55 fixed inset-0 z-30 backdrop-blur-sm md:hidden"
          onClick={closeMenu}
          type="button"
        />
      )}

      <div
        className={[
          "border-primary/15 bg-card/95 fixed top-[76px] right-3 z-40 w-[min(20rem,calc(100vw-1.5rem))] overflow-hidden rounded-xl border shadow-2xl shadow-black/30 backdrop-blur-xl transition-all duration-200 md:hidden",
          isMenuOpen ? "translate-x-0 opacity-100" : "pointer-events-none translate-x-6 opacity-0",
        ].join(" ")}
      >
        <nav className="text-muted-foreground grid p-2 text-sm font-semibold tracking-widest uppercase">
          {messages.navigation.navItems.map((item) => (
            <a
              className="hover:bg-muted hover:text-foreground rounded-lg px-4 py-3 transition-colors"
              href="#"
              key={item.href}
              onClick={() => handleNavigate(item.href)}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="border-border/70 border-t p-3">
          <a
            className="neon-glow-primary bg-primary text-primary-foreground inline-flex h-11 w-full items-center justify-center rounded-full px-5 text-sm font-bold tracking-widest uppercase transition-transform hover:scale-[1.02]"
            href="#"
            onClick={handlePrimaryAction}
          >
            {messages.navigation.primaryAction.label}
          </a>
          <div className="mt-3 flex items-center justify-between gap-3">
            <LanguageSwitcher />
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  );
};
