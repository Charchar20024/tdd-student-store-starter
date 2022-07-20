import * as React from "react"
import Hero from "../Home/Hero"
import ContactUs from "./ContactUs"
import About from "./About"
import Footer from "./Footer"
import ProductGrid from "./ProductGrid"
import SubNav from "./SubNav"


import "./Home.css"



export default function Home({products,handleCategoryChange,selectedCategory,setSelectedCategory,setForm,form, handleAddItemToCart}) {
  

  return (
    <div className="home">
      <Hero />
      <SubNav
      products={products}
      handleCategoryChange={handleCategoryChange}
      setSelectedCategory={setSelectedCategory}
      setForm={setForm}
      form={form}
      />
        
      <ProductGrid 
      products={products}
      selectedCategory={selectedCategory}
      form={form}
      
      />
      <About />
      <ContactUs />
      <Footer />
    </div>
  )
}
