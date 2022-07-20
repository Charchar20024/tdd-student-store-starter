import * as React from "react"
import axios from 'axios';
import "./Sidebar.css"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faArrowRightLong,
  faCartPlus,
  faBagShopping,
  faDollarSign
 
} from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect, useMemo } from 'react';
export default function Sidebar() {
  const [cartItems, setCartItems] = useState([])
  const [order, setOrder] = useState({})

  useEffect(()=>{
    const fetchOrder = async()=>{
    try{
      const res = await axios.get("http://localhost:3001/store/order")
      if(res?.data?.order){
        
        setCartItems(res.data.order.order)
        setOrder(res.data.order)
    }
    }catch(err){
        console.log(err)
      }
    }
    fetchOrder()
  },[])
  console.log(cartItems)
  console.log(order)

  const sidebarcollaped = localStorage.getItem('sidebar-collaped')

  const [isOpen, setIsOpen] = React.useState(true);

  const handleOnToggle = () => setIsOpen(!isOpen);
  if (isOpen){
  return (  <div className={isOpen ? 'sidebar' : 'sidebar-expand'}>
      <section className="sidebar-elements">
    <ArrowIcon 
     handleOnToggle ={handleOnToggle}
    />
    <Icons /> 
  </section></div>
  
      )
} return(
  <div className={isOpen ? 'sidebar' : 'sidebar-expand'}>
      
    <section className="sidebarElementsExpanded">
      
      <div >
        <ArrowIcon 
       handleOnToggle ={handleOnToggle}
      />
     <strong><p>Shopping Cart <FontAwesomeIcon icon={faCartPlus} size="sm" /></p></strong> 
     {cartItems.length>0 ? <div className="cartTable">
        <div className="header">
          <div className="header-row">
            <span className="flex-2">Name</span>
            <span className="center">Quantity</span>
            <span className="center">Unit Price</span>
            <span className="center">Cost</span>
          </div>
          {cartItems?.map((item) => ( 
          <div className="product-row">
            <span className="flex-2">{item.name}</span>
            <span className="center">{item.quantity}</span>
            <span className="center">{item.price}</span>
            <span className="center">{item.total}</span>

          </div>
          ))}
          
          <div className="receipt">
              <div className="receipt-subtotal">
                <h3>Subtotal</h3>
                <p>{order.Subtotal}</p>

              </div>
              <div className="receipt-taxes">
              <h3>Taxes and Fees</h3>
                <p>{order.taxes}</p>

              </div>
              <div className="receipt-total">
              <h3>total</h3>
                <p>{order.total}</p>

              </div>
           </div>
        </div>
      </div>
      :<p className="no-items">No items in cart yet! start Shopping now</p>

             }


      <strong><p>Payment info <FontAwesomeIcon icon={faDollarSign} size="sm" /></p></strong>
      
        <label>Name</label><div>
        <input name="name" type="text" className="name"placeholder="Student Name"/>
     </div>
      <form >
      <label>Email</label>
      <div>
          <input name="email" type="email" className="email" placeholder="student@codepath.org"/>
        </div>
        
      </form>
      <div>
      <p><input type="checkbox" /> I agree to the terms and conditions</p>
    </div>
    <button className="cheackoutButton">Checkout</button>
      </div>
    </section>
    <div cl>
      <h4><b>Receipt</b></h4>

    </div>
    {cartItems?.map((item) => ( 
          <li className="receipt-item">- {item.quantity} total {item.name} purchased at a cost of {item.price} for a total cost of ${item.total}  </li>
          ))}
    </div>
)
  } 

export function ArrowIcon({handleOnToggle}) {
  
 
  
  return (
    <button className="arrow" onClick={handleOnToggle}>
    <FontAwesomeIcon icon={faArrowRightLong} size="2x"/>
   </button> )

  
}
export function Icons() {
 
  
  return (
   <div className="icons-container">
      <><span>
      <FontAwesomeIcon icon={faCartPlus} size="2x" />
    </span><span>
        <FontAwesomeIcon icon={faDollarSign} size="2x" />
      </span><span> <FontAwesomeIcon icon={faBagShopping} size="2x" /></span></>
    </div>
    )

  
}