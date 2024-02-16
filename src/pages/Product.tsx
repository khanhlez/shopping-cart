import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ProductDetailSkeleton from '~/components/ProductDetailSkeleton'
import { useCart } from '~/compositions/useCart'
import type { Product } from '~/interfaces'

const Product = () => {
  const routerParams = useParams()
  const { loading, handleAddToCart } = useCart()
  const [product, setProduct] = useState({} as Product)
  const [loadingProduct, setLoadingProduct] = useState(true)

  const getProduct = async () => {
    try {
      const response = await fetch(`https://fakestoreapi.com/products/${routerParams.id}`)
      const data = await response.json()
      setProduct(data)
      setLoadingProduct(false)
    } catch (error) {
      console.log('error', error)
    }
  }

  const handleRating = (rate: number) => {
    const stars = []
    for (let i = 0; i < 5; i++) {
      stars.push(
        <svg
          key={i}
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
      {loadingProduct && <ProductDetailSkeleton />}
      {!loadingProduct && product && (
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
                  <span className='title-font font-medium text-2xl text-gray-900'>
                    ${product.originalPrice || product.price}
                  </span>
                  <button
                    className='flex ml-auto text-white bg-blue-600 border-0 py-2 px-6 focus:outline-none hover:bg-blue-700 rounded'
                    onClick={() => handleAddToCart(product)}
                  >
                    {loading && (
                      <div className='w-full flex justify-center'>
                        <svg
                          aria-hidden='true'
                          className='w-6 h-6 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600'
                          viewBox='0 0 100 101'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path
                            d='M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z'
                            fill='currentColor'
                          />
                          <path
                            d='M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z'
                            fill='currentFill'
                          />
                        </svg>
                      </div>
                    )}
                    {!loading && 'Add to Cart'}
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
