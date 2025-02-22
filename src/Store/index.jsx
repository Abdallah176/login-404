import { create } from 'zustand'

export const useLoader = create((set) => ({
index: false,
    open: () => set(() => ({ index: true })),
    close: () => set(() => ({ index: false })),
}))