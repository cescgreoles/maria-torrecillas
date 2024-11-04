import { create } from "zustand";

interface ImageStore {
  visibleCount: number;
  increaseVisibleCount: () => void;
}

export const useImageStore = create<ImageStore>((set) => ({
  visibleCount: 10,
  increaseVisibleCount: () =>
    set((state) => ({ visibleCount: state.visibleCount + 10 })),
}));
