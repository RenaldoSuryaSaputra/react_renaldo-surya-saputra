import React from 'react'
import PageCreateProduct from './pages/create-product'
import LandingPage from './pages/landing-page';
import { createBrowserRouter, RouterProvider, redirect } from 'react-router-dom';
import Root from './routes/Root';
import ErrorPage from './error-page';
import PageCreateAccount from './pages/create-account';
import LoginPage from './pages/login-page';
import {getAuthCookie} from '../src/utils/cookies'


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        element: <LandingPage />,
        index: true
      },
      {
        path: 'product',
        element: <PageCreateProduct />,
        loader: () => {
          const token = getAuthCookie()
          if (!token) {
            return redirect('/login')
          }
          return null
        },
      },
      {
        path: 'account',
        element: <PageCreateAccount />
      },
      {
        path: 'login',
        element: <LoginPage />
      }
    ]
  },
  {
    path: '/login',
    element: <LoginPage />,
    loader: () => {
      const token = getAuthCookie()
      if (token) {
        return redirect('/')
      }
      return null
    },
  }
]);

function App() {

  return <RouterProvider router={router} />
}

export default App
