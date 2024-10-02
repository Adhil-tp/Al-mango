import React, { useEffect, useState } from 'react'
import ItemInfo from '../components/ItemInfo'
import Description from '../components/Description'
import RelatedItems from '../components/RelatedItems'
import { useParams } from 'react-router-dom'
import foodProducts from '../data/foodProducts'


const ProductDetails = () => {
  const {id} = useParams()
  const [product,setProduct] = useState(null)

  const fetchProductById = (id)=>{
    return foodProducts.find(product => product.id === Number(id))
  }
  useEffect(()=>{
    const productData = fetchProductById(id);
    setProduct(productData)
  },[id])

  return (
<div className="bg-theme">
  <ItemInfo product={product} />
  <Description  />
  <RelatedItems />
</div>  
  )
}

export default ProductDetails
