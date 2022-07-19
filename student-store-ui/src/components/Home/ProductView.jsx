import * as React from "react"

import "./ProductView.css"


export default function ProductView({product, productId}) {
  
  return (
    <div className="product-detail">
     <div className="product-view">
         <h1 className="product-id">Product #{productId}</h1>
            <div className="product-info">
                <div className="info">
                <div className="media">
                <img className="product-img" src={product.image} alt="product"/>
                </div>
                <div className="all">
                    <div className="details">
          <p className="products-name"><b>{product.name}</b></p> 
          <p className="product-price">$ {product.price}</p>
          </div>
          <h6 className="product-description"> {product.description}</h6>
              <div className="product-title">
         <div>
          <button>+</button></div>
          <div>
          <button>-</button></div>
          </div>
      
          </div>
      </div>
   </div>
  <div>
</div>
</div>
</div>
  )
}