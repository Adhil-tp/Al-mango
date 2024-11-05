import React, { useEffect, useState } from 'react';
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';

const ItemInfo = ({ product }) => {
  const [quantity, setQuantity] = useState(1);
  const [isAddedToCart, setIsAddedToCart] = useState(false);
  const [note, setNote] = useState('');
  const [notes, setNotes] = useState([]);
  const [selectedSize, setSelectedSize] = useState(null);

  const navigate = useNavigate();
  const { addToCart, cartItems } = useCart();

  // Increase quantity
  const increaseQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  // Decrease quantity
  const decreaseQuantity = () => {
    setQuantity((prevQuantity) => (prevQuantity > 1 ? prevQuantity - 1 : 1));
  };

  useEffect(() => {
    // Check if the product is already in the cart
    const isProductInCart = cartItems.some((item) => item.id === product.id);
    setIsAddedToCart(isProductInCart);

    const savedNotes = localStorage.getItem(`cartItem${product.id}`);
    if (savedNotes) {
      setNotes(JSON.parse(savedNotes));
    }
  }, [product.id, cartItems]);

  // Add product to cart
  const handleAddToCart = () => {
    if (typeof product.price === 'object' && !selectedSize) {
      alert('Please select a size before adding to the cart.');
      return;
    }

    // Determine the price based on the selected size, or use the product's price if no size is required
    const price = typeof product.price === 'object'
      ? (selectedSize === 'small'
          ? product.price.small.toFixed(3)
          : product.price.large.toFixed(3))
      : product.price.toFixed(3);
      
    if (price === undefined) {
      alert('Price for the selected size is not available.');
      return;
    }

    const newItem = {
      id: product.id,
      name: product.name,
      price,
      quantity,
      size: selectedSize,
      note: notes,
      image: product.image,
    };

    localStorage.setItem(`cartItem${product.id}`, JSON.stringify(notes));

    addToCart(newItem);
    setIsAddedToCart(true);
  };

  // Handle note input change
  const handleNoteChange = (e) => {
    setNote(e.target.value);
  };

  // Submit note
  const handleNoteSubmit = (e) => {
    e.preventDefault();
    if (note.trim() !== '') {
      const updatedNotes = [...notes, note];
      setNotes(updatedNotes);
      setNote('');
      localStorage.setItem(`cartItem${product.id}`, JSON.stringify(updatedNotes));
    }
  };

  // Delete a note
  const deleteNote = (indexToDelete) => {
    const updatedNotes = notes.filter((_, index) => index !== indexToDelete);
    setNotes(updatedNotes);
    localStorage.setItem(`cartItem${product.id}`, JSON.stringify(updatedNotes));
  };

  if (!product) {
    return null;
  }

  return (
    <section className="lg:p-16 flex flex-col lg:flex-row md:flex-col sm:flex-col items-center gap-8">
      <div className="relative md:w-fit sm:w-screen lg:w-[60rem]">
        <img
          src={product.image}
          className="md:w-full sm:h-[19rem] sm:w-screen lg:w-full object-cover lg:rounded-lg"
          alt={product.name}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-transparent rounded-lg"></div>
      </div>

      <div className="p-6 mx-auto flex flex-col w-[90%] sm:bg-white md:bg-white lg:bg-transparent custom-background rounded-lg">
        <div className="mb-3 flex justify-between flex-col gap-4 ">
          <h1 className="text-2xl font-bold">{product.name}</h1>

          {typeof product.price === 'object' && !isAddedToCart ? (
            <div className="flex justify-center gap-14">
              <button
                className={`px-2 py-2 rounded ${
                  selectedSize === 'small'
                    ? 'bg-orange-500 text-white'
                    : 'bg-gray-200'
                }`}
                onClick={() => setSelectedSize('small')}
              >
                Small: OMR {product.price?.small?.toFixed(3)}
              </button>
              <button
                className={`px-2 py-1 rounded ${
                  selectedSize === 'large'
                    ? 'bg-orange-500 text-white'
                    : 'bg-gray-200'
                }`}
                onClick={() => setSelectedSize('large')}
              >
                Large: OMR {product.price?.large?.toFixed(3)}
              </button>
            </div>
          ) : (
            <p className="text-lg font-bold text-red-500">
  {selectedSize
    ? `${selectedSize.charAt(0).toUpperCase() + selectedSize.slice(1)}: OMR ${
        selectedSize === 'small'
          ? product.price?.small?.toFixed(3) // Format the small price
          : product.price?.large?.toFixed(3) // Format the large price
      }`
    : `OMR ${product.price?.small?.toFixed(3) || product.price?.large?.toFixed(3) || 'N/A'}`}
</p>

          )}
        </div>

        <p className="text-sm">{product.description}</p>

        {!isAddedToCart && (
          <form onSubmit={handleNoteSubmit} className="-mt-5">
            <input
              type="text"
              placeholder="Add note (Optional)"
              value={note}
              onChange={handleNoteChange}
              className="border border-black/20 rounded-lg mt-12 p-2 w-[16rem] sm:w-72 lg:ml-12"
            />
            <button type="submit" className="mt-2 p-2 bg-buttons rounded-md">
              Submit Note
            </button>
          </form>
        )}

        {/* Notes Display */}
        {!isAddedToCart && (
          <div className="mt-8">
            <h2 className="text-lg font-bold mb-2">Notes:</h2>
            {notes.length > 0 ? (
              <ul className="list-disc pl-4">
                {notes.map((noteItem, index) => (
                  <li key={`${index}-${noteItem}`} className="text-sm">
                    {noteItem}
                    <button
                      onClick={() => deleteNote(index)}
                      className="text-red-500 ml-4"
                    >
                      Delete
                    </button>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-sm text-gray-500">No notes added yet.</p>
            )}
          </div>
        )}

        {/* Quantity and Cart Actions */}
        <div className="pt-8 flex flex-row gap-4">
          {!isAddedToCart ? (
            <div className="flex items-center p-2 gap-2">
              <button
                onClick={decreaseQuantity}
                className="px-3 py-1 border border-gray-300 rounded bg-buttons"
              >
                -
              </button>
              <span>{quantity}</span>
              <button
                onClick={increaseQuantity}
                className="px-3 py-1 border border-gray-300 rounded bg-buttons"
              >
                +
              </button>

              <button
                className="p-2 bg-orange-500 text-white rounded-md"
                onClick={handleAddToCart}
              >
                Add to Cart
              </button>
            </div>
          ) : (
            <button
              className="p-2 bg-buttons"
              onClick={() => navigate('/cart')}
            >
              View Cart
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default ItemInfo;
