import { Link } from 'react-router-dom'
import { Product } from '~/interfaces'
import { useCartStore } from '~/stores/cart'

const Cart = () => {
  const { items, getCartTotal, increaseQuantity, decreaseQuantity, handleChangeQuantity, removeFromCart } =
    useCartStore()

  return (
    <div className='h-screen pt-14'>
      <h1 className='mb-10 text-center text-2xl font-bold'>Cart Items</h1>
      {!items.length && <p className='text-center text-lg'>No items in the cart</p>}
      {items.length > 0 && (
        <div className='mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0'>
          <div className='rounded-lg md:w-2/3'>
            {items.map((item: Product) => (
              <div
                key={item.id}
                className='justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start'
              >
                <Link to={`/product/${item.id}`} className='flex justify-center'>
                  <img src={item.image} alt='product-image' className='w-full rounded-lg sm:w-40' />
                </Link>
                <div className='sm:ml-4 sm:flex sm:w-full sm:justify-between'>
                  <div className='mt-5 sm:mt-0'>
                    <Link to={`/product/${item.id}`}>
                      <h2 className='text-lg font-bold text-gray-900'>{item.title}</h2>
                    </Link>
                    <p className='mt-1 text-xs text-gray-700'>{item.category}</p>
                  </div>
                  <div className='mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6'>
                    <div className='flex items-center border-gray-100'>
                      <span
                        className={`cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-blue-50 ${item.quantity === 1 ? 'pointer-events-none	' : 'pointer-events-auto	'}`}
                        onClick={() => decreaseQuantity(item.id)}
                      >
                        {' '}
                        -{' '}
                      </span>
                      <input
                        className='h-8 w-8 border bg-white text-center text-xs outline-none'
                        type='number'
                        value={item.quantity || 1}
                        min='1'
                        onChange={(e) => handleChangeQuantity(item.id, e.target.valueAsNumber)}
                      />
                      <span
                        className='cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50'
                        onClick={() => increaseQuantity(item.id)}
                      >
                        {' '}
                        +{' '}
                      </span>
                    </div>
                    <div className='flex items-center space-x-4'>
                      <p className='text-sm'>${item.price}</p>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        strokeWidth='1.5'
                        stroke='currentColor'
                        className='h-5 w-5 cursor-pointer duration-150 hover:text-red-500'
                        onClick={() => removeFromCart(item.id)}
                      >
                        <path strokeLinecap='round' strokeLinejoin='round' d='M6 18L18 6M6 6l12 12' />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className='mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3'>
            <div className='flex justify-between'>
              <p className='text-lg font-bold'>Total</p>
              <div className=''>
                <p className='mb-1 text-lg font-bold'>${getCartTotal().toFixed(2)} USD</p>
              </div>
            </div>
            <button className='mt-4 w-full rounded-md bg-blue-500 py-1.5 font-medium text-blue-50 hover:bg-blue-600'>
              Check out
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default Cart
