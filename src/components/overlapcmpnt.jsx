import React from "react";
import FoodImg1 from '../assets/images/foodimg2.jpg'; // Replace with actual image paths
import FoodImg2 from '../assets/images/foodimg2.jpg';
import FoodImg3 from '../assets/images/foodimg3.jpg';

function Overlapcmpnt() {
  const foodItems = [
    { id: 1, img: FoodImg1, title: "Spicy seasoned noodles", price: "$2.29", available: "22 Bowls available" },
    { id: 2, img: FoodImg2, title: "Salted Pasta  mushroom", price: "$2.69", available: "118 Bowls available" },
    { id: 3, img: FoodImg3, title: "Beef dumpling soursoup", price: "$2.99", available: "56 Bowls available" },
  ];

  return (
    <div className="w-full flex sm:justify-between justify-center items-center gap-6 p-3 flex-nowrap top-3">
      {foodItems.map((item) => (
        <div key={item.id} className="w-40 h-56 sm:w-48 sm:h-64 flex justify-center flex-col  bg-gray-800 text-white rounded-lg p-4 shadow-lg relative">
          <div className="flex flex-col w-full justify-center items-center bg-transparent mb-24">
            <img src={item.img} alt={item.title} className="w-20 h-20 sm:w-24 sm:h-24 rounded-full object-cover" />
            <h3 className="text-sm sm:text-lg font-bold text-center">{item.title}</h3>
            <p className="text-xs sm:text-sm mt-2 text-center">{item.price}</p>
            <p className="text-xs mt-1 text-center">{item.available}</p>
          </div>
          </div>
      ))}
    </div>
  );
}

export default Overlapcmpnt;
