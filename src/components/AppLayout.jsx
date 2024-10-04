import React from 'react'
import { Outlet } from 'react-router-dom'

import Header from './Navbar'
import Footer from './Footer'
const AppLayout = () => {
  return (
    <div>
      <Header />
      <div className='mt-12 mb-12'>
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}

export default AppLayout












































