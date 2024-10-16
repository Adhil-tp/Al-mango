import React from "react";
import {motion} from 'framer-motion';
import {fadeIn} from '../variants';
import { Link } from "react-router-dom";

function Overlapcmpnt({product}) {
  return (
    <motion.div 
      variants={fadeIn("up", 0.2)}
      initial="hidden"
      whileInView={"show"}
      className="w-full flex sm:justify-between justify-center items-center gap-2 pt-12 m-0 flex-nowrap top-3 md:top-8 lg:top-4 relative"
    >
      {product.map((item, index) => (
      <Link to={`/product/${item.id}`} key={item.id}>
        <div
          key={item.id}
          className={`${index === 1 ? "w-[11rem] xs:w-36  sm:w-40  md:w-48  lg:w-56 aspect-[2/3] mt-12  sm:mt-16 md:mt-12 md:mb-6 pb-4" : "w-[9rem] xs:w-28 xs:mb-4 sm:w-32 md:w-40  md:mb-14 lg:w-48 aspect-[2/3]"} flex justify-center flex-col bg-landing text-white rounded-xl shadow-custom-x-y`}
        >
          <div className="flex flex-col w-full h-full justify-center items-center bg-transparent">
            <img
              src={item.image}
              alt={item.name}
              className={`${
                index === 1
                ? "w-14 h-14 xs:w-20 xs:h-20 sm:w-20 sm:h-20 md:w-32 md:h-32 lg:w-32 lg:h-32 xs:mb-28 sm:mb-24 md:mb-32 lg:mb-52"
                : "w-12 h-8 xs:w-16 xs:h-16 sm:w-16 sm:h-16 md:w-24 md:h-24 lg:w-28 lg:h-28 mb-[8rem] xs:mb-40 sm:mb-36 md:mb-48 lg:mb-60"
              } rounded-full object-cover absolute`}
              style={{ marginTop: index === 1 ? '-70px' : '0' }}
            />
            <div className={`${index === 1 ? "pt-6 px-2 md:pt-20 md:px-12 sm:pt-16 sm:px-4 xs:px-4 " : "pt-6 px-2 md:pt-20 md:px-8 sm:pt-8 sm:px-2 xs:px-4 xs:pt-7"}`}>
              <h3 className="text-xs xs:text-[14px] sm:text-[14px] md:text-[14px] sm:text-xs md:text-xs lg:text-lg text-center mt-2 sm:mt-3 lg:mt-4 xs:font-thin">
                {item.name}
              </h3>
              <p className="text-xs xs:text-[14px] sm:text-[14px] md:text-[14px] xs:mt-2 xs:mb-4 sm:text-xs mt-2 sm:mt-2 md:mt-3 lg:mt-4 text-center md:text-xs font-thin">
                {item.price}
              </p>
              <p className="text-xs tracking-wider  xs:text-[9px] sm:text-9px] md:text-[8px] xs:mt-2 sm:text-xs mt-1 text-center md:text-xs">
                {item.description}
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