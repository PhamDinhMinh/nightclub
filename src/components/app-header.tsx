"use client";

import { LanguageSwitcher } from "@/components/language-switcher";
import { ThemeToggle } from "@/components/theme-toggle";
import { useTranslation } from "@/hooks/use-translation";
import { Martini } from "lucide-react";

export function AppHeader() {
  const { messages } = useTranslation();

  return (
    <header className="border-border/70 bg-card/92 sticky top-3 z-30 flex flex-col gap-4 rounded-2xl border px-4 py-3 shadow-lg shadow-black/5 backdrop-blur-xl lg:top-4 lg:flex-row lg:items-center lg:justify-between lg:px-5">
      <a
        className="flex min-w-0 items-center gap-3"
        href="#top"
        aria-label={messages.navigation.brand}
      >
        <span className="bg-primary text-primary-foreground grid size-10 shrink-0 place-items-center rounded-xl shadow-lg shadow-primary/20">
          <Martini className="size-5" />
        </span>
        <span className="truncate text-xl font-bold tracking-tight">
          {messages.navigation.brand}
          <span className="text-primary">.</span>
        </span>
      </a>

      <nav className="-mx-1 flex overflow-x-auto px-1 pb-1 text-sm font-semibold text-muted-foreground lg:mx-0 lg:flex-wrap lg:justify-center lg:overflow-visible lg:p-0">
        {messages.navigation.navItems.map((item) => (
          <a
            className="shrink-0 px-3 py-1.5 transition-colors hover:text-foreground lg:px-2"
            href={item.href}
            key={item.href}
          >
            {item.label}
          </a>
        ))}
      </nav>

      <div className="flex flex-wrap items-center gap-2">
        <a
          className="bg-primary text-primary-foreground inline-flex h-10 flex-1 items-center justify-center rounded-full px-5 text-sm font-bold shadow-lg shadow-primary/20 transition-colors hover:bg-primary/90 sm:flex-none"
          href={messages.navigation.primaryAction.href}
        >
          {messages.navigation.primaryAction.label}
        </a>
        <LanguageSwitcher />
        <ThemeToggle />
      </div>
    </header>
  );
}
