const express = require("express")

const Store = require("../models/store")

const router = express.Router()

router.get("/product", async (req, res, next) => {
try {
    const products = await Store.listProducts()
    res.status(200).json({ products })
  } catch (err) {
    next(err)
  }
})
router.get("/purchase", async (req, res, next) => {
  try {
      const purchases = await Store.listPurchase()
      res.status(200).json({ purchases })
    } catch (err) {
      next(err)
    }
  })
router.get("/product/:productId", async (req, res, next) => {
  try {
    const productId = req.params.productId
    const product = await Store.fetchProductById(productId)
    res.status(200).json({ product })
  } catch (err) {
    next(err)
  }
})
router.post("/shoppingCart", async (req, res, next) => {
  try {
    
    const shoppingCart = await Store.shoppingCart(req.body)

    res.status(201).json({ shoppingCart })
  } catch (err) {
    next(err)
  }
})
router.get("/order", async (req, res, next) => {
  try {
    
    const order = await Store.UserCheckout()

    res.status(201).json({ order})
  } catch (err) {
    next(err)
  }
})

module.exports = router