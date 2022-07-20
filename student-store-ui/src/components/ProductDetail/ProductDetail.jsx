import * as React from "react"
import "./ProductDetail.css"
import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import axios from 'axios';
import ProductView from "../Home/ProductView";

export default function ProductDetail() {
  let getId = useParams()
  console.log(getId)

  const [productDetail, setProductDetail] = useState({})

  let url =`https://codepath-store-api.herokuapp.com/store/${getId.productId}`

  console.log(url)

  useEffect(()=>{
    const fetchProduct = async()=>{
      try{
        const res = await axios.get(`http://localhost:3001/store/product/${getId.productId}`)
        console.log(res)
        if(res?.data.product){
          setProductDetail(res.data.product)
        }
        }catch(err){
          console.log(err)
        }
      }
      fetchProduct()
  },[])
  console.log(productDetail)
  
  return (
    <div className="product-detail">
    <ProductView
    product={productDetail}
    productId={productDetail.id} />
    </div>
    )
  }
  
  
