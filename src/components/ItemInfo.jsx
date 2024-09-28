import React, { useEffect, useState } from 'react';
import burger from '../assets/Products/Burger.jpg';


const ItemInfo = () => {
  const [quantity, setQuantity] = useState(1);
  const [cart, setCart] = useState([]); 
  const [isAddedToCart,setIsAddedToCart] = useState(false)
  const [note,setNote] = useState('');
  const [notes,setNotes] = useState([
    'First Note',
    'Second Note',
    'Third Note'
  ])


  const increaseQuantity = () => {
    setQuantity(prevQuantity => prevQuantity + 1);
  };

  
  const decreaseQuantity = () => {
    setQuantity(prevQuantity => (prevQuantity > 1 ? prevQuantity - 1 : 1));
  };

 
  const addToCart = () => {
    const newItem = {
      name: 'Chicken Burger',
      quantity,
      TotalPrice: 5.99 * quantity, 
    };
    
    setCart([...cart, newItem]);
    setIsAddedToCart(true);
  };

  const handleNoteChange = (e)=>{
    setNote(e.target.value);
  }

  const handleNoteSubmit =(e)=>{
    e.preventDefault();
    if(note.trim()!== ''){
        setNotes([...notes,note])
        setNote('')
    }
  }

  const deleteNote =(indexToDelete) =>{
    setNotes(notes.filter((_,index)=> index !== indexToDelete))
  }

  
  useEffect(() => {
    if (cart.length > 0) {
      console.log('Cart updated:', cart);
      localStorage.setItem('cart', JSON.stringify(cart));

    
      // fetch('/api/cart', { method: 'POST', body: JSON.stringify(cart) });
    }
  }, [cart]);

  const viewCart =()=>{
    console.log('View Cart clicked')
  }

  return (
    <section className="lg:p-12 flex flex-col lg:flex-row md:flex-col sm:flex-col items-center gap-8">
      <div 
     className="relative md:w-full sm:w-screen lg:w-[60rem]">
        <img
          src={burger}
          className="md:w-full sm:h-[19rem] sm:w-screen lg:w-full object-cover lg:rounded-lg"
          alt="Burger"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-transparent rounded-lg"></div>
      </div>
      <div 
     className="p-6 mx-auto flex flex-col w-[90%] sm:bg-white md:bg-white lg:bg-transparent custom-background rounded-lg">
        <div className="mb-3">
          <h1 className="text-2xl font-bold">Chicken Burger</h1>
        </div>
        <p className="text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
          repellendus dignissimos, facilis pariatur totam provident labore
          aliquam vel quia aut magnam assumenda, corporis dolore ea reiciendis
          veritatis praesentium.
        </p>
        
        <div className="pt-8 flex flex-row gap-4">
          <div className={` ${isAddedToCart ? 'hidden':'flex items-center p-2 gap-2'}`}>
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
          </div>
        {isAddedToCart ?(
            <button className='p-2 bg-buttons'>View Cart</button>
        ):(
          <button className="p-2 bg-buttons rounded-md" onClick={addToCart}>
            Add to cart
          </button>
        )}
        </div>
        <form onSubmit={handleNoteSubmit} className='-mt-5'>
        
        <input
          type="text"
          placeholder="Add note"
          value={note}
          onChange={(e)=> setNote(e.target.value)}
          className="border border-black/20 rounded-lg mt-12 p-2 w-3/4 ml-12"
          />
          <button type='submit' className='mt-2 p-2 bg-buttons'>Submit Note</button>
          </form>

          <div className='mt-8'>
            <h2 className='text-lg font-bold mb-2'>Notes:</h2>
            {notes.length >0 ?(
                <ul className='list-disc pl-4'>
                    {notes.map((noteItem,index)=>(
                        <li key={index} className='text-sm'>
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
  ):(
    <p className='text-sm text-gray-500'>No notes added yet.</p>
            )}
          </div>
      </div>
    </section>
  );
};

export default ItemInfo;
