import React from "react";
import {motion} from 'framer-motion';
import {fadeIn} from '../variants';
import { Link } from "react-router-dom";
// import Icon from "../assets/images/Products/Beef Cheetos Fries.jpg"

function Overlapcmpnt({product}) {

  const truncatedDescription = (description, maxLength) => {
    return description.length > maxLength ? description.slice(0, maxLength) + '...' : description;
  };
  return (
    <motion.div 
      variants={fadeIn("up", 0.2)}
      initial="hidden"
      whileInView={"show"}
      className=" flex sm:justify-between justify-center items-center gap-3 sm:right-4 pt-12 xs:pt-20 md:pt-24 m-0 flex-nowrap top-3 md:top-8 lg:top-4 relative "
    >
      {product.map((item, index) => (
      <Link to={`/product/${item.id}`} key={item.id}>
        <div
          key={item.id}
          className={`${index === 1 ? " xs:w-24  sm:w-[8rem]  md:w-36  lg:w-56 aspect-[2/3] mt-12  sm:mt-16 md:mt-12 md:mb-6 pb-4" : " xs:w-20  xs:mb-4 sm:w-[7rem] md:w-36  md:mb-14 lg:w-48 aspect-[2/3]"} flex justify-center flex-col bg-landing opacity-90 text-white rounded-xl shadow-custom-x-y`}
        >
          <div className="flex flex-col w-full h-full justify-center items-center bg-transparent">
            <img
              src={item.image}
              alt={item.name}
              className={`${
                index === 1
                ? "w-16 h-16 xs:w-16 xs:h-16 sm:w-20 sm:h-20 md:w-32 md:h-32 lg:w-32 lg:h-32 xs:mb-16 sm:mb-24 md:mb-32 lg:mb-52"
                : "w-12 h-12 xs:w-12 xs:h-12 sm:w-16 sm:h-16 md:w-24 md:h-24 lg:w-28 lg:h-28 mb-[8rem] xs:mb-28 sm:mb-36 md:mb-48 lg:mb-60"
              } rounded-full object-cover absolute`}
              style={{ marginTop: index === 1 ? '-70px' : '0' }}
            />
            <div className={`${index === 1 ? "pt-6 px-2 md:pt-0 md:px-12 sm:pt-16 sm:px-4 xs:px-4" : "pt-6 px-2 md:pt-0 md:px-8 sm:pt-8 sm:px-2 xs:px-4 xs:pt-7"}`}>
  <h3 className=" text-[10px]  sm:text-[14px] md:text-[14px] sm:text-xs md:text-xs lg:text-lg text-center mt-2 sm:mt-3 lg:mt-4 xs:font-thin">
    {item.name}
  </h3>
  <p className=" text-[8px] sm:text-[14px] md:text-[14px] sm:text-xs mt-1 sm:mt-2 md:mt-3 lg:mt-4 text-center md:text-xs font-thin">
    {/* Check if item.price is an object and render appropriately */}
    {typeof item.price === "object"
      ? `OMR ${item.price.small} - OMR ${item.price.large}` // Adjust based on your price logic
      : `OMR ${item.price}`} {/* Fallback if single price */}
  </p>
  <p className="text-[8px] -tracking-wide  sm:text-9px md:text-[8px] xs:mt-2 sm:text-xs mt-1 text-center md:text-xs">
    {truncatedDescription(item.description, 25)}
  </p>
</div>

          </div>
        </div>
       </Link>
      ))}
    </motion.div>
  );
}

export default Overlapcmpnt;