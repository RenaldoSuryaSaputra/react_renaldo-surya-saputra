import React from 'react'
import PageCreateProduct from './pages/create-product'
import LandingPage from './pages/landing-page';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './routes/Root';
import ErrorPage from './error-page';
import PageCreateAccount from './pages/create-account';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      { 
        element: <LandingPage />,
        index: true },
      {
        path: 'product',
        element: <PageCreateProduct />},
      {
        path: 'account',
        element: <PageCreateAccount />}
    ]
  },
]);

function App() {

  return <RouterProvider router={router} />
}

export default App
