import React from 'react'
import ProductImg from '../assets/images/ProductImage.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons'

const MenuProduct = () => {
  return (
    <div className='flex items-center p-3 gap-x-5 six:pr-10'>
      <img src={ProductImg} alt="ProductImage" className='w-20 h-20 six:h-32 six:w-32 object-cover rounded-lg mr-4' />
      <div className='flex flex-col flex-grow'>
        <h4 className='flex text-sm md:text-lg lg:text-2xl font-semibold'>Product Name</h4>
        <p className='text-gray-600 mb-2 text-xs md:text-sm lg:text-lg'>Product description</p>
        <div className='flex'>
          <p className='text-xs md:text-sm lg:text-lg font-bold mb-4 text-orange-500'>$123</p>
        </div>
      </div>
      <button className='bg-orange-500 text-white px-2 py-2 rounded hover:bg-red-600 h-8 flex items-center'>
        <FontAwesomeIcon icon={faPlus} />
      </button>
    </div>
  )
}

export default MenuProduct
