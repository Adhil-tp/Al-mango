import React from 'react'
import MenuProduct from '../components/MenuProduct'
import SearchBar from '../components/SearchBar'
import ViewCart from '../components/ViewCart'


const Menu = () => {
  return (
    <div className='w-screen h-screen bg-stone-100 flex flex-col items-center'>
      <div className='flex justify-center'>
        <SearchBar />
      </div>
      {/* <div className='w-full h-6 flex pl-32 font-bold'>
        <p>starters:</p>
      </div> */}
      <div className='flex-col overflow-scroll h-screen w-screen hide-scrollbar'>
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
