const express = require("express")
import express from 'express'
import { Low, JSONFile } from 'lowdb'

const app = express()
app.use(express.json())

const adapter = new JSONFile('db.json')
const db = new Low(adapter)
await db.read()
db.data ||= { products: [] }

const { products } = db.data
const Store = require("../models/store")

const router = express.Router()

router.get("/products", async (req, res, next) => {
try {
    const post = posts.push(req.body)
    const products = await Store.listProducts()
    res.status(200).json({ products })
  } catch (err) {
    next(err)
  }
})
  
module.exports = router