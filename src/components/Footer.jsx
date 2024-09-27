import React from 'react';
import FbIcon from '../assets/icons/fb.png';
import InstaIcon from '../assets/icons/insta.png';
import BgImage from '../assets/backgound/background.jpg' 


const Footer = () => {
  return (
    <div  className="flex justify-between items-center p-4 text-white w-full h-30 fixed bottom-0 left-0 shadow-md">
    <div style={{ backgroundImage: `url(${BgImage})` }}  className="absolute inset-0 bg-cover bg-center z-0">
        {/* Tint Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50 z-0"></div>
      </div>
      <div  className=" z-10 mb-36 font-semibold sm:text-3xl md:text-3xl lg:text-4xl">
      <h1> Al-Mango </h1>
      </div>
      <div className='absolute top-4 right-4 p-2 shadow-md text-right font-semibold'>
        <h3 className="sm:text-1xl mr-4 ">Contact Us:</h3>
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
    </div>
   
  );
}

export default Footer;