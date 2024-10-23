import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Navbar'
import Footer from './Footer'
import ScrollToTop from './ScrollToTop'


const AppLayout = () => {
  return (
    <div className='flex flex-col mi-h-screen'>
      <ScrollToTop />
      <Header />
      <main className='flex-1'> 
         <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default AppLayout












































