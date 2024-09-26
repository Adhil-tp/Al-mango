import React from "react";
import Firstimg from '../assets/images/homefirstimg.jpg'
import Overlapcmpnt from "../components/overlapcmpnt";


function FirstComponent() {
  return (
    <div className="bg-white w-full h-[45vh] sm:h-[55vh] lg-[70vh] relative pb-0">
        <img src={Firstimg} alt="Descriptive Text" className="w-full h-full object-cover"/>
        <div className="absolute inset-0 flex justify-center items-center pb-16 sm:pb-24">
        <div className="w-[90%] sm:w-[80%] lg:w-[70%]">
            <Overlapcmpnt />
        </div>
        </div> 
    </div> 
  );
}

export default FirstComponent;