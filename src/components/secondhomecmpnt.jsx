import React from "react";
import Category from "../components/homecategories";
import { Link } from "react-router-dom";

function SecondComponent({products}) {
  const uniqueCategories = Array.from(new Set(products.map(product => product.category)))
    return (
      <div className="bg-white w-full h-auto px-4 sm:px-6 md:px-6 lg:px-8 flex flex-col sm:items-start lg:flex-col lg:items-center lg:custom-background">
        <p className="text-black text-[18px] xs:text-[18px] sm:text-[18px] md:text-[18px] font-bold  mb-4 sm:mb-6">Select by category</p>
        <div className="w-full h-[80%] flex justify-start sm:flex-nowrap overflow-x-scroll hide-scrollbar gap-4 lg:gap-10 lg:grid grid-flow-col grid-rows-2 lg:justify-center ">
          {uniqueCategories.map((category,index)=>{

            const product = products.find(product => product.category === category);
            const categoryImg = product ? product.image : '';
          
          return  (
            <Link to={`/category/${category}`} key={index}>
              <Category category={category} image={categoryImg} />
            </Link>
          )
          })}
            {/* <Category />
            <Category />
            <Category />
            <Category />
            <Category />
            <Category />
            <Category />
            <Category /> */}
        </div>
      </div>
    );
}
  

  export default SecondComponent;