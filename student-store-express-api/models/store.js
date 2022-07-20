const { storage } = require("../data/storage")
const{BadRequestError}=require("../utils/error")

class Store{
   
 
    static async listProducts() {
        const products = storage.get("products").value()
        return products
      }

      static async listPurchase() {
        
        const transfers = storage.get("purchases").value()
        return transfers
      }

      static async fetchProductById(productId){
        const product = storage
          .get("products")
          .find({ id: Number(productId) })
          .value()
        return product
      }

     static async shoppingCart(purchase) {
        
      
        if (!purchase) {
          throw new BadRequestError(`No purchase.`)
        }
        const requiredFields = ["id","quantity"]
        requiredFields.forEach((field) => {
          if (!purchase[field] && purchase[field] !== 0) {
            throw new BadRequestError(`Field: "${field}" is required in purchase`)
          }
        })
         
    
        const newPurchase = { id: purchase.id, quantity: purchase.quantity}

        const purchases= await Store.fetchProductById(purchase.id)
        let total =purchase.quantity*purchases.price
       
        const newPurchases = { name: purchases.name, quantity: purchase.quantity, price: purchases.price, total: total.toFixed(2) }
        
    
        storage.get("purchases").push(newPurchases).write()
    
        return newPurchase
      }
        
      static async UserCheckout() {
        let subTotal = 0
        
        

        const order = await Store.listPurchase()
        for (let i = 0; i < order.length; i++) {
         subTotal+= order[i].price * order[i].quantity
}
       let taxes =subTotal*.0875
       let total =subTotal+taxes

        const newOrder = {order: order,Subtotal: subTotal.toFixed(2), taxes:taxes.toFixed(2), total: total.toFixed(2)}
        console.log(taxes)
        return newOrder



       
      }

    
     


}
module.exports = Store