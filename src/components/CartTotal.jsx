// src/components/CartTotal.js
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

const CartTotal = ({ total,placeOrder}) => {

    const handlePlaceOrder = ()=>{
        placeOrder();
    }


    return (
        <div className=" py-0 sm:py-2    flex flex-row items-center justify-center sm:space-x-4 ">
                    <p className="text-xl sm:text-xl">Total:</p>
                    <p className="text-xl sm:text-xl font-bold pr-16">₹{total.toFixed(2)}</p>

                    <div className="flex justify-center mt-4 mb-2">
                        <button
                            onClick={handlePlaceOrder}
                            className="bg-orange-500 text-white font-bold text-lg py-2 px-4 sm:px-6 rounded-full shadow-lg hover:bg-orange-600 transition duration-300"
                        >
                            Proceed to Order
                        </button>
                    </div>
            
        </div>
    );
};

export default CartTotal;
