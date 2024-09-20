import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

const SearchBar = () => {
  return (
    <div className='relative flex items-center'>
      <FontAwesomeIcon icon={faSearch} className='absolute left-3 text-gray-500'/>
      {/* <input className='rounded-md h-10 w-80 max-w-md my-1.5 pl-10' type='text' placeholder='Search Products' /> */}
      <input className='rounded-md h-10 w-screen my-1.5 pl-10' type='text' placeholder='Search Products' />
    </div>
  )
}

export default SearchBar
