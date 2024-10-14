// src/components/CartTotal.js
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

const CartTotal = ({ total,placeOrder }) => {
    const [orderPlaced,setOrderPlaced] = useState(false)
    const {setCartItems} =useCart()

    const handlePlaceOrder = ()=>{
        placeOrder();
        setCartItems([])
        setOrderPlaced(true)
    }

    return (
        <div className="pt-4 pb-4 flex flex-row items-center space-x-4 sm:space-x-4">
            {orderPlaced ? (
                // Show message and link to order other items once the order is placed
                <>
                    <p className="text-xl sm:text-xl font-bold mb-4">
                        🎉 Order Placed Successfully!
                    </p>
                    <Link
                        to="/menu"
                        className="bg-green-500 text-white font-bold text-lg py-2 px-4 sm:px-6 rounded-full shadow-lg hover:bg-green-600 transition duration-300"
                    >
                        Order Other Items
                    </Link>
                </>
            ) : (
                // Before the order is placed, show total and "Proceed to Order" button
                <>
                    <p className="text-xl sm:text-xl font-bold pl-8">Total:</p>
                    <p className="text-xl sm:text-xl font-bold">₹{total.toFixed(2)}</p>

                    <div className="flex justify-center mt-4 mb-2">
                        <button
                            onClick={handlePlaceOrder}
                            className="bg-orange-500 text-white font-bold text-lg py-2 px-4 sm:px-6 rounded-full shadow-lg hover:bg-orange-600 transition duration-300"
                        >
                            Proceed to Order
                        </button>
                    </div>
                </>
            )}
        </div>
    );
};

export default CartTotal;
