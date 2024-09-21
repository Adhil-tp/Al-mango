import React from 'react'
import ProductImg from '../assets/images/ProductImage.jpg'

const ViewCart = () => {
  return (
    <div className='bg-orange-200  flex flex-row w-screen items-center justify-between p-4 '>
      <div className='flex flex-row gap-5 items-center justify-center'>
        <img src={ProductImg} alt="productImage" className='w-8 h-8 rounded sm:w-10 sm:h-10' />
        <div>
          <h6 className='text-sm sm:text-base'>Product Name</h6>
          <p className='text-xs sm:text-sm'>2 items</p>
        </div>
      </div>
      <div className='flex w-32 h-10 items-center justify-center'>
        <button className='w-28 h-7 bg-orange-500 rounded-xl '>View Cart</button>
      </div>
    </div>
  )
}

export default ViewCart
