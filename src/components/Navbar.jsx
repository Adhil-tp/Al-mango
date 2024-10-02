import React, { useEffect, useState } from 'react';
import Logo from '../assets/images/Products/Al-Mango-Logo.png';
import CartIcon from '../assets/icons/Cart.png';
import MenuIcon from '../assets/icons/Menu.png';
import { motion } from 'framer-motion';
import { useLocation, Link, useNavigate } from 'react-router-dom';
import ScrollToTop from './ScrollToTop';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to track if the menu is open or closed
  const [scrolled, setScrolled] = useState(false); // State to track scrolling
  const location = useLocation();
  const navigate = useNavigate();

  // Scroll effect to change the background when the user scrolls
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 220) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(()=>{
    setIsMenuOpen(false);
  },[location.pathname])
  // Toggle the menu state
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Handle menu option click (close menu and navigate to the selected route)
  const handleMenuClick = (route) => {
    setIsMenuOpen(false); // Close the menu
    navigate(route);      // Navigate to the desired page
  };

  // Determine if the current route is Home or Product page
  const isHomeOrProdPage = location.pathname === '/' || location.pathname === '/product/:id';
  const isMenuPage = location.pathname === '/menu';

  // Combine color logic based on scroll and route
  const headerTextColor = scrolled ? 'text-black' : isHomeOrProdPage ? 'text-white ' : 'text-black ';
  const headerBgColor = scrolled ? 'bg-white' : isHomeOrProdPage ? 'bg-transparent' : 'bg-white';

  // Combine icon colors based on scroll and route
  const iconColor = scrolled || !isHomeOrProdPage ? 'invert' : ''; // Invert color for black text


  return (
    <motion.header
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.8 }}
    className={`flex justify-between items-center p-4 w-full h-16 fixed top-0 left-0 z-50 transition-all duration-300 ${headerBgColor}`}
    >
    <ScrollToTop />
      {/* Left Section: Logo and Brand Name */}
      <div className="flex items-center">
        {/* Responsive Logo */}
        <div className="w-10 h-10 sm:w-16 sm:h-16 mr-2 sm:mr-4">
          <img src={Logo} alt="logo" />
        </div>
        {/* Responsive Brand Name */}
        <h1 className={`font-semibold text-lg sm:text-xl ml-2 ${headerTextColor}`}>Al-Mango</h1>
      </div>

      {/* Right Section: Cart Icon and Menu Items */}
      <div className="flex items-center space-x-4 sm:space-x-8 pr-2 sm:pr-6 relative z-50">
        {/* Cart Icon */}
        <img src={CartIcon} alt="Cart" className={`w-5 h-5 sm:w-6 sm:h-6 ${iconColor}`} />

        {/* Conditional Rendering for Menu Items or Icon */}
        <ul className="hidden md:flex space-x-4">
          <li className={`cursor-pointer px-3 py-1 rounded ${headerTextColor}`}><Link to={'/'}>Home</Link></li>
          <li className={`cursor-pointer px-3 py-1 rounded ${headerTextColor}`}><Link to={'/menu'}>Menu</Link></li>
          <li className={`cursor-pointer px-3 py-1 rounded ${headerTextColor}`}><Link to={'/contact'}>Contact</Link></li>
        </ul>

        {/* Menu Icon - Responsive size (visible only on mobile) */}
        <div onClick={toggleMenu} className="md:hidden cursor-pointer">
          <img src={MenuIcon} alt="Menu" className={`w-5 h-5 sm:w-6 sm:h-6 ${iconColor}`} />
        </div>
      </div>

      {/* Sliding Menu (Mobile Menu) */}
      <div
        className={`fixed top-16 right-0 w-2/3 sm:w-48 h-40 sm:h-48 bg-gray-800 md:hidden text-white transform ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        } transition-transform duration-300 ease-in-out z-40 p-4 overflow-y-auto`}
      >
        <ul className="p-4">
          <li className="p-2 hover:bg-gray-700 cursor-pointer" onClick={() => handleMenuClick('/')}>Home</li>
          <li className="p-2 hover:bg-gray-700 cursor-pointer" onClick={() => handleMenuClick('/menu')}>Menu</li>
          <li className="p-2 hover:bg-gray-700 cursor-pointer" onClick={() => handleMenuClick('/contact')}>Contact</li>
        </ul>
      </div>
    </motion.header>
  );
}

export default Header;
