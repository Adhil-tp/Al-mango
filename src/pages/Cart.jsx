import React, { useContext, useState } from "react";
import CartItem from "../components/CartItem";
import CartTotal from "../components/CartTotal";
import CartEmpty from "../components/CartEmpty";
import { CartContext } from "../context/CartContext";
import OrderFormModal from "../components/OrderForm";
import { useCart } from "../context/CartContext";
import { toast } from 'react-hot-toast';  // Import toast from react-hot-toast

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

   const { setCartItems } = useCart();

   const [isModalOpen, setIsModalOpen] = useState(false);
   const [tableId, setTableId] = useState("");

   const handlePlaceOrder = () => {
      setIsModalOpen(true);
   };

   const handleConfirmOrder = () => {
      setCartItems([]);
      deleteItem();
      const orderDetails = cartItems.map((product) => ({
            name: product.name,
            tableId: tableId,
            notes: product.note,
            price: product.price
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

      setIsModalOpen(false);

      // Show success toast using react-hot-toast
      toast.success("🎉 Order Placed Successfully!", {
         icon: '✅',  // Tick icon
         position: "top-center",
         duration: 100000,  // Duration of the popup
         style: {
            width: '400px', // Set custom width
            height: '100px', // Set custom height
            backgroundColor: "#4CAF50",
            color: "#FFFFFF",
            padding: '16px',
            borderRadius: '8px',
            fontSize: '20px',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            display: 'flex',
            alignItems: 'center',
         },
      });
   };

   const handleDeleteItem = () => {
      deleteItem(product.id);
   };

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
                        {cartItems.map((product, index) => (
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
               closeModal={() => setIsModalOpen(false)}
            />
         )}
      </div>
   );
};

export default Cart;
