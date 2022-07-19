import * as React from "react"
import ProductCard from "./ProductCard"
import "./ProductGrid.css"


export default function ProductGrid({products,selectedCategory, form}) {
  console.log(form)
  if(selectedCategory==="all"){
  return (
    <div className="product-grid">
      <h3 className="product-title">Best Selling Products</h3> 
      <div className="contents">
       
        <div className="grid">
          {products?.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}
    </div>
  </div>
</div>
    
  )
}else if(form.search.length > 0){
  return (
    <div className="product-grid">
      <h3 className="product-title">Best Selling Products</h3> 
      <div className="contents">
   
        <div className="grid">
          {products.filter((product) => product.name.match(form.search)).map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}
    </div>
  </div>
</div>
)
}else if(selectedCategory==="food"||selectedCategory==="clothing"||selectedCategory==="tech"||selectedCategory==="accessories"){ 
  return (
    <div className="product-grid">
      <h3 className="product-title">Best Selling Products</h3> 
      <div className="contents">
       
        <div className="grid">
          {products.filter((item) => item.category === selectedCategory).map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}
    </div>
  </div>
</div>
)

}
}
