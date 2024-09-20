import React, { useState } from 'react';
import CartIcon from '../assets/icons/Cart.png';
import MenuIcon from "../assets/icons/Menu.png";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to track if the menu is open or closed

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Toggle the menu state
  };

  return (
    <div className="flex justify-between items-center p-4 bg-transparent text-black w-full h-16 fixed top-0 left-0 shadow-md z-50">
      {/* Left Section: Logo and Brand Name */}
      <div className="flex items-center">
        {/* Responsive Logo */}
        <div className="w-10 h-10 sm:w-16 sm:h-16 bg-gray-300 mr-2 sm:mr-4"></div>
        {/* Responsive Brand Name */}
        <h1 className="font-semibold text-lg sm:text-xl ml-2">Al-Mango</h1>
      </div>

      {/* Right Section: Cart Icon and Menu Items */}
      <div className="flex items-center space-x-4 sm:space-x-8 pr-2 sm:pr-6 relative z-50">
        {/* Cart Icon*/}
        <img src={CartIcon} alt="Cart" className="w-5 h-5 sm:w-6 sm:h-6  filter invert" />

        {/* Conditional Rendering for Menu Items or Icon */}
        <div className="hidden md:flex space-x-4">
          <li className="hover:bg-gray-700 cursor-pointer">Home</li>
          <li className="hover:bg-gray-700 cursor-pointer">Menu</li>
          <li className="hover:bg-gray-700 cursor-pointer">Contact</li>
        </div>

        {/* Menu Icon - Responsive size (visible only on mobile) */}
        <div onClick={toggleMenu} className="md:hidden cursor-pointer filter invert">
          <img src={MenuIcon} alt="Menu" className="w-5 h-5 sm:w-6 sm:h-6" />
        </div>
      </div>

      {/* Sliding Menu */}
      <div
        className={`fixed top-16 right-0 w-2/3 sm:w-48 h-40 sm:h-48 bg-gray-800 md:hidden text-white transform ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        } transition-transform duration-300 ease-in-out z-40 p-4 overflow-y-auto`}
      >
        <ul className="p-4">
          <li className="p-2 hover:bg-gray-700 cursor-pointer">Home</li>
          <li className="p-2 hover:bg-gray-700 cursor-pointer">Menu</li>
          <li className="p-2 hover:bg-gray-700 cursor-pointer">Contact</li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
