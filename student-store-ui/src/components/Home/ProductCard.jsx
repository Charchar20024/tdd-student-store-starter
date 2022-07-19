import * as React from "react"

import "./ProductCard.css"
import { Link } from "react-router-dom"

export default function ProductCard({product}) {
  
  return (
  <Link to={"/products/"+ product.id}>
    <div className="productCard">
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
 </Link>
  )
}