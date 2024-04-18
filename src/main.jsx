import React, { Children} from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import ProductsList from './ProductsList.jsx'
import CartItems from './CartItems.jsx'
import Checkout from './Checkout.jsx'
import ProductCard from './ProductCard.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Cartcard from './Cartcard.jsx'
import Calucate from './Calculate.jsx'
import ErrorPage from './ErrorPage.jsx'


const routes = [
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <ProductsList />,
        errorElement: <ErrorPage />
      },
      {
        path: "productcard",
        element: <ProductCard />
      },
      {
        path: "cartitems",
        element: <CartItems />,
        errorElement: <ErrorPage />
      },
      {
        path: "cartitems",
        element: <Cartcard />
      },
      {
        path: "checkout",
        element: <Checkout />,
        errorElement: <ErrorPage />
      },
      {
        path: "calculate",
        element: <Calucate />
      }
    ]
  }
]

const router = createBrowserRouter(routes) 

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router= {router} />
    {/* <App /> */}
  </React.StrictMode>,
)
