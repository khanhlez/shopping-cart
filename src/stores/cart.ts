import { create } from 'zustand'
import type { Product } from '~/interfaces'

interface CartStore {
  items: Product[]
  addToCart: (item: Product) => void
  removeFromCart: (id: number) => void
  getCartTotal: () => number
  getItemCount: () => number
  increaseQuantity: (id: number) => void
  decreaseQuantity: (id: number) => void
  handleChangeQuantity: (id: number, quantity: number) => void
}

export const useCartStore = create<CartStore>()((set, get) => ({
  items: [],
  addToCart: (item: Product) => set((state: { items: Product[] }) => ({ items: [...state.items, item] })),
  increaseQuantity: (id: number) =>
    set((state: { items: Product[] }) => ({
      items: state.items.map((item: Product) => {
        if (item.id === id) {
          item.quantity ? (item.quantity += 1) : (item.quantity = 2)
          if (item.originalPrice) item.price = item.originalPrice * item?.quantity
        }

        return item
      })
    })),
  decreaseQuantity: (id: number) =>
    set((state: { items: Product[] }) => ({
      items: state.items.map((item: Product) => {
        if (item.id === id) {
          item.quantity ? (item.quantity -= 1) : (item.quantity = 1)
          if (item.originalPrice) item.price = item.originalPrice * item?.quantity
        }

        return item
      })
    })),
  handleChangeQuantity: (id: number, quantity: number) =>
    set((state: { items: Product[] }) => ({
      items: state.items.map((item: Product) => {
        if (item.id === id) {
          item.quantity = quantity
          if (item.originalPrice) item.price = item.originalPrice * item?.quantity
        }

        return item
      })
    })),
  removeFromCart: (id: number) =>
    set((state: { items: Product[] }) => ({ items: state.items.filter((item: Product) => item.id !== id) })),
  getCartTotal: () => get().items.reduce((acc: number, item: Product) => acc + item.price, 0),
  getItemCount: () => get().items.length
}))
