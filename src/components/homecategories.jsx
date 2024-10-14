import React from "react";
// import Categoryimg from '../assets/images/categoryimg.jpg'
import { Link } from "react-router-dom";

function Category({category,image}) {
  console.log(category,image)
  return (
    <div className=" text-center relative flex flex-col justify-center items-center">
      <div className="bg-slate-200  w-[80px] aspect-square sm:w-[100px] lg:w-[120px] mb-[10px] rounded-lg flex flex-row justify-center items-center overflow-hidden">
        <div className="bg-black w-[60%] aspect-square rounded-full">
          <img  src={image} className="w-full h-full rounded-full" alt="Category" />
        </div>
      </div>
      <p className="bottom-0  text-black font-bold text-sm sm:text-base md:text-lg lg:text-xl mb-4 sm:mb-6">{category}</p>
    </div>
  );
}

export default Category;
