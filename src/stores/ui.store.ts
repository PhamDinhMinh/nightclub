import { create } from "zustand";

interface UiStore {
  isAuthHintsOpen: boolean;
  toggleAuthHints: () => void;
}

export const useUiStore = create<UiStore>((set) => ({
  isAuthHintsOpen: false,
  toggleAuthHints: () =>
    set((state) => ({
      isAuthHintsOpen: !state.isAuthHintsOpen,
    })),
}));
