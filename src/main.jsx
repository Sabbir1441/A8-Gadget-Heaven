import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./layouts/Root";
import ErrorPage from "./components/ErrorPage";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import ProductDetails from "./components/ProductDetails";
import Cart from "./components/Cart";
import Wishlist from "./components/Wishlist";
import { ToastContainer, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AppProviders from "./AppProviders";
import Statistics from "./pages/Statistics";
import { HelmetProvider } from "react-helmet-async";
import Login from "./pages/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/statistics", element: <Statistics /> },
      { path: "/login", element: <Login /> },
      {
        path: "/dashboard",
        element: <Dashboard />,
        children: [
          { path: "/dashboard/cart", element: <Cart /> },
          { path: "/dashboard/wishlist", element: <Wishlist /> },
        ],
      },
      {
        path: "/product/:productId",
        loader: () => fetch("/deviceData.json"),
        element: <ProductDetails />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HelmetProvider>
      <AppProviders>
        <RouterProvider router={router} />
        <ToastContainer
          position="top-left"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
          transition={Slide}
        />
      </AppProviders>
    </HelmetProvider>
  </StrictMode>
);