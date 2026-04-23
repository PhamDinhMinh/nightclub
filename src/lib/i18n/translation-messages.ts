import { enMessages } from "@/lib/i18n/translations/en";
import { viMessages } from "@/lib/i18n/translations/vi";
import type { Locale } from "@/types/i18n.types";

export const DEFAULT_LOCALE: Locale = "en";

export const translationMessages = {
  en: enMessages,
  vi: viMessages,
};
