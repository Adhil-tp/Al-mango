import React from 'react'
import MenuProduct from '../components/MenuProduct'
import SearchBar from '../components/SearchBar'
import ViewCart from '../components/ViewCart'


const Menu = () => {
  return (
    <div className='w-screen h-screen bg-stone-100 flex flex-col items-center'>
      <div className='flex justify-center w-screen'>
        <SearchBar />
      </div>
      {/* <div className='flex-col overflow-scroll h-screen w-screen hide-scrollbar'> */}
      <div className='grid grid-cols-1 six:grid-cols-2 lg:grid-cols-3 overflow-scroll h-screen w-screen hide-scrollbar'>
        <MenuProduct />
        <MenuProduct />
        <MenuProduct />
        <MenuProduct />
        <MenuProduct />
        <MenuProduct />
        <MenuProduct />
        <MenuProduct />
        <MenuProduct />
        <MenuProduct />
        <MenuProduct />
        <MenuProduct />
      </div>
      <ViewCart/>
    </div>
  )
}

export default Menu
