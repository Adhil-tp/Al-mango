import React from 'react'
import burger from '../assets/Products/Burger.jpg'
import {motion} from 'framer-motion'
import {fadeIn} from '../variants'


const RelatedItems = () => {

    const items =[
        {
          name:"Burger",
          image:burger,
          rate:"$5"
        },
        {
          name:"Special chees",
          image:burger,
          rate:"$5"
        },
        {
          name:"Sandwitch",
          image:burger,
          rate:"$5"
        },
        {
          name:"Chicken Roll",
          image:burger,
          rate:"$5"
        },
        {
          name:"Samoosa",
          image:burger,
          rate:"$5"
        },
        {
          name:"Soup",
          image:burger,
          rate:"$5"
        },
        {
          name:"Biriyani",
          image:burger,
          rate:"$5"
        }
  
      ]

  return (
<section className='p-4 flex flex-col justify-between items-center text-sm'>
    <motion.div 
    variants={fadeIn("up",0.2)}
    initial="hidden"
    whileInView={"show"}
    viewport={{once:false,amount:0.7}}
     className='flex flex-col '>
        <h1 className='text-3xl font-bold'>Related Items</h1>
    </motion.div>
    <div
     className=' grid grid-cols grid-flow-row md:grid-rows gap-12  lg:gap-36 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3  pt-14 '>
      {items.map((item)=>(

        <motion.div 
        variants={fadeIn("up",0.1)}
        initial="hidden"
        whileInView={"show"}
        viewport={{once:false,amount:0.7}}
         key={item.name}  className='relative md:flex-col lg:flex-row gap-36 w-60 h-60 text-center cursor-pointer'>
          <img className='max-w-[100%] object-cover h-[100%] rounded-xl' src={item.image} alt={item.name} />
          <h1 className='absolute top-2 text-gray-100 text-xl pl-6 '>{item.name}</h1>
          <h1 className='absolute bottom-0 text-gray-100 text-2xl font-bold p-5'>{item.rate}</h1>
          </motion.div>
      ))}
    </div>
</section>
  )
}

export default RelatedItems
