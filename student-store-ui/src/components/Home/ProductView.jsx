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
          <h4 >{product.name}</h4> 
          <p className="product-price">$ {product.price}</p>
          </div>
          <p className="product-description"> {product.description}</p>
             
         <div className="btns">
           
          <button>+</button>
          &nbsp;
          
          <button>-</button>
          
          
      
          </div>
      </div>
   </div>
  <div>
</div>
</div>
</div>
</div>
  )
}