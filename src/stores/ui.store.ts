import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { UI_STORAGE_KEY } from "@/constants/app.constants";
import { DEFAULT_LOCALE } from "@/lib/i18n/translation-messages";
import type { Locale } from "@/types/i18n.types";

interface UiStore {
  isAuthHintsOpen: boolean;
  locale: Locale;
  setLocale: (locale: Locale) => void;
  toggleAuthHints: () => void;
}

export const useUiStore = create<UiStore>()(
  persist(
    (set) => ({
      isAuthHintsOpen: false,
      locale: DEFAULT_LOCALE,
      setLocale: (locale) => set({ locale }),
      toggleAuthHints: () =>
        set((state) => ({
          isAuthHintsOpen: !state.isAuthHintsOpen,
        })),
    }),
    {
      name: UI_STORAGE_KEY,
      partialize: (state) => ({
        locale: state.locale,
      }),
      storage: createJSONStorage(() => localStorage),
    },
  ),
);
