import * as React from "react"

import "./ProductView.css"


export default function ProductView({product}) {
  
  return (
    <div className="product-view">
    <img src={product.image} alt="product" />
    <div className="product-info">
      <div className="info">
        
          <p className="products-name"><b>{product.name}</b></p> 
          <div className="product-title">
         <div>
          <button>+</button></div>
          <div>
          <button>-</button></div>
          </div>
          <p className="product-price">$ {product.price}</p>
      </div>
   </div>
  <div>
</div>
</div>
  )
}