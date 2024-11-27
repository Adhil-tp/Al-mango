import React, { useState } from "react";
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";

const CartItem = ({ product }) => {
    const { incrementItem, decrementItem, deleteItem, updateNote, addToCart } = useCart();
    const [note, setNote] = useState("");
    const size = product.size || null; // Default to null if no size

    const handleAddToCart = () => {
        addToCart(product, size);
    };

    const handleIncrement = () => {
        incrementItem(product.id, size);
    };

    const handleDecrement = () => {
        decrementItem(product.id, size);
    };

    const handleDeleteItem = () => {
        deleteItem(product.id);
    };

    const handleSubmitNote = () => {
        if (note.trim()) {
            updateNote(product.id, note);
            setNote("");
        }
    };

    const getPrice = () => {
        if (typeof product.price === "object" && size) {
            return product.price[size];
        }
        return product.price;
    };

    return (
        <div className="custom-background  sm:px-4  sm:py-5 p-4 sm:p-4 flex flex-col border-b-8 rounded-lg">
            <div className="flex items-center justify-center space-x-2 sm:space-x-4">
               <Link to={`/product/${product.id}`}>
                <img
                    className="rounded-lg w-12 h-12 sm:w-16 sm:h-16 object-cover"
                    src={product.image}
                    alt={product.name}
                />
                </Link>
                <div className="flex flex-row justify-between flex-1 ">
                    <div className="flex flex-col w-25 sm:w-36  pt-2 sm:pt-0 ">
                    <Link to={`/product/${product.id}`}>
                    <h3 className="flex justify-center  text-md sm:text-lg font-bold text-orange-600  text-left">
                        {product.name}
                    </h3>
                    </Link>
                    {/* Display the selected size or null */}

                    {size ?
                    <p className="text-gray-600 text-sm mt-1">
                        Size:{size}
                        </p> : null
                    }
                    </div>
                    <div className="flex flex-col items-center space-x-2 sm:space-x-4 mt-2">
                        <div className="flex gap-2">
                            <button
                                className="bg-orange-200 text-gray-700 px-2 py-0 rounded hover:bg-orange-400"
                                onClick={handleDecrement}
                            >
                                -
                            </button>
                            <span className="text-black-700 font-semibold">
                                {product.quantity}
                            </span>
                            <button
                                className="bg-orange-200 text-gray-700 px-2 py-0 rounded text-center hover:bg-orange-400"
                                onClick={handleIncrement}
                            >
                                +
                            </button>
                        </div>
                        <p className="text-md mt-3 sm:text-sm font-semibold text-gray-800 text-right">
                            OMR:{(getPrice() * product.quantity).toFixed(2)}
                        </p>
                        
                    </div>
                </div>
            </div>

            <div className="flex flex-col mt-4 space-y-2">
                <NoteInput
                    note={note}
                    setNote={setNote}
                    handleSubmit={handleSubmitNote}
                />

                <h4 className="font-semibold text-gray-700 mb-2">Notes:</h4>
                <ul className="mt-2">
                    {(product.note || []).map((note, index) => (
                        <li key={index} className="flex justify-between items-center">
                            {note}
                            <button
                                className="text-red-500 hover:text-red-700"
                                onClick={() => handleNoteDelete(index)}
                            >
                                Delete
                            </button>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="mt-4 flex justify-end">
                <button
                    className="bg-red-100 p-1 rounded-md shadow hover:bg-red-200 transition duration-200"
                    onClick={handleDeleteItem}
                >
                    <img
                        // src="src/assets/items/icons/deleteIcon.svg"
                        src="src\assets\items\icons\deleteIcon.svg"
                        alt="Delete Cart Item"
                        className="w-5 h-5 sm:w-6 sm:h-6"
                    />
                </button>
            </div>
        </div>
    );
};

const NoteInput = ({ note, setNote, handleSubmit }) => {
    return (
        <div className="flex flex-row">
            <input
                className=" mr-4 border rounded text-xs sm:text-sm border-orange-400"
                type="text"
                value={note}
                onChange={(e) => setNote(e.target.value)}
                placeholder="Add a note..."
            />
            <button
                className="bg-orange-500 text-white px-4 py-1 rounded hover:bg-blue-600"
                onClick={handleSubmit}
            >
                Submit
            </button>
        </div>
    );
};

export default CartItem;
