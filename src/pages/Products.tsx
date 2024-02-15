import { useEffect, useState } from 'react'
import ProductCard from '~/components/ProductCard'
import type { Product } from '~/interfaces'

const Products = () => {
  const [products, setProducts] = useState([])

  const getProducts = async () => {
    try {
      const response = await fetch('https://fakestoreapi.com/products')
      const data = await response.json()
      setProducts(data)
      console.log('products', data)
    } catch (error) {
      console.log('error', error)
    }
  }

  useEffect(() => {
    getProducts()
  }, [])

  return (
    <div className='flex flex-wrap w-full'>
      {products.map((product: Product) => {
        return (
          <div key={product.id} className='w-full px-4 md:w-1/4'>
            <ProductCard product={product} />
          </div>
        )
      })}
    </div>
  )
}

export default Products
