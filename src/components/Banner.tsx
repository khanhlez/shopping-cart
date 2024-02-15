import { Link } from 'react-router-dom'

const Banner = () => {
  return (
    <section className='py-10 dark:bg-dark'>
      <div className='container mx-auto'>
        <div className='flex flex-wrap -mx-4'>
          <div className='w-full px-4 lg:w-8/12'>
            <div className='relative mb-8 h-[370px] md:h-[480px]'>
              <img src='/banner_1.jpg' alt='product' className='object-cover object-center w-full h-full' />

              <div className='absolute top-0 left-0 flex items-center w-full h-full px-8 md:px-12'>
                <div className='max-w-[420px]'>
                  <h3>
                    <Link
                      to='/products'
                      className='block mb-5 text-2xl font-bold hover:text-blue-600 text-dark sm:text-4xl'
                    >
                      Mega Sale Up To 50% Off For All
                    </Link>
                  </h3>
                  <p className='text-base text-body-color mb-9'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ornare vestibulum mollis. Nam
                    vitae augue purus. Integer ac accumsan nunc.
                  </p>
                  <Link
                    to='/products'
                    className='bg-blue-600 inline-flex items-center justify-center rounded-md py-[13px] px-7 text-center text-base font-medium text-white hover:bg-blue-dark'
                  >
                    Grab The Offer
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className='w-full px-4 lg:w-4/12'>
            <div className='flex flex-wrap -mx-4'>
              <div className='w-full px-4 md:w-1/2 lg:w-full'>
                <div className='relative mb-8 h-[223px]'>
                  <img src='/banner_2.jpg' alt='product' className='object-cover object-center w-full h-full' />

                  <div className='absolute top-0 left-0 flex items-end justify-end w-full h-full p-6 sm:p-9'>
                    <div className='max-w-[180px] text-right'>
                      <h3>
                        <Link
                          to='/products'
                          className='block mb-3 text-xl font-bold hover:text-blue-600 text-dark xl:text-2xl'
                        >
                          Summer Travel Collection
                        </Link>
                      </h3>
                      <Link to='/products' className='text-base font-medium hover:text-blue-600 text-dark'>
                        Discover Now
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className='w-full px-4 md:w-1/2 lg:w-full'>
                <div className='relative mb-8 h-[223px]'>
                  <img src='/banner_3.jpg' alt='product' className='object-cover object-center w-full h-full' />

                  <div className='absolute top-0 left-0 flex items-end justify-end w-full h-full p-6 sm:p-9'>
                    <div className='max-w-[180px] text-right'>
                      <h3>
                        <Link
                          to='/products'
                          className='block mb-3 text-xl font-bold hover:text-blue-600 text-dark xl:text-2xl'
                        >
                          Get 30% Off On iPhone
                        </Link>
                      </h3>
                      <Link to='/products' className='text-base font-medium hover:text-blue-600 text-dark'>
                        Shop Now
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Banner
