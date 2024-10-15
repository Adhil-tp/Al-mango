import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import { useNavigate } from 'react-router-dom'

const ViewCart = () => {
  const { cartItems } = useContext(CartContext)
  const cartCount = cartItems.length
  const lastCartItem = cartItems[cartCount - 1]
  const navigate = useNavigate();

  const handleViewCart = ()=>{
    navigate('/cart')
  }
  return (
    <div className='bg-orange-200  fixed bottom-0  flex flex-row w-screen items-center justify-between p-4 '>
      <div className='flex flex-row gap-5 items-center justify-center'>
        <img src={lastCartItem.image} alt="productImage" className='w-8 h-8 rounded sm:w-10 sm:h-10' />
        <div>
          <h6 className='text-xs sm:text-base'>{lastCartItem?.name || 'No items'}</h6>
          <p className='text-xs sm:text-sm'>{cartCount}-items</p>
        </div>
      </div>
      <div className='flex w-32 h-10 items-center justify-center'>
        <button className='w-28 h-7 bg-orange-500 rounded-xl ' onClick={handleViewCart}>View Cart</button>
      </div>
    </div>
  )
}

export default ViewCart
