import React, { useState } from 'react'
import ItemInfo from '../components/ItemInfo'
import Description from '../components/Description'
import RelatedItems from '../components/RelatedItems'

const ProductDetails = () => {
  return (
<div className="bg-theme">
  <ItemInfo />
  <Description />
  <RelatedItems />
</div>  
  )
}

export default ProductDetails
