// src/hooks/useCart.jsx
import { useState } from "react";

const useCart = (initialItems) => {
    const [cartItems, setCartItems] = useState(initialItems);

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
                    ? { ...item, quantity: item.quantity - 1 } : item
            )
        );
    };

    const deleteItem = (id) => {
        setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
    };

    const updateNote = (id, newNote) => {
        setCartItems((prevItems) =>
            prevItems.map((item) =>
                item.id === id ? { ...item, note: newNote } : item
            )
        );
    };

    const calculateTotal = () => {
        return cartItems.reduce(
            (total, item) => total + item.price * item.quantity,
            0
        );
    };

    return {
        cartItems,
        incrementItem,
        decrementItem,
        deleteItem,
        updateNote,
        calculateTotal,
    };
};

export default useCart;
