import { create } from "zustand";

type UseCoverImageStore = {
  url?: string;
  isOpen: boolean
  onOpen: () => void,
  onClose: () => void,
  onReplace: (url: string) => void
}

export const useCoverImage = create<UseCoverImageStore>(set => ({
  url: undefined,
  isOpen: false,
  onOpen: () => set({ isOpen: true, url: undefined }),
  onClose: () => set({ isOpen: false, url: undefined }),
  onReplace: (url: string) => set({ isOpen: true, url })
}));