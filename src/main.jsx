import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Root from './layouts/Root'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from './components/ErrorPage';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import ProductDetails from './components/ProductDetails';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/product/:productId",
        element: <ProductDetails></ProductDetails>,
        loader: ()=> fetch("/deviceData.json"),
      },
      {
        path: "/statistics",
        element: <Home></Home>
      },
      {
        path: "/dashboard",
        element: <Dashboard></Dashboard>
      },
    ]
  },
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)