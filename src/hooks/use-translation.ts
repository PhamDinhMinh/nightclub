"use client";

import { getTranslations } from "@/lib/i18n/get-translations";
import { useUiStore } from "@/stores/ui.store";

export function useTranslation() {
  const locale = useUiStore((state) => state.locale);
  const setLocale = useUiStore((state) => state.setLocale);
  const messages = getTranslations(locale);

  return {
    locale,
    messages,
    setLocale,
  };
}
