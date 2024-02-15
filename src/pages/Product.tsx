import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ProductDetailSkeleton from '~/components/ProductDetailSkeleton'
import type { Product } from '~/interfaces'

const Product = () => {
  const routerParams = useParams()
  const [product, setProduct] = useState({} as Product)
  const [loading, setLoading] = useState(true)

  console.log('routerParams', routerParams)

  const getProduct = async () => {
    try {
      const response = await fetch(`https://fakestoreapi.com/products/${routerParams.id}`)
      const data = await response.json()
      setProduct(data)
      setLoading(false)
    } catch (error) {
      console.log('error', error)
    }
  }

  const handleRating = (rate: number) => {
    const stars = []
    for (let i = 0; i < 5; i++) {
      stars.push(
        <svg
          fill={i < Math.round(rate) ? 'currentColor' : 'none'}
          stroke='currentColor'
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth='2'
          className='w-4 h-4 text-red-500'
          viewBox='0 0 24 24'
        >
          <path d='M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z'></path>
        </svg>
      )
    }
    return stars
  }

  useEffect(() => {
    getProduct()
  }, [])

  return (
    <>
      {loading && <ProductDetailSkeleton />}
      {!loading && product && (
        <section className='text-gray-700 body-font overflow-hidden bg-white'>
          <div className='container px-5 py-24 mx-auto'>
            <div className='mx-auto flex flex-wrap'>
              <img
                alt='ecommerce'
                className='lg:w-1/2 w-full object-cover rounded border border-gray-200'
                src={product.image}
              />
              <div className='lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0'>
                <h1 className='text-gray-900 text-3xl title-font font-medium mb-4'>{product.title}</h1>
                {product.rating && (
                  <div className='flex mb-4'>
                    <span className='flex items-center'>{handleRating(product.rating.rate)}</span>
                    <span className='text-gray-600 ml-3'>{product.rating.count} Reviews</span>
                  </div>
                )}
                <p className='leading-relaxed mb-8'>{product.description}</p>
                <div className='flex items-center'>
                  <span className='title-font font-medium text-2xl text-gray-900'>${product.price}</span>
                  <button className='flex ml-auto text-white bg-blue-600 border-0 py-2 px-6 focus:outline-none hover:bg-blue-700 rounded'>
                    Add To Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  )
}

export default Product
