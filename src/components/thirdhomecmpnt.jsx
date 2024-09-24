import React from "react";
import Recommenditem from "../components/recommenditem";

function ThirdComponent() {
  return (
    <div className="bg-white w-screen h-[35%] pl-4 pr-3">
        <div className="bg-white w-full h-[20%] text-center">
            <p className="text-black font-bold text-2xl pt-3">Recommend for you</p>
        </div>
        <div className="bg-white w-full  h-[100%] flex justify-start overflow-x-scroll space-x-7  flex-row sm:flex-nowrap hide-scrollbar">
        <Recommenditem/>
        <Recommenditem/>
        <Recommenditem/>
        <Recommenditem/>
        <Recommenditem/>
        <Recommenditem/>
        <Recommenditem/>
        </div>
    </div>
  );
}
export default ThirdComponent;
