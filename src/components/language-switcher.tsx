"use client";

import { useTranslation } from "@/hooks/use-translation";
import { cn } from "@/lib/utils";

export function LanguageSwitcher() {
  const { locale, messages, setLocale } = useTranslation();
  const isVietnamese = locale === "vi";

  return (
    <button
      aria-label={messages.controls.languageSwitcherLabel}
      aria-pressed={isVietnamese}
      className="bg-muted/70 hover:bg-muted relative inline-grid h-9 w-20 grid-cols-2 items-center rounded-full p-1 text-xs font-bold transition-colors duration-300 outline-none focus-visible:ring-2 focus-visible:ring-ring/60 active:scale-[0.98]"
      onClick={() => setLocale(isVietnamese ? "en" : "vi")}
      type="button"
    >
      <span
        className={cn(
          "bg-primary absolute top-1 left-1 h-7 w-9 rounded-full shadow-sm shadow-primary/20 transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]",
          isVietnamese && "translate-x-9",
        )}
      />
      <span
        className={cn(
          "relative z-10 text-center transition-colors duration-200",
          !isVietnamese ? "text-primary-foreground" : "text-muted-foreground",
        )}
      >
        EN
      </span>
      <span
        className={cn(
          "relative z-10 text-center transition-colors duration-200",
          isVietnamese ? "text-primary-foreground" : "text-muted-foreground",
        )}
      >
        VI
      </span>
    </button>
  );
}
