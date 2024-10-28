import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

const SearchBar = ({searchTerm,setSearchTerm,onSearch}) => {
  const handleSearchChange = (e) =>{
    setSearchTerm(e.target.value)
  }
  return (
    <div className='fixed flex items-center w-11/12'>
      <input className='rounded-md h-10 w-full my-1.5 pl-10' type='text' placeholder='Search Products' onChange={handleSearchChange} />
      <button className='ml-2  text-white px-4 py-2 rounded-md' onClick={onSearch}><FontAwesomeIcon icon={faSearch} className=' text-gray-500 h-5'/></button>
    </div>
  )
}

export default SearchBar
