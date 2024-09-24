import React from "react";
import Recommenditem from "../components/recommenditem";

function ThirdComponent() {
  return (
    <div className="bg-white w-screen h-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white w-full h-[20%] text-center">
            <p className="text-black font-bold text-[18px] pt-1 pb-4">Recommend for you</p>
        </div>
    
        <div className=" bg-white w-[100%] h-[80%]  flex justify-start overflow-x-scroll space-x-7  flex-row sm:flex-nowrap hide-scrollbar  ">
        <Recommenditem/>
        <Recommenditem/>
        <Recommenditem/>
        <Recommenditem/>
        <Recommenditem/>
        <Recommenditem/>
        <Recommenditem/>
        </div>
        {/* <div className="absolute inset-0 w-full h-[60%] bg-gradiant-to-b from-white/50 to-transparent"></div> */}
  
        </div>
  );
}
export default ThirdComponent;
