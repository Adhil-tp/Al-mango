// src/components/CartItem.js
import React from "react";

const CartItem = ({ item, incrementItem, decrementItem, updateNote, deleteItem }) => {
    return (
        <div className="border-b-2 last:border-none p-2 sm:p-4 flex flex-col">
            <div className="flex items-center space-x-2 sm:space-x-4">
                <img
                    className="rounded-lg w-12 h-12 sm:w-16 sm:h-16 object-cover"
                    src={item.imgsrc}
                    alt={item.name}
                />
                <div className="flex flex-col flex-1">
                    <h3 className="text-sm sm:text-lg font-bold text-orange-600 truncate text-left">
                        {item.name}
                    </h3>
                    <div className="flex items-center space-x-2 sm:space-x-4 mt-2  ">
                        <button
                            className="bg-orange-200 text-gray-700 px-2 py-0 rounded hover:bg-orange-400"
                            onClick={() => decrementItem(item.id)}
                        >
                            -
                        </button>
                        <span className="text-black-700 font-semibold">
                            {item.quantity}
                        </span>
                        <button
                            className="bg-orange-200 text-gray-700 px-2 py-0 rounded text-center hover:bg-orange-400"
                            onClick={() => incrementItem(item.id)}
                        >
                            +
                        </button>
                        <p className="text-md sm:text-xl font-semibold text-gray-800 text-right">
                            ₹{(item.price * item.quantity).toFixed(2)}
                        </p>
                    </div>
                </div>
            </div>
            <div className="flex items-center justify-between mt-4 space-x-2 sm:space-x-4">
                <input
                    className="flex-1 p-2 border rounded text-xs sm:text-sm border-orange-400"
                    type="text"
                    value={item.note}
                    onChange={(e) => updateNote(item.id, e.target.value)}
                    placeholder="Add Note.."
                />
                <div className="bg-red-100 p-1 rounded-md shadow hover:bg-red-200 transition duration-200">
                    <button
                        className="text-red-500 hover:text-red-700"
                        onClick={() => deleteItem(item.id)}
                    >
                        <img
                            src="src/assets/items/icons/deleteIcon.svg"
                            alt="Delete"
                            className="w-5 h-5 sm:w-6 sm:h-6"
                        />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CartItem;
