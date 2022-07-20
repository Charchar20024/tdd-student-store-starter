import * as React from "react"
import axios from 'axios';
import { useParams } from "react-router-dom"

import "./ProductCard.css"
import { Link } from "react-router-dom"


export default function ProductCard({product}) {
  // const handleOnSubmit = async () => {
   
  //   setShoppingCart.itemId(...shoppingCart,product.id)
  // }
  

  const handleOnSubmit = async () => {
   
    try {
    await axios.post("http://localhost:3001/store/shoppingCart", {
         id: product.id,
         quantity: 1,
        
       
      })
    
    
      
    } catch (err) {
      console.log(err)
    }
  }
  
  return (
  
    <div className="productCard">
      <Link to={"/products/"+ product.id}>
        <img src={product.image} alt="product" /> 
      </Link>
      
      <div className="product-info">
        <div className="info">
        <div>
          <p className="products-name"><b><Link to={"/products/"+ product.id}>{product.name}</Link></b></p>
        </div>
          <div className="btns">
          <p className="product-price">$ {product.price}</p>
          <div>
          <button onClick={handleOnSubmit}>+</button>
          &nbsp;
          
          <button>-</button>
          </div>
       
      
          </div>
          </div>
  </div>
 </div>

  )
}