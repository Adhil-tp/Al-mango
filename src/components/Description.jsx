import React,{useState} from 'react'
import {motion} from 'framer-motion'
import {fadeIn} from '../variants'

const Description = ({product}) => {

    const [detailsTab,setDetailsTab] = useState("description")

    if(!product){
        return <p>Loading product details...</p>
    }

    const tabs = {
        description:(
            <p>
                {product.description || "No description available for this products."}
            </p>
        ),
        additionalInfo:(
            <p>
                Here is some additional information about the product, including its dimensions, shipping details, and material composition.
            </p>
        ),
    }

    const tabNames = ['description','additionalInfo']


  return (
<section className=" w-[90%] ml-[.5rem] flex flex-col justify-center  text-sm sm:bg-transparent rounded-lg" >
    <motion.div 
    variants={fadeIn("up",0.2)}
    initial="hidden"
    whileInView={"show"}
    viewport={{once:false,amount:0.7}}
     className="flex  gap-2  pt-14 pl-4">
        {tabNames.map((tab)=>(
            <button
            key={tab}
            className={`border border-gray-400 p-2  text-center ${detailsTab === tab ? 'bg-buttons': 'bg-gray-200'}`}
            onClick={()=> setDetailsTab(tab)}>{tab==='description' ? 'Description' : 'Additional Information'} 
            </button>
        ))}
        </motion.div>

        <motion.div 
    variants={fadeIn("up",0.2)}
    initial="hidden"
    whileInView={"show"}
    viewport={{once:false,amount:0.7}}
     className='p-6 m-4 -mr-4 md:-mr-9 md:m-9  border-2 bg-white border-black/10 lg:rounded-lg'>
            {tabs[detailsTab]}
        </motion.div>
    <hr className="px-1 border border-gray-400 m-10" />
  </section>
  )
}

export default Description
