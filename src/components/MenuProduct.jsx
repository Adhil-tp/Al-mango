import React, { useContext, useEffect, useState } from 'react';
import { useCart } from '../context/CartContext'; // Import the custom hook
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faPlus } from '@fortawesome/free-solid-svg-icons';
import Img from "../assets/items/images/fries.avif"

const MenuProduct = ({ product }) => {
  const { addToCart, cartItems } = useCart(); // Use the custom hook to access cart
  const [isAdded, setAdded] = useState(false);

  useEffect(() => {
    const isInCart = cartItems.some(item => item.id === product.id);
    setAdded(isInCart); // Check if the product is already in the cart
  }, [cartItems, product.id]);

  const handleChange = () => {
    addToCart({ ...product, quantity: 1 }); // Add product to the cart
    setAdded(true);
  };

  const truncatedDescription = (description, maxLength) => {
    return description.length > maxLength ? description.slice(0, maxLength) + '...' : description;
  };

  const truncatedProductName = (name, maxLength) => {
    return name.length > maxLength ? name.slice(0, maxLength) + '...' : name;
  };

  return (
    <div className='flex items-center  pr-4 pt-8 gap-x-5'>
      <Link to={`/product/${product.id}`} className="no-underline">
        <img src={Img} alt="ProductImg" className='w-20 h-20 six:h-32 six:w-32 object-cover rounded-lg mr-10' />
      </Link>
      <div className='flex flex-col justify-between h-20 six:h-32 w-full'>
        <h4 className='flex text-sm md:text-lg lg:text-2xl font-semibold '>{truncatedProductName(product.name, 16)}</h4>
        <p className='text-gray-600 mb-2 text-xs md:text-sm lg:text-lg'>{truncatedDescription(product.description, 30)}</p>
        <div className='flex'>
          <p className='text-xs md:text-sm lg:text-lg font-bold mb-4 text-orange-500'>${product.price}</p>
        </div>
      </div>
      <button
        className='bg-orange-500 text-white px-2 py-2 rounded hover:bg-red-600 h-8 flex items-center justify-center'
        onClick={handleChange}
        disabled={isAdded}
      >
        <FontAwesomeIcon icon={isAdded ? faCheck : faPlus} />
      </button>
    </div>
  );
};

export default MenuProduct;
