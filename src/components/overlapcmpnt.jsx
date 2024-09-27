import React from "react";
import FoodImg1 from '../assets/images/foodimg2.jpg';
import FoodImg2 from '../assets/images/foodimg2.jpg';
import FoodImg3 from '../assets/images/foodimg3.jpg';

function Overlapcmpnt() {
  const foodItems = [
    { id: 1, img: FoodImg1, title: "Spicy seasoned noodles", price: "$2.29", available: "22Bowls available" },
    { id: 2, img: FoodImg3, title: "Salted Pasta  mushroom", price: "$2.69", available: "118Bowls available" },
    { id: 3, img: FoodImg2, title: "Beef dumpling soursoup", price: "$2.99", available: "56Bowls available" },
  ];

  return (
    <div className="w-full flex sm:justify-between justify-center items-center gap-2 pt-12 m-0 flex-nowrap top-3 md:top-8 lg:top-4 relative">
      {foodItems.map((item, index) => (
        <div
          key={item.id}
          className={`${index === 1 ? "w-[11rem] xs:w-36  sm:w-40  md:w-48  lg:w-56 aspect-[2/3] mt-12  sm:mt-16 md:mt-12 md:mb-6 pb-4" : "w-[9rem] xs:w-28 xs:mb-4 sm:w-32 md:w-40  md:mb-14 lg:w-48 aspect-[2/3]"} flex justify-center flex-col bg-gray-800 text-white rounded-xl shadow-lg`}>
          <div className="flex flex-col w-full h-full justify-center items-center bg-transparent">
            <img
              src={item.img}
              alt={item.title}
              className={`${
                index === 1
                ? "w-14 h-14 xs:w-20 xs:h-20 sm:w-20 sm:h-20 md:w-32 md:h-32 lg:w-32 lg:h-32 xs:mb-20 sm:mb-24 md:mb-32 lg:mb-52"
                : "w-12 h-8 xs:w-16 xs:h-16 sm:w-16 sm:h-16 md:w-24 md:h-24 lg:w-28 lg:h-28 mb-[8rem] xs:mb-32 sm:mb-36 md:mb-48 lg:mb-60" 
              } rounded-full object-cover absolute`}
              style={{ marginTop: index === 1 ? '-70px' : '0' }}
            />
            <div className={`${index===1? "pt-6 px-2 md:pt-20 md:px-12 sm:pt-16 sm:px-4 xs:px-4":"pt-6 px-2 md:pt-20 md:px-8 sm:pt-8 sm:px-2 xs:px-4 xs:pt-7"}`}>
            <h3 className="text-xs xs:text-[8px] sm:text-[9px] md:text-[10px]  sm:text-xs md:text-xs lg:text-lg  text-center mt-2 sm:mt-3 lg:mt-4 xs:font-thin">
              {item.title}
            </h3>
            <p className="text-xs xs:text-[6px] sm:text-[7px] md:text-[8px]  xs:mt-0 sm:text-xs mt-1 sm:mt-2 md:mt-3 lg:mt-4 text-center md:text-xs font-thin">{item.price}</p>
            <p className="text-xs xs:text-[6px] sm:text-[7px] md:text-[8px]  xs:mt-0 sm:text-xs mt-1 text-center md:text-xs font-thin">{item.available}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Overlapcmpnt;
