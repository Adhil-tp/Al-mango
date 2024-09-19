import React from 'react'
import ProductImg from '../assets/images/ProductImage.jpg'


const MenuProduct = () => {
  return (
    <div className='flex items-center p-3 max-w-md gap-x-5'>
      <img src={ProductImg} alt="ProductImage" className='w-32 h-32 object-cover rounded-lg mr-4' />
      <div className='flex flex-col flex-grow'>
        <h4 className='flex text-lg font-semibold'>Product Name</h4>
        <p className='text-gray-600 mb-2'>Product description</p>
        <div className='flex'>
          <p className='text-xl font-bold mb-4'>$123</p>
        </div>
      </div>
      <button className='bg-orange-500 text-white px-4 py-2 rounded hover:bg-red-600'>+</button>
    </div>
  )
}

export default MenuProduct
