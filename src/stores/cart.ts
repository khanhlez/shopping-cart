import { create } from 'zustand'
import type { Product } from '~/interfaces'

interface CartStore {
  items: Product[]
  addToCart: (item: Product) => void
  removeFromCart: (id: number) => void
  getCartTotal: () => number
  getItemCount: () => number
}

export const useCartStore = create<CartStore>()((set, get) => ({
  items: [],
  addToCart: (item: Product) => set((state: { items: Product[] }) => ({ items: [...state.items, item] })),
  removeFromCart: (id: number) =>
    set((state: { items: Product[] }) => ({ items: state.items.filter((item: Product) => item.id !== id) })),
  getCartTotal: () => get().items.reduce((acc: number, item: Product) => acc + item.price, 0),
  getItemCount: () => get().items.length
}))
