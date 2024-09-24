import React,{ useState } from 'react'
import burger from '../assets/Products/Burger.jpg'

const ItemInfo = () => {

    const [quantity,setQuantity] = useState(1)

    const increaseQuantity = ()=>{
        setQuantity(prevQuantity => prevQuantity + 1)
    };

    const decreaseQuantity = () =>{
        setQuantity(prevQuantity => (prevQuantity > 1 ? prevQuantity - 1 : 1))
    }


  return (
      <section className="lg:p-12   flex flex-col lg:flex-row md:flex-col sm:flex-col items-center  gap-8">
    <div className="relative md:w-full sm:w-screen lg:w-[60rem]">
      <img
        src={burger}
        className="md:w-full   sm:h-[19rem] sm:w-screen lg:w-full  object-cover lg:rounded-lg"
        alt="Burger"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-transparent rounded-lg"></div>
    </div>
    <div className="p-6  mx-auto   flex flex-col w-[90%]  bg-white lg:bg-transparent  rounded-lg custom-background">
      <div className="mb-3">
        <h1 className="text-2xl  font-bold">Chicken Burger</h1>
      </div>
      <p className="text-sm">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
        repellendus dignissimos, facilis pariatur totam provident labore
        aliquam vel quia aut magnam assumenda, corporis dolore ea reiciendis
        veritatis praesentium.
      </p>
      <div className="pt-8 flex flex-row gap-4">
        <div className="flex items-center p-2 gap-2">
          <button onClick={decreaseQuantity} className="px-3 py-1 border border-gray-300 rounded bg-buttons">-</button>
          <span>{quantity}</span>
          <button onClick={increaseQuantity} className="px-3 py-1 border border-gray-300 rounded bg-buttons">+</button>
        </div>
        <button className="p-2  bg-buttons" >
          Add to cart
        </button>
      </div>
      <input
        type="text"
        placeholder="Add note"
        className="border border-black/20 rounded-lg mt-12 p-2 w-3/4 ml-12"
      />
    </div>
  </section>
  )
}

export default ItemInfo
