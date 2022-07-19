import * as React from "react"
import "./SubNav.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from "react";
import {
    faMagnifyingGlass,
    
    faShoppingCart,
    faBars
  } from "@fortawesome/free-solid-svg-icons";




export default function SubNav({setSelectedCategory, setForm, form}) { 

      const handleOnInputChange = (event) => {
        setForm((f) => ({ ...f, [event.target.name]: event.target.value }))
      }
      function handleCategoryChange(event) {
        setSelectedCategory(event.target.value);
      }

     console.log(form.search)
  

  return (
    <nav className="sub-nav">
        <div className="nav-content">
            <div className="row">
                <div className="search-bar">
                     <input className="search" type="type" name="search" placeholder="Search" value ={form.search} onChange={handleOnInputChange}/>
                        <button className="search-icon"><FontAwesomeIcon icon={faMagnifyingGlass} /></button>
                </div>
                <div className="link">
                
                   <div >
                       <button className="cart">My Cart<FontAwesomeIcon icon={faShoppingCart} /></button>
                       
                   </div>

                </div>
            </div>
            <div className="row">
                <div className="menu">
                    <FontAwesomeIcon icon={faBars} />

                </div>
                <ul className="menu-list">
                    <li><button value="all" onClick={handleCategoryChange}>All Categories</button></li>
                    <li><button value="clothing" onClick={handleCategoryChange}>Clothing</button></li>
                    <li><button value="food" onClick={handleCategoryChange}>Food</button></li>
                    <li><button value="accessories" onClick={handleCategoryChange}>Accessories</button></li>
                    <li><button value="tech" onClick={handleCategoryChange}>Tech</button></li>
                </ul>

            </div>
        </div>
    </nav>
    
  )
  
}