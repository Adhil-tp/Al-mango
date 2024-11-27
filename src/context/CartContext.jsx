
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
        const existingProductIndex = cartItems.findIndex((item) => item.id === product.id && item.size === product.size);

        if (existingProductIndex >= 0) {
            // If the product already exists in the cart, update its quantity
            const updatedCartItems = [...cartItems];
            updatedCartItems[existingProductIndex].quantity += product.quantity;
            setCartItems(updatedCartItems);
        } else {
            // If the product does not exist in the cart, add it
            const cartProduct = {
                ...product,
                quantity: product.quantity,
            };
            setCartItems((prevItems) => [...prevItems, cartProduct]);
        }
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
                item.id === id ? { ...item, note: [...(item.note || []), newNote] } : item
            )
        );
    };

    const calculateTotal = () => {
        return cartItems.reduce((total, item) => {
            return total + item.price * item.quantity;
        }, 0);
    };

    return (
        <CartContext.Provider
            value={{
                cartItems,
                setCartItems,
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
