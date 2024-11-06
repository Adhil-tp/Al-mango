import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
import { Link } from 'react-router-dom';
// import image from '../assets/backgound/background.jpg'

const RelatedItems = ({ relatedProducts, currentProductId }) => {

  const relatedItems = relatedProducts.filter(
    (item) => item.category === currentProductId && item.id !== currentProductId)
    .slice(0,6);
  // console.log('related items:',relatedItems);

  return (
    <section className='p-4 pb-12 flex flex-col justify-between items-center text-sm'>
      <motion.div 
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
        className='flex flex-col'
      >
        <h1 className='text-3xl font-bold'>Related Items</h1>
      </motion.div>

      {/* Display related items */}
      
      <div className=' grid grid-cols-2 grid-flow-row md:grid-rows gap-6 lg:gap-36 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 pt-14'>
        {relatedItems.length > 0 ? (
          relatedItems.map((item) => (
            <Link to={`/product/${item.id}`} key={item.id}>
            <motion.div 
              key={item.id}
              variants={fadeIn("up", 0.1)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.7 }}
              className='relative md:flex-col lg:flex-row gap-36 xs:w-26 xs:h-26 md:w-90 md:h-90 lg:w-90 lg:h-100 text-center cursor-pointer'
            >
              <div className="absolute bottom-2  inset-0 flex items-center justify-center text-white bg-black bg-opacity-45 p-2 rounded-lg"></div>
              <img className='max-w-[100%] object-cover h-[12rem] rounded-xl' src={item.image} alt={item.name} />
              <h1 className='absolute top-2 text-gray-100 text-xl xs:text-md sm:text-sm md:text-md  pl-6 '>{item.name}</h1>
              <h1 className='absolute bottom-0 md:bottom-10 text-gray-100 text-2xl font-bold p-5'>${item.price}</h1>
            </motion.div>
            </Link>
          ))
        ) : (
          <p className="text-gray-500">No related items found.</p>
        )}
      </div>
    </section>
  );
};

export default RelatedItems;
