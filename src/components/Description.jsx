import React,{useState} from 'react'

const Description = () => {

    const [detailsTab,setDetailsTab] = useState("description")

    const tabs = {
        description:(
            <p>
                This is the product description. It provides details about the product, such as features, materials, and usage instructions.
            </p>
        ),
        additionalInfo:(
            <p>
                Here is some additional information about the product, including its dimensions, shipping details, and material composition.
            </p>
        ),
        reviews:(
            <p>
                Customer reviews are listed here. See what other people think about the product!
            </p>
        ),
    }

    const tabNames = ['description','additionalInfo','reviews']


  return (
<section className=" w-[90%] ml-[1.4rem] flex flex-col justify-center  text-sm sm:bg-transparent rounded-lg" >
    <div className="flex  gap-2  pt-14 pl-4">
        {tabNames.map((tab)=>(
            <button
            key={tab}
            className="border border-gray-400 p-2  text-center"
            onClick={()=> setDetailsTab(tab)}>{tab==='description' ? 'Description' : tab === 'additionalInfo' ? 'Additional Information':'Reviews'} 
            </button>
        ))}
        </div>

        <div className='p-6 m-7 border-2 border-black/10 '>
            {tabs[detailsTab]}
        </div>
    <hr className="px-1 border border-gray-400 m-10" />
  </section>
  )
}

export default Description
