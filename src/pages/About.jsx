import React, { useEffect } from "react";
import ProductImage from "../assets/images/ProductImage.jpg"
import { useLocation } from "react-router-dom";
import telimg from '../assets/Icons/telphone.jpg'

const About = () => {
    const location =useLocation()

    useEffect(()=>{
        if(location.hash === "#contact"){
            const contactSection = document.getElementById('contactSection')
            if(contactSection){
                contactSection.scrollIntoView({behavior:"smooth"})
            }
        }
    },[location])
    return (
        <div className="w-screen min-h-screen pt-16 bg-stone-100 flex flex-col items-center pb-8">
            <h1 className="text-2xl mt-8">About Us</h1>
            <div className="flex flex-col gap-9 xs:w-3/4 lg:w-1/2 pt-10">
                <p>Welcome to Al-Mango, where flavor meets innovation! Nestled in the heart of Oman, Al-Mango is more than just a cafe—it's a destination for those who crave vibrant, freshly prepared meals and beverages. We pride ourselves on offering a diverse menu that caters to all tastes, from indulgent burgers and wraps to refreshing juices, signature mojitos, and decadent milkshakes.</p>

                <p> At Al-Mango, every dish is crafted with care using the finest ingredients, ensuring a burst of flavor in every bite. Whether you're here to grab a quick coffee, enjoy a leisurely meal, or indulge in our unique offerings, we strive to create a warm, welcoming atmosphere for everyone.</p>

                <p> Join us at Al-Mango and experience a fusion of flavors inspired by Oman's rich culinary heritage with a modern twist. We look forward to serving you soon!</p>
            </div>
            <h1 className="pt-14 text-2xl">Reach out at our branches</h1>
            <div className="pt-10 gap-4 flex xs:flex-col md:flex-row lg:flex-row xs:w-3/4 md:w-1/2 mx-auto justify-center items-center">
            <div className="flex flex-col xs:items-center md:mb-8">
                {/* <img className="xs:w-48 md:w-60 rounded-lg" src={ProductImage} alt="branch1" /> */}
                <p>Near City Cinema</p>
                <p>Sur club souq complex</p>
                <div className="flex items-center space-x-2 md:w-28">
                <img src={telimg} alt="phone" className="w-5 h-5 sm:w-6 sm:h-6" /><p>7146 1234</p>
                </div>
            </div>
            <div className="flex flex-col xs:items-center xs:pt-2 md:mb-6">
                {/* <img className="xs:w-48 md:w-60 rounded-lg" src={ProductImage} alt="branch1" /> */}
                <p>Al Sharia - Sur</p>
                <div className="flex items-center space-x-2 md:w-28">
                <img src={telimg} alt="phone" className="w-5 h-5 sm:w-6 sm:h-6" />
                <p>9576 0011</p>
                </div>
            </div>
            <div id="contactSection" className="flex flex-col xs:items-center xs:pt-2 md:items-start md:mb-6">
                {/* <img className="xs:w-48 md:w-60 rounded-lg" src={ProductImage} alt="branch1" /> */}
                <p>Jabal Shams Road</p>
                <p>Al Hamra</p>
                <div className="flex items-center space-x-2 md:w-28">
                <img src={telimg} alt="phone" className="w-5 h-5 sm:w-6 sm:h-6" />
                <p>9549 9533</p>
                </div>
            </div>
            <div id="contactSection" className="flex flex-col xs:items-center xs:pt-2 md:items-start md:mb-6">
                {/* <img className="xs:w-48 md:w-60 rounded-lg" src={ProductImage} alt="branch1" /> */}
                <p>Near Bank Dhofar</p>
                <p>Al Kamil</p>
                <div className="flex items-center space-x-2 md:w-28">
                <img src={telimg} alt="phone" className="w-5 h-5 sm:w-6 sm:h-6" />
                <p>9864 6463</p>
                </div>
            </div>
            <div id="contactSection" className="flex flex-col xs:items-center xs:pt-2 md:items-start md:mb-6">
                {/* <img className="xs:w-48 md:w-60 rounded-lg" src={ProductImage} alt="branch1" /> */}
                <p>Saih Senida</p>
                <p>Jalan Bani Buali</p>
                <div className="flex items-center space-x-2 md:w-28">
                <img src={telimg} alt="phone" className="w-5 h-5 sm:w-6 sm:h-6" />
                <p>9713 2343</p>
                </div>
            </div>
            <div id="contactSection" className="flex flex-col xs:items-center xs:pt-2 md:mb-6">
                {/* <img className="xs:w-48 md:w-60 rounded-lg" src={ProductImage} alt="branch1" /> */}
                <p>Near Bank Dhofar</p>
                <p>Jalan Bani Bu Hassan</p>
                <div className="flex items-center space-x-2 md:w-28">
                <img src={telimg} alt="phone" className="w-5 h-5 sm:w-6 sm:h-6" />
                <p>9157 1013</p>
                </div>
            </div>
            </div>
        </div>
    )
}

export default About