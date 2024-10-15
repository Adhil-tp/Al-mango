// import { useEffect, useState } from "react";

// const useCart = () => {
//     // Initialize cartItems from localStorage or empty array if not available
//     const [cartItems, setCartItems] = useState(() => {
//         const savedItems = localStorage.getItem('cartItems');
//         return savedItems ? JSON.parse(savedItems) : [];
//     });

//     // Persist cartItems to localStorage whenever they change
//     useEffect(() => {
//         localStorage.setItem('cartItems', JSON.stringify(cartItems));
//     }, [cartItems]);

//     // Increment the quantity of an item
//     const incrementItem = (id) => {
//         setCartItems((prevItems) =>
//             prevItems.map((item) =>
//                 item.id === id ? { ...item, quantity: item.quantity + 1 } : item
//             )
//         );
//     };

//     // Decrement the quantity of an item, but don't go below 1
//     const decrementItem = (id) => {
//         setCartItems((prevItems) =>
//             prevItems.map((item) =>
//                 item.id === id && item.quantity > 1
//                     ? { ...item, quantity: item.quantity - 1 }
//                     : item
//             )
//         );
//     };

//     // Delete an item from the cart
//     const deleteItem = (id) => {
//         const updatedCartItems = cartItems.filter((item) => item.id !== id);
//         setCartItems(updatedCartItems);
//     };

//     // Update a note for a specific item in the cart
//     const updateNote = (id, newNote) => {
//         setCartItems((prevItems) =>
//             prevItems.map((item) =>
//                 item.id === id ? { ...item, note: newNote } : item
//             )
//         );
//     };

//     // Calculate the total price of items in the cart
//     const calculateTotal = () => {
//         return cartItems.reduce(
//             (total, item) => total + item.price * item.quantity,
//             0
//         );
//     };

//     return {
//         cartItems,
//         incrementItem,
//         decrementItem,
//         deleteItem,
//         updateNote,
//         calculateTotal,
//     };
// };

// export default useCart;
