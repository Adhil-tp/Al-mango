// src/components/CartTotal.js
import React from "react";

const CartTotal = ({ total }) => {
    return (
        <div className="mt-6 border-t-2 pt-4 flex justify-end items-center space-x-2 sm:space-x-4">
            <h2 className="text-md sm:text-lg font-bold">Total:</h2>
            <h2 className="text-md sm:text-lg font-bold">₹{total.toFixed(2)}</h2>
            <div className="flex justify-center mt-4 mb-2">
                    <button className="bg-orange-500 text-white font-bold py-2 px-4 sm:px-6 rounded-full shadow-lg hover:bg-orange-600 transition duration-300">
                        Proceed to Order
                    </button>
                </div>
        </div>
        
    );
};

export default CartTotal;
