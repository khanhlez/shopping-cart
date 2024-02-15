import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import MainLayout from '~/layouts/MainLayout'
import ShopPage from '~/pages/Shop'
import Home from '~/pages/Home'
import Product from '~/pages/Product'
import Products from '~/pages/Products'
import Cart from '~/pages/Cart'

const Router = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <MainLayout />,
      children: [
        {
          path: '/',
          element: <Home />
        },
        {
          path: '/shop',
          element: <ShopPage />
        },
        {
          path: '/products',
          element: <Products />
        },
        {
          path: '/product/:id',
          element: <Product />
        },
        {
          path: '/cart',
          element: <Cart />
        }
      ]
    }
  ])

  return (
    <div className='container mx-auto'>
      <RouterProvider router={router}></RouterProvider>
    </div>
  )
}

export default Router
