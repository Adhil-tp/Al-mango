// src/pages/Cart.jsx
import React, { useContext, useState } from "react";
import CartItem from "../components/CartItem";
import CartTotal from "../components/CartTotal";
import CartEmpty from "../components/CartEmpty";
import { CartContext } from "../context/CartContext";
import OrderFormModal from "../components/OrderForm";

const Cart = () => {
   // Access cart data and functions directly from CartContext
   const {
       cartItems,
       incrementItem,
       decrementItem,
       deleteItem,
       updateNote,
       calculateTotal
   } = useContext(CartContext);

   const [isModalOpen,setIsModalOpen] = useState(false);
   const [tableId,setTableId] = useState("")

   const handlePlaceOrder = ()=>{
    setIsModalOpen(true)
   }

   const handleConfirmOrder  = ()=>{
    const orderDetails = cartItems.map((product) =>({

            name:product.name,
            tableId:tableId,
            notes:product.note,
            price:product.price
    }));

    const orderMessage = `
    New Order Received! 🛎️

    Table ID: ${tableId}

    Order Details:
    ${orderDetails.map((item, index) => `
        ${index + 1}. Product: ${item.name}
           - Price: ₹${item.price.toFixed(2)}
           - Notes: ${item.notes || 'No notes added'}
    `).join('')}

    Total Items: ${cartItems.length}
    Total Amount: ₹${calculateTotal().toFixed(2)}
    `;

    // Assuming you will send this message to the admin or handle it
    console.log(orderMessage); 

    setIsModalOpen(false)

   }

   const handleDeleteItem =()=>{
    deleteItem(product.id)
   }

    return (
        <div className="flex flex-col min-h-screen pt-16">
            <div className="flex-1 bg-theme">
                <div className="custom-background shadow-lg rounded-lg flex flex-col justify-between m-6 lg:m-16">
                    {cartItems.length === 0 ? (
                        <CartEmpty />
                    ) : (
                        <>
                            <h1 className="text-3xl font-bold p-8">Cart</h1>
                            <div className="flex-1">
                                {cartItems.map((product,index) => (
                                    <CartItem
                                        key={`${product.id}-${index}`}
                                        product={product}
                                        incrementItem={incrementItem}
                                        decrementItem={decrementItem}
                                        updateNote={updateNote}
                                        deleteItem={deleteItem}
                                    />
                                ))}
                            </div>
                            <div className="fixed bottom-0 bg-white w-full -ml-6">
                            <CartTotal total={calculateTotal()} placeOrder={handlePlaceOrder} />
                            </div>
                        </>
                    )}
                </div>
            </div>
            {isModalOpen && (
                <OrderFormModal 
                    tableId={tableId}
                    setTableId={setTableId}
                    confirmOrder={handleConfirmOrder}
                    closeModal={()=>setIsModalOpen(false)}
                    />
            )}
        </div>
    );
};

export default Cart;
