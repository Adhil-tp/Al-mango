import React from 'react'
import Recommendimg from '../assets/images/recommendimg.jpeg'
import { Link } from 'react-router-dom'

function Recommenditem() {
  return (
    <div  className="relative w-[230px] h-[240px]  bg-transparent border-0 flex-shrink-0 ">
    <img  className="w-full h-full rounded-2xl" src={Recommendimg} alt="image" />     
    <div className="absolute bottom-2 left-2 inset-0 flex items-center justify-center text-white bg-black bg-opacity-0 p-2 rounded-lg">
      <div>
      <h1 className='text-sm font-bold'>Crawfish Stuffed Potatoes</h1><br/>
      <p>They use a lot of chili paste, red pepper, and hot oil in their food.</p><br/>
      <a href="#" className="text-white underline text-xl"><Link to="/products">Order Now</Link></a>
      </div>
    </div>
    </div>
  )
}

export default Recommenditem
