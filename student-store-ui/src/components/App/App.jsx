import * as React from "react"
import Navbar from "../Navbar/Navbar"
import Sidebar from "../Sidebar/Sidebar"
import Home from "../Home/Home"
//import NotFound from "../../../Notfound/NotFound"
import axios from 'axios';
import { useState, useEffect, useMemo } from 'react';

// import ProductDetail from "../ProductDetail/ProductDetail"
import {BrowserRouter , Routes , Route} from "react-router-dom"


import "./App.css"




export default function App() {
  const [products, setProducts] = useState([])
  const [error, setError] = useState(null)
  const [isFetching, setIsFetching] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [shoppingCart, setShoppingCart] = useState({itemId: null , quantity: 0})
  const [form, setForm] = useState({
    search: ""
  })

  function handleAddItemToCart(productId){
    if(productId){
      setShoppingCart({

      })

      
    }

  }

  useEffect(()=>{
    const fetchProducts = async()=>{
    setIsFetching(true)
    try{
      const res = await axios.get("https://codepath-store-api.herokuapp.com/store")
      if(res?.data?.products){
        setError(null)
        setProducts(res.data.products)
     console.log(products) 
    }
    }catch(err){
        console.log(err)
      }finally{
        setIsFetching(false)
      }
    }
    fetchProducts()
  },[])

  
  
  
   console.log(selectedCategory)

  return (
    <div className="app">
      <BrowserRouter>
      <main> 
      <Navbar />
      <Sidebar />
          <Routes>
            <Route path = "/" element={<Home
            products={products}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            setForm={setForm}
            form={form}
            
            />} />
             {/* <Route path = "*" element={
               <NotFound />
             }/> */}
            {/* <Route path="/products/:productId" element={<ProductDetail />} /> */}
          </Routes>
      </main>
      </BrowserRouter>
    </div>
  )
}
