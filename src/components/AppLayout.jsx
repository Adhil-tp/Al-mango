import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Navbar'
import Footer from './Footer'
import ScrollToTop from './ScrollToTop'


const AppLayout = () => {
  return (
    <>
      <ScrollToTop />
      <Header />
      <div className='mb-24' > 
      <Outlet />
      </div>
      <Footer />
    </>
  )
}

export default AppLayout












































