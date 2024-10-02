// src/pages/cart.jsx
import React from "react";
import useCart from "../hooks/UseCart";
import CartItem from "../components/cartItem";
import CartTotal from "../components/CartTotal";
import CartEmpty from "../components/cartEmpty";

const Cart = () => {
    const initialItems = [
        {
            id: 1,
            name: "Chicken Single Patty Burger",
            price: 149,
            quantity: 1,
            note: "",
            imgsrc: "src/assets/items/images/doubleBurger.avif",
        },
        {
            id: 2,
            name: "Barbeque Chicken Spicy Pizza",
            price: 399,
            quantity: 2,
            note: "",
            imgsrc: "src/assets/items/images/pizzaImage.avif",
        },
        {
            id: 3,
            name: "Hot Crispy French fries",
            price: 49,
            quantity: 4,
            note: "",
            imgsrc: "src/assets/items/images/fries.avif",
        },
    ];
        
    const {
        cartItems,
        incrementItem,
        decrementItem,
        deleteItem,
        updateNote,
        calculateTotal,
    } = useCart(initialItems);

    return (
        <div className="w-full p-2 sm:p-4 mx-auto bg-gray-100 shadow-lg rounded-lg flex flex-col justify-between">
            {cartItems.length === 0 ? (
                <CartEmpty />
            ) : (
                <>
                    <div className="flex-1">
                        {cartItems.map((item) => (
                            <CartItem
                                key={item.id}
                                item={item}
                                incrementItem={incrementItem}
                                decrementItem={decrementItem}
                                updateNote={updateNote}
                                deleteItem={deleteItem}
                            />
                        ))}
                    </div>
                    <CartTotal total={calculateTotal()} />
                </>
            )}
        </div>
    );
};

export default Cart;
