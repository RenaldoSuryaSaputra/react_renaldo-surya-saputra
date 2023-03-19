import React from 'react'
import PageCreateProduct from './pages/create-product'
import LandingPage from './pages/landing-page'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from './components/navigation/navigation-bar';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navbar />,
    children: [
      { element: <LandingPage />, index: true },
      {
        path: 'product',
        element: <PageCreateProduct />,
      },
    ]
  },
]);

function App() {
  return <RouterProvider router={router} />;

}
export default App
