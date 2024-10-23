import React from 'react';
import LogoName from '../assets/Icons/Al-Mango-Text.png'
import Logo from '../assets/images/Products/Al-Mango-Logo.png'
import FbIcon from '../assets/Icons/Fb.png';
import InstaIcon from '../assets/icons/Insta.png';
import BgImage from '../assets/backgound/background.jpg' 

const Footer = () => {
  
  return (
    <footer id='footer' className="relative flex justify-between items-center text-white h-60 ">
      <div style={{ backgroundImage: `url(${BgImage})` }} className="absolute inset-0 bg-cover bg-center z-0">
        {/* Tint Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-60 z-0"></div>
      </div>
      <div className="z-10 mb-36 ml-8 font-semibold sm:text-3xl md:text-3xl lg:text-4xl">
        <img src={Logo} alt="Logo" className='pt-8 lg:pt-24 pl-4 w-28 lg:w-32 '/>
        <img src={LogoName} alt="LogoName" className='w-24 lg:w-32 pl-8 lg:pl-4 ' />
      </div>
      <div className='absolute top-4 right-6 p-2 shadow-md text-right font-semibold'>
        <h3 className="sm:text-1xl mr-4">Contact Us:</h3>
        <p className="text-sm sm:text-1xl">+974 123-456-78</p>
        <p className="text-sm sm:text-1xl">+974 123-456-78</p>
      </div>
      <div className="flex flex-col absolute inset-x-0 top-32 text-center items-center justify-center">
        <h2 className="sm:text-1xl font-semibold">Let's Connect! Follow Us on Social Media</h2>
        <div className='flex flex-row p-4 gap-4'>
          <img src={FbIcon} alt="Fb" className="w-5 h-5 sm:w-6 sm:h-6" />
          <img src={InstaIcon} alt="Insta" className="w-5 h-5 sm:w-6 sm:h-6" />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
