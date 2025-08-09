import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './components/Home/Home.jsx'
import Dashboard from './components/Dashboard/Dashboard.jsx'
import ErrorPage from './components/ErrorPage/ErrorPage.jsx'
import ProductDetails from './components/ProductDetails/ProductDetails.jsx'
import Statistics from './components/Statistics/Statistics.jsx'


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/dashboard",
        loader: () => fetch("/gadget.json"),
        element: <Dashboard />
      },
      {
        path: "/product-details/:id",
        loader: () => fetch("/gadget.json"),
        element: <ProductDetails />
      },
      {
        path: "/statistics",
        loader: () => fetch("/gadget.json"),
        element: <Statistics />
      }
    ],
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
