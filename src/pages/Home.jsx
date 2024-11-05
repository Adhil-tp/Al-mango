import React from 'react'
import FirstComponent from '../components/firsthomecmpnt'
import SecondComponent from '../components/secondhomecmpnt'
import ThirdComponent from '../components/thirdhomecmpnt'
import { useProducts } from '../context/ProductsContext'

const Home = () => {
  const {foodProducts} = useProducts();
  // console.log("Food products:", foodProducts)

  const comboProducts = foodProducts.filter(product => product.category ==="Combos")
  // console.log("Combo Products: ", comboProducts)
  
  return (
    <div className="w-[100%]  min-h-screen sm:w-screen bg-white">
      <FirstComponent products={foodProducts} />
      <SecondComponent products={foodProducts}/>
      <ThirdComponent products={comboProducts} />
    </div>
  )
}

export default Home