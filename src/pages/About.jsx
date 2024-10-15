import React, { useEffect } from "react";
import ProductImage from "../assets/images/ProductImage.jpg"
import { useLocation } from "react-router-dom";

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
            <div className="flex flex-col items-center">
                <img className="xs:w-48 md:w-60 rounded-lg" src={ProductImage} alt="branch1" />
                <p>Branch 1</p>
            </div>
            <div className="flex flex-col items-center">
                <img className="xs:w-48 md:w-60 rounded-lg" src={ProductImage} alt="branch1" />
                <p>Branch 1</p>
            </div>
            <div id="contactSection" className="flex flex-col items-center">
                <img className="xs:w-48 md:w-60 rounded-lg" src={ProductImage} alt="branch1" />
                <p>Branch 1</p>
            </div>

            </div>
        </div>
    )
}

export default About