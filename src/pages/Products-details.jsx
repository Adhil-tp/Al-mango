import React, { useContext, useEffect, useState } from 'react'
import ItemInfo from '../components/ItemInfo'
import Description from '../components/Description'
import RelatedItems from '../components/RelatedItems'
import { useParams } from 'react-router-dom'
import { useProducts } from '../context/ProductsContext'
import ViewCart from '../components/ViewCart'
import { CartContext } from '../context/CartContext'


const ProductDetails = () => {
  const {id} = useParams()
  const {foodProducts} = useProducts()
  const [product,setProduct] = useState(null)
  const {cartItems} = useContext(CartContext)

  useEffect(()=>{
    const productData = foodProducts.find((item)=> item.id === parseInt(id));
    setProduct(productData);
  },[id,foodProducts])

  if(!product){
    return <p>Product not found</p>
  }
  // console.log(product)
  return (
<div className="bg-theme">
  <ItemInfo product={product} />
  <Description product={product} />
  {/* <RelatedItems relatedProducts={foodProducts} currentProductId={product.category}/> */}
  {cartItems.length > 0 && <ViewCart />}

</div>  
  )
}

export default ProductDetails
