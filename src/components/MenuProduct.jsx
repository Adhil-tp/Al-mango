import React, { useEffect, useState } from 'react';
import { useCart } from '../context/CartContext'; // Import the custom hook
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faPlus } from '@fortawesome/free-solid-svg-icons';

const MenuProduct = ({ product }) => {
  const { addToCart, cartItems } = useCart(); // Use the custom hook to access cart
  const [isAdded, setAdded] = useState(false);
  const [selectedSize, setSelectedSize] = useState(null);

  useEffect(() => {
    const isInCart = cartItems.some(item => item.id === product.id);
    setAdded(isInCart); // Check if the product is already in the cart
  }, [cartItems, product.id]);

  const handleSizeSelection = (size) => {
    setSelectedSize(size); // Set the selected size
  };

  const handleChange = () => {
    // If the product price requires size selection but no size is selected, alert the user
    if (typeof product.price === 'object' && !selectedSize) {
      alert('Please select a size before adding to the cart.');
      return;
    }

    // Determine the price based on the selected size, or use the product's price if no size is required
    const price = typeof product.price === 'object'
      ? (selectedSize === 'small'
          ? product.price.small.toFixed(3)
          : product.price.large.toFixed(3))
      : product.price.toFixed(3);

    // Create a product object with the selected size (if any) and correct price
    const productWithSize = {
      ...product,
      price: parseFloat(price), // Convert price to a numeric value
      size: selectedSize || null, // Set the selected size or null if no size is needed
      quantity: 1,
    };

    addToCart(productWithSize); // Add the product with size and price to the cart
    setAdded(true);
  };

  const truncatedDescription = (description, maxLength) => {
    return description.length > maxLength ? description.slice(0, maxLength) + '...' : description;
  };

  const truncatedProductName = (name, maxLength) => {
    return name.length > maxLength ? name.slice(0, maxLength) + '...' : name;
  };

  return (
    <div className='flex items-center pr-4 lg:pt-24 gap-x-5 pb-4 lg:pb-20 border-b-2 overflow-hidden'>
      <Link to={`/product/${product.id}`} className="no-underline">
        <img src={product.image} alt="ProductImg" className='w-20 h-20 six:h-32 six:w-32 object-cover rounded-lg mr-10' />
      </Link>
      <div className='flex flex-col justify-between h-20 six:h-32 w-full'>
        <h4 className='flex text-sm md:text-lg lg:text-2xl font-semibold '>{truncatedProductName(product.name, 16)}</h4>
        <p className='text-gray-600 mb-2 text-xs md:text-sm lg:text-lg'>{truncatedDescription(product.description, 30)}</p>
        <div className="flex">
          {typeof product.price === "object" ? (
            isAdded ? (
              // Display selected size and its price as plain text
              <p className="text-orange-500 font-semibold">
                {selectedSize === 'small' ? `Small: OMR ${product.price.small.toFixed(3)}` : `Large: OMR ${product.price.large.toFixed(3)}`}
              </p>
            ) : (
              // Display size selection buttons
              <div className='flex space-x-4 mb-2 text-xs'>
                <button
                  className={`px-1 py-2 rounded ${selectedSize === 'small' ? 'bg-orange-500 text-white' : 'bg-gray-200 text-orange-500'}`}
                  onClick={() => handleSizeSelection('small')}
                >
                  Small: OMR {product.price.small.toFixed(3)}
                </button>
                <button
                  className={`px-2 py-1 rounded ${selectedSize === 'large' ? 'bg-orange-500 text-white' : 'bg-gray-200 text-orange-500'}`}
                  onClick={() => handleSizeSelection('large')}
                >
                  Large: OMR {product.price.large.toFixed(3)}
                </button>
              </div>
            )
          ) : (
            <p className='text-orange-500'>
              OMR {product.price.toFixed(3)}
            </p>
          )}
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
