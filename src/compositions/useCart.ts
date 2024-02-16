import { useState } from 'react'
import { Product } from '~/interfaces'
import { useCartStore } from '~/stores/cart'

export const useCart = () => {
  const { items, addToCart, increaseQuantity } = useCartStore()
  const [loading, setLoading] = useState(false)
  const setLoadingState = () => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 1000)
  }

  const handleAddToCart = (product: Product) => {
    setLoadingState()
    // product.quantity ? (product.quantity += 1) : (product.quantity = 1)
    const isExisted = items.find((item) => item.id === product.id)
    if (isExisted) {
      increaseQuantity(product.id)
      return
    }

    if (!product.originalPrice) {
      product.originalPrice = product.price
    }

    addToCart(product)
  }

  return {
    loading,
    handleAddToCart
  }
}
