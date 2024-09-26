import React from "react";
import Category from "../components/homecategories";

function SecondComponent() {
    return (
      <div className="bg-white w-full h-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:items-start lg:flex-col lg:items-center lg:custom-background">
        <p className="text-black text-[18px] xs:text-[12px] sm:text-[15px] md:text-[18px] font-bold  mb-4 sm:mb-6">Select by category</p>
        <div className="w-full h-[80%] flex justify-start sm:flex-nowrap overflow-x-scroll hide-scrollbar gap-4 lg:gap-10 lg:grid grid-flow-col grid-rows-2 lg:justify-center ">
            <Category />
            <Category />
            <Category />
            <Category />
            <Category />
            <Category />
            <Category />
            <Category />
            <Category />
        </div>
      </div>
    );
}
  

  export default SecondComponent;