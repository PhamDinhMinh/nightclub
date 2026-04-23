"use client";

import { LanguageSwitcher } from "@/components/language-switcher";
import { ThemeToggle } from "@/components/theme-toggle";
import { useTranslation } from "@/hooks/use-translation";

export function AppHeader() {
  const { messages } = useTranslation();

  return (
    <header className="border-border/70 bg-card/85 flex flex-col gap-5 rounded-3xl border px-5 py-5 shadow-lg shadow-black/5 backdrop-blur sm:flex-row sm:items-center sm:justify-between sm:px-6">
      <div className="max-w-2xl">
        <p className="text-primary text-xs font-semibold tracking-[0.3em] uppercase">
          {messages.navigation.eyebrow}
        </p>
        <h1 className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">
          {messages.navigation.brand}
        </h1>
        <p className="text-muted-foreground mt-2 text-sm leading-6">
          {messages.navigation.description}
        </p>
      </div>

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <LanguageSwitcher />
        <ThemeToggle />
      </div>
    </header>
  );
}
