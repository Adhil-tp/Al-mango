import React from 'react'
// import Recommendimg from '../assets/images/recommendimg.jpeg'
import { Link } from 'react-router-dom'


function Recommenditem({product}) {

  console.log("combo:",product)
  return (
    <div  className="relative w-[230px] h-[240px]  bg-transparent border-0 flex-shrink-0 ">
    <img  className="w-full object-cover h-full rounded-2xl" src={product.image} alt="image" />     
    <div className="absolute bottom-2 left-2 inset-0 flex items-center justify-center text-white bg-black bg-opacity-0 p-2 rounded-lg">
      <div>
      <h1 className='text-lg font-bold'>{product.name}</h1><br/>
      <p>{product.description}</p><br/>
      <p href="#" className="text-white bg-orange-500 opacity-85 text-xl rounded-3xl absolute p-2 px-4 animate-bounce">
        <Link to={`/product/${product.id}`} >Order Now</Link>
      </p>
      </div>
    </div>
    </div>
  )
}

export default Recommenditem
