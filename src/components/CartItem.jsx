import React, { useState } from "react";

const CartItem = ({ product, incrementItem, decrementItem, deleteItem,updateNote}) => {
    const [note, setNote] = useState("");

    const handleSubmit = () => {
        if (note.trim()) {
            updateNote(product.id, note);
            setNote(""); 
        }
    };


    const handleDeleteItem = () => {
        deleteItem(product.id); 
    };

    return (
        <div className=" last:border-none px-4 py-5 sm:p-4 flex flex-col border-b-8">
            <div className="flex items-center justify-center space-x-2 sm:space-x-4">
                <img
                    className="rounded-lg w-12 h-12 sm:w-16 sm:h-16 object-cover"
                    src={product.image}
                    alt={product.name}
                />
                <div className="flex flex-row justify-between flex-1">
                    <h3 className="flex justify-center mt-4 text-md sm:text-lg font-bold text-orange-600 truncate text-left">
                        {product.name}
                    </h3>
                    <div className="flex flex-col  items-center space-x-2 sm:space-x-4 mt-2">
                        <div className="flex gap-2 ">
                        <button
                            className="bg-orange-200 text-gray-700 px-2 py-0 rounded hover:bg-orange-400"
                            onClick={() => decrementItem(product.id)}
                        >
                            -
                        </button>
                        <span className="text-black-700 font-semibold">
                            {product.quantity}
                        </span>
                        <button
                            className="bg-orange-200 text-gray-700 px-2 py-0 rounded text-center hover:bg-orange-400"
                            onClick={() => incrementItem(product.id)}
                        >
                            +
                        </button>
                        </div>
                        <p className="text-md mt-3 sm:text-xl font-semibold text-gray-800 text-right">
                            ₹{(product.price * product.quantity).toFixed(2)}
                        </p>
                    </div>
                </div>
            </div>

            <div className="flex flex-col mt-4 space-y-2">
                <NoteInput
                    note={note}
                    setNote={setNote}
                    handleSubmit={handleSubmit}
                />
                <h4 className="font-semibold text-gray-700 mb-2">Notes:</h4>
                {/* Display notes below the input */}
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

            {/* Delete Cart Item Button (Separate) */}
            <div className="mt-4 flex justify-end">
                <button
                    className="bg-red-100 p-1 rounded-md shadow hover:bg-red-200 transition duration-200"
                    onClick={handleDeleteItem}
                >
                    <img
                        src="src/assets/items/icons/deleteIcon.svg"
                        alt="Delete Cart Item"
                        className="w-5 h-5 sm:w-6 sm:h-6"
                    />
                </button>
            </div>
        </div>
    );
};

// Separate component for the note input to handle note submission
const NoteInput = ({ note, setNote, handleSubmit }) => {
    return (
        <div className="flex flex-col space-y-2">
            <input
                className="p-2 border rounded text-xs sm:text-sm border-orange-400"
                type="text"
                value={note}
                onChange={(e) => setNote(e.target.value)}
                placeholder="Add a note..."
            />
            <button
                className="bg-blue-500 text-white px-4 py-1 rounded hover:bg-blue-600"
                onClick={handleSubmit}
            >
                Submit Note
            </button>
        </div>
    );
};

export default CartItem;
