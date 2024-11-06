import React from "react";
import Recommenditem from "../components/recommenditem";

function ThirdComponent({ products }) {
  // console.log("Products received in ThirdComponent:", products)

  if (!products) {
    return <div>No products available.</div>
  }

  const comboProducts = products.filter(product => product.category === 'Combos');

  // console.log("Filtered comboProducts:", comboProducts);

  return (
    <div className="bg-white w-screen h-auto px-4 sm:px-6 lg:px-8 pb-24">
      <div className="bg-white w-full h-[20%] text-center">
        <p className="text-black font-bold text-[18px] pt-1 pb-4">Recommend for you</p>
      </div>

      <div className="bg-white w-[100%] h-[80%] flex justify-start overflow-x-scroll space-x-7 flex-row sm:flex-nowrap hide-scrollbar">
        {comboProducts.length > 0 ? (
          comboProducts.map((product) => (
            <Recommenditem key={product.id} product={product} /> 
          ))
        ) : (
          <p className="text-center text-gray-500">No recommended Combos available.</p>
        )}
      </div>
    </div>
  );
}

export default ThirdComponent;
