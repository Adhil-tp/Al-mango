import React from 'react'
import ProductImg from '../assets/images/ProductImage.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons'

const MenuProduct = () => {
  return (
    // <div className='flex items-center p-3 gap-x-5 w-full max-w-sm sm:max-w-md lg:max-w-lg'>
    //   <img src={ProductImg} alt="ProductImage" className='w-32 h-32 object-cover rounded-lg mr-4 sm:w-32 sm:h-32'/>
    //   <div className='flex flex-col flex-grow items-center'>
    //     <h4 className='flex text-sm sm:text-lg font-semibold'>Product Name</h4>
    //     <p className='text-gray-600 mb-2 text-xs sm:text-sm'>Product description</p>
    //     <div className='flex'>
    //       <p className='text-xl font-bold mb-4 text-orange-500'>$123</p>
    //     </div>
    //   </div>
    //   <button className='bg-orange-500 text-white px-4 py-2 rounded hover:bg-red-600 sm:px-4 sm:py-2'>
    //     <FontAwesomeIcon icon={faPlus} />
    //   </button>
    // </div>
    <div className='flex items-center p-3 gap-x-5'>
      <img src={ProductImg} alt="ProductImage" className='w-32 h-32 object-cover rounded-lg mr-4' />
      <div className='flex flex-col flex-grow'>
        <h4 className='flex text-lg font-semibold'>Product Name</h4>
        <p className='text-gray-600 mb-2'>Product description</p>
        <div className='flex'>
          <p className='text-xl font-bold mb-4'>$123</p>
        </div>
      </div>
      <button className='bg-orange-500 text-white px-4 py-2 rounded hover:bg-red-600'>
        <FontAwesomeIcon icon={faPlus} />
      </button>
    </div>
  )
}

export default MenuProduct
