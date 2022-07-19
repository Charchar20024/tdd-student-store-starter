import * as React from "react"
import "./ProductDetail.css"
import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import axios from 'axios';
import ProductView from "../Home/ProductView";

export default function ProductDetail() {
  let getId = useParams()
  console.log(getId)

  const [product, setProduct] = useState({})

  let url =`https://codepath-store-api.herokuapp.com/store/${getId.productId}`

  console.log(url)

  useEffect(()=>{
    const fetchProduct = async()=>{
      try{
        const res = await axios.get(`https://codepath-store-api.herokuapp.com/store/${getId.productId}`)
        console.log(res)
        if(res?.data?.product){
          setProduct(res.data)
        }
        }catch(err){
          console.log(err)
        }
      }
      fetchProduct()
  },[])
  console.log(product)
  
  return (
    <ProductView
    product={product} />
    
    )
  }
  
  
