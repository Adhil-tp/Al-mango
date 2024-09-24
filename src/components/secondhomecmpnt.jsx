import React from "react";
import Category from "../components/homecategories";

function SecondComponent() {
    return (
      <div className="bg-white w-full h-[20%] pl-3 pr-3">
        <p className="text-black text-2xl font-bold ml-[30px] mb-4 sm:mb-6">Select by category</p>
        <div className="w-full h-[80%] flex justify-start sm:flex-nowrap overflow-x-scroll hide-scrollbar gap-4">
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