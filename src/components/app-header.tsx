"use client";

import { LanguageSwitcher } from "@/components/language-switcher";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { useTranslation } from "@/hooks/use-translation";
import { Martini, Menu, X } from "lucide-react";
import { useState } from "react";

export function AppHeader() {
  const { messages } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="border-border/70 bg-card/92 sticky top-3 z-50 rounded-2xl border px-3 py-3 shadow-lg shadow-black/5 backdrop-blur-xl lg:top-4 lg:flex lg:items-center lg:justify-between lg:px-5">
      <div className="relative z-50 flex items-center justify-between gap-3">
        <a
          className="flex min-w-0 items-center gap-3"
          href="#top"
          aria-label={messages.navigation.brand}
          onClick={closeMenu}
        >
          <span className="bg-primary text-primary-foreground grid size-10 shrink-0 place-items-center rounded-xl shadow-lg shadow-primary/20">
            <Martini className="size-5" />
          </span>
          <span className="truncate text-xl font-bold tracking-tight">
            {messages.navigation.brand}
            <span className="text-primary">.</span>
          </span>
        </a>

        <Button
          aria-expanded={isMenuOpen}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="rounded-full lg:hidden"
          onClick={() => setIsMenuOpen((current) => !current)}
          size="icon"
          type="button"
          variant="outline"
        >
          {isMenuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
        </Button>
      </div>

      <nav className="relative z-50 hidden text-sm font-semibold text-muted-foreground lg:flex lg:flex-wrap lg:justify-center">
        {messages.navigation.navItems.map((item) => (
          <a
            className="px-2 py-1.5 transition-colors hover:text-foreground"
            href={item.href}
            key={item.href}
          >
            {item.label}
          </a>
        ))}
      </nav>

      <div className="relative z-50 hidden items-center gap-2 lg:flex">
        <a
          className="bg-primary text-primary-foreground inline-flex h-10 items-center justify-center rounded-full px-5 text-sm font-bold shadow-lg shadow-primary/20 transition-colors hover:bg-primary/90"
          href={messages.navigation.primaryAction.href}
        >
          {messages.navigation.primaryAction.label}
        </a>
        <LanguageSwitcher />
        <ThemeToggle />
      </div>

      {isMenuOpen && (
        <button
          aria-label="Close menu"
          className="fixed inset-0 z-30 bg-background/55 backdrop-blur-sm lg:hidden"
          onClick={closeMenu}
          type="button"
        />
      )}

      <div
        className={[
          "fixed top-[76px] right-3 z-40 w-[min(20rem,calc(100vw-1.5rem))] overflow-hidden rounded-2xl border border-border/70 bg-card shadow-2xl shadow-black/20 transition-all duration-200 lg:hidden",
          isMenuOpen
            ? "translate-x-0 opacity-100"
            : "pointer-events-none translate-x-6 opacity-0",
        ].join(" ")}
      >
        <nav className="grid p-2 text-base font-semibold text-muted-foreground">
          {messages.navigation.navItems.map((item) => (
            <a
              className="rounded-xl px-4 py-3 transition-colors hover:bg-muted hover:text-foreground"
              href={item.href}
              key={item.href}
              onClick={closeMenu}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="border-t border-border/70 p-3">
          <a
            className="bg-primary text-primary-foreground inline-flex h-11 w-full items-center justify-center rounded-full px-5 text-sm font-bold shadow-lg shadow-primary/20 transition-colors hover:bg-primary/90"
            href={messages.navigation.primaryAction.href}
            onClick={closeMenu}
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
}
