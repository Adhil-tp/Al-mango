// src/context/CartContext.jsx
import React, { createContext, useEffect, useState, useContext } from "react";

// Create the CartContext
export const CartContext = createContext();

// CartProvider component
export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState(() => {
        const storedCartItems = localStorage.getItem("cartItems");
        return storedCartItems ? JSON.parse(storedCartItems) : [];
    });

    useEffect(() => {
        localStorage.setItem("cartItems", JSON.stringify(cartItems));
    }, [cartItems]);

    const addToCart = (product) => {
        setCartItems((prevItems) => [...prevItems, product]);
    };

    const incrementItem = (id) => {
        setCartItems((prevItems) =>
            prevItems.map((item) =>
                item.id === id ? { ...item, quantity: item.quantity + 1 } : item
            )
        );
    };

    const decrementItem = (id) => {
        setCartItems((prevItems) =>
            prevItems.map((item) =>
                item.id === id && item.quantity > 1
                    ? { ...item, quantity: item.quantity - 1 }
                    : item
            )
        );
    };

    const deleteItem = (id) => {
        setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
    };

    const updateNote = (id, newNote) => {
        setCartItems((prevItems) =>
            prevItems.map((item) =>
                item.id === id ? {...item,note: [...(item.note || []) ,newNote] } : item
            )
        );
    };

    const calculateTotal = () => {
        return cartItems.reduce(
            (total, item) => total + item.price * item.quantity,
            0
        );
    };

    return (
        <CartContext.Provider
            value={{
                cartItems,
                addToCart,
                incrementItem,
                decrementItem,
                deleteItem,
                updateNote,
                calculateTotal,
            }}
        >
            {children}
        </CartContext.Provider>
    );
};

// Custom hook to use cart functionality
export const useCart = () => {
    return useContext(CartContext);
};
