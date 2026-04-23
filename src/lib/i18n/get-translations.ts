import { DEFAULT_LOCALE, translationMessages } from "@/lib/i18n/translation-messages";
import type { Locale } from "@/types/i18n.types";

export function getTranslations(locale: Locale = DEFAULT_LOCALE) {
  return translationMessages[locale] ?? translationMessages[DEFAULT_LOCALE];
}
