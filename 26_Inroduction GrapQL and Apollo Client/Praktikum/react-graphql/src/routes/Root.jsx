import React from 'react'
import Navbar from '../components/navigation/navigation-bar'
import { Outlet } from 'react-router';

const Root = () => {
  return (
   <>
      <Navbar />
      <main className="container-fluid">
        <Outlet />
      </main>
   </>
  )
}
export default Root