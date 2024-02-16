import { Link } from 'react-router-dom'
import { useCartStore } from '~/stores/cart'

const Header = () => {
  const { getItemCount } = useCartStore()
  return (
    <>
      <div className='container mx-auto'>
        <div className='relative flex items-center justify-center -mx-4 sm:justify-between'>
          <div className='max-w-full px-4 w-60 lg:w-48'>
            <Link to='/' className='block w-full py-5 lg:py-3'>
              <span className='text-xl font-bold'>The Odin Shop</span>
            </Link>
          </div>
          <div className='flex items-center justify-end w-full px-4 lg:justify-between'>
            <div className='flex items-center justify-between w-full px-4'>
              <div className='w-full'>
                <nav
                  id='navbarCollapse'
                  className='absolute right-4 top-full w-full max-w-[250px] justify-center rounded-lg bg-white dark:bg-dark-2 py-5 px-6 shadow lg:static lg:flex lg:w-full lg:max-w-full lg:justify-end lg:bg-transparent lg:py-0 lg:px-0 lg:shadow-none'
                >
                  <ul className='items-center block lg:flex'>
                    <li>
                      <Link
                        to='/'
                        className='flex justify-between py-2 text-base font-medium text-dark dark:text-white hover:text-primary lg:mx-5 lg:inline-flex lg:py-6 2xl:mx-[18px]'
                      >
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link
                        to='/products'
                        className='flex justify-between py-2 text-base font-medium text-dark dark:text-white hover:text-primary lg:mx-5 lg:inline-flex lg:py-6 2xl:mx-[18px]'
                      >
                        Shop
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
            <div className='relative z-20'>
              <div className='flex max-w-[200px] justify-end'>
                <Link
                  to='/cart'
                  className='relative flex h-[42px] w-[42px] items-center justify-center rounded-full border-[.5px] border-stroke dark:border-dark-3 bg-white dark:bg-dark-2 text-dark dark:text-white'
                >
                  <svg
                    width='22'
                    height='22'
                    viewBox='0 0 22 22'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                    className='fill-current'
                  >
                    <path d='M19.3875 6.7375H18.5625L16.3281 1.1C16.1562 0.687499 15.7094 0.515624 15.3312 0.653124C14.9187 0.824999 14.7469 1.27187 14.8844 1.65L16.8781 6.7375H5.12187L7.11562 1.68437C7.28749 1.27187 7.08124 0.824999 6.66874 0.687499C6.29062 0.515624 5.84374 0.687499 5.67187 1.1L3.43749 6.7375H2.61249C1.99374 6.7375 1.47812 7.25312 1.47812 7.87187V10.6562C1.47812 11.2406 1.89062 11.6875 2.47499 11.7562L3.33437 19.25C3.47187 20.4875 4.50312 21.4156 5.74062 21.4156H16.2594C17.4969 21.4156 18.5281 20.4875 18.6656 19.25L19.525 11.7562C20.075 11.6875 20.5219 11.2062 20.5219 10.6562V7.8375C20.5219 7.21875 20.0062 6.7375 19.3875 6.7375ZM3.02499 8.28437H18.975V10.2437H3.02499V8.28437ZM16.2594 19.8687H5.74062C5.29374 19.8687 4.91562 19.525 4.84687 19.0781L4.02187 11.7906H17.9781L17.1531 19.0781C17.0844 19.525 16.7062 19.8687 16.2594 19.8687Z'></path>
                    <path d='M7.49375 13.3375C7.08125 13.3375 6.70312 13.6812 6.70312 14.1281V16.7062C6.70312 17.1187 7.04687 17`.4969 7.49375 17.4969C7.94062 17.4969 8.28438 17.1531 8.28438 16.7062V14.0937C8.28438 13.6812 7.94062 13.3375 7.49375 13.3375Z'></path>
                    <path d='M14.5062 13.3375C14.0937 13.3375 13.7156 13.6812 13.7156 14.1281V16.7062C13.7156 17.1187 14.0594 17.4969 14.5062 17.4969C14.9531 17.4969 15.2969 17.1531 15.2969 16.7062V14.0937C15.2625 13.6812 14.9187 13.3375 14.5062 13.3375Z'></path>
                  </svg>

                  <span className='absolute -top-1 -right-2 h-[18px] w-[18px] rounded-full bg-blue-600 leading-[18px] text-[11px] text-center font-semibold text-white'>
                    {getItemCount()}
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Header
