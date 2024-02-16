import { Link } from 'react-router-dom'
import { useCart } from '~/compositions/useCart'
import { Product } from '~/interfaces'

const ProductCard = ({ product }: { product: Product }) => {
  const { loading, handleAddToCart } = useCart()
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

  return (
    <div className='relative w-full my-10 pt-8 overflow-hidden rounded-lg bg-white shadow-md'>
      <Link to={`/product/${product.id}`} className='flex justify-center'>
        <img className='h-60 rounded-t-lg object-cover' src={product.image} alt='product image' />
      </Link>
      <div className='mt-4 px-5 pb-5'>
        <Link to={`/product/${product.id}`}>
          <h5
            className='text-xl font-semibold tracking-tight text-slate-900 line-clamp-2 min-h-14'
            title={product.title}
          >
            {product.title}
          </h5>
        </Link>
        <div className='mt-2.5 mb-5 flex items-center'>
          <span className='mr-2 rounded bg-yellow-200 px-2.5 py-0.5 text-xs font-semibold'>{product.rating.count}</span>
          {handleRating(product.rating.rate)}
        </div>
        <p className='mb-4'>
          <span className='text-3xl font-bold text-slate-900'>${product.price}</span>
        </p>
        <button
          className='w-full flex justify-center items-center rounded-md bg-blue-600 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300'
          disabled={loading}
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
          {!loading && (
            <>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='mr-2 h-6 w-6'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
                strokeWidth='2'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z'
                />
              </svg>
              Add to cart
            </>
          )}
        </button>
      </div>
    </div>
  )
}

export default ProductCard
