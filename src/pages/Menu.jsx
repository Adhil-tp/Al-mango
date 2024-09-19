import React from 'react'
import MenuProduct from '../components/MenuProduct'
import SearchBar from '../components/SearchBar'
import ViewCart from '../components/ViewCart'
// import {FontAwesomeIcon} from 

const Menu = () => {
  return (
    <div className='w-fit h-screen'>
      <SearchBar/>
      <div className='flex-col overflow-scroll h-1/2'>
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
