// src/pages/Menu.jsx
import React, { useContext, useEffect, useState } from 'react';
import MenuProduct from '../components/MenuProduct';
import SearchBar from '../components/SearchBar';
import ViewCart from '../components/ViewCart';
import foodProducts from '../data/foodProducts';
import { CartContext } from '../context/CartContext';
import { useParams } from 'react-router-dom';

const Menu = () => {
  const { cartItems, addToCart } = useContext(CartContext); // Use addToCart instead of setCartItems
  const { category } = useParams();
  const [selectedCategory, setSelectedCategory] = useState(category || '');
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchTerm,setSearchTerm] = useState('');

 const filterProducts = ()=>{
    const products = category ? foodProducts.filter(product => product.category === category) : foodProducts;
    // console.log('filtered products:', products);
    const searchedProducts = searchTerm ? products.filter(product=> product.name.toLowerCase().includes(searchTerm.toLowerCase())):products;

    setFilteredProducts(searchedProducts);
    
  }

  useEffect(()=>{
    filterProducts();
    window.scrollTo(0, 0);
  },[category,searchTerm]);

  const handleAddToCart = (product) => {
    addToCart(product); // Call the addToCart function from context
    console.log('cart:',product)
  };

  return (
    <div className='mt-14 w-screen  bg-stone-100 flex flex-col items-center'>
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} onSearch={filterProducts}/>
      <div className='flex justify-center w-screen'>
      </div>
      <div className='grid grid-cols-1 six:grid-cols-2 lg:grid-cols-3 gap-6 px-4 py-16 overflow-auto w-full'>
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product,index) => (
            <MenuProduct 
              product={product} 
              key={`${product.id}-${index}`} 
              isInCart={cartItems.some(item => item.id === product.id)}
              onAddToCart={()=>handleAddToCart(product)} 
            />
          ))
        ) : (
          <p className="text-center text-gray-500">No products found in this category.</p>
        )}
      </div>
      {cartItems.length > 0 && <ViewCart />}
    </div>
  );
};

export default Menu;
