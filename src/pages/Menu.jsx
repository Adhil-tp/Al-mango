import React, { useContext } from 'react'
import MenuProduct from '../components/MenuProduct'
import SearchBar from '../components/SearchBar'
import ViewCart from '../components/ViewCart'
import foodProducts from '../data/foodProducts'
import { CartContext } from '../context/CartContext'

const Menu = () => {
  const { cartItems } = useContext(CartContext)
  return (
    <div className='w-screen h-screen bg-stone-100 flex flex-col items-center'>
      <div className='flex justify-center w-screen'>
        <SearchBar />
      </div>
      <div className='grid grid-cols-1 six:grid-cols-2 lg:grid-cols-3 overflow-scroll h-screen w-screen hide-scrollbar'>
        {foodProducts.map((product) => {
          return <MenuProduct product={product} key={product.id} />
        })}
      </div>
      {cartItems.length > 0 && <ViewCart />}
    </div>
  )
}

export default Menu
