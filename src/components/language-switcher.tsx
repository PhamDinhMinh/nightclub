"use client";

import type { Locale } from "@/types/i18n.types";
import { useTranslation } from "@/hooks/use-translation";
import { Button } from "@/components/ui/button";

const localeOrder: Locale[] = ["en", "vi"];

export function LanguageSwitcher() {
  const { locale, messages, setLocale } = useTranslation();

  return (
    <div
      aria-label={messages.controls.languageSwitcherLabel}
      className="bg-muted/70 inline-flex rounded-full p-1"
      role="group"
    >
      {localeOrder.map((localeItem) => {
        const isActive = localeItem === locale;

        return (
          <Button
            aria-pressed={isActive}
            className="rounded-full"
            key={localeItem}
            onClick={() => setLocale(localeItem)}
            size="sm"
            type="button"
            variant={isActive ? "default" : "ghost"}
          >
            {messages.controls.languages[localeItem]}
          </Button>
        );
      })}
    </div>
  );
}
