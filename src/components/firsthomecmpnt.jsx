import React from "react";
import Firstimg from '../assets/images/Products/Landinf-2.png'
import Overlapcmpnt from "../components/overlapcmpnt";


function FirstComponent({products}) {

  if (!products) {
    return <div>No products available.</div>
  }

  const specialProducts = products.filter(product => product.category === "Roob Special");

  return (
    <div className="bg-white w-full h-[45vh] sm:h-[55vh] lg:h-[80vh] relative ">
      <div className="w-full h-full relative">
        <img src={Firstimg} alt="Descriptive Text" className="w-full h-full object-cover"/>
        <div className="absolute bottom-0 w-full h-1/4 bg-gradient-to-b from-transparent to-white"></div>
        </div>
        <div className="absolute inset-0 flex justify-center items-center pb-16 sm:pb-24">
        <div className="w-[90%] sm:w-[80%] lg:w-[70%]">
            <Overlapcmpnt key={products} product={specialProducts}  />
        </div>
        </div> 
    </div> 
  );
}

export default FirstComponent;