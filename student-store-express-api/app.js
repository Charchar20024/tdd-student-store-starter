const express = require('express')
const morgan = require('morgan')
const data = require('./data/db.json')

const app = express();

app.use(morgan("tiny"))

const port = 3001

console.log(data)

app.get("/", async (req, res, next) =>{
  res.status(200).json({ping: "pong"})
})

  
app.listen(port,()=>{
  console.log(`🚀 Server listening at http://localhost:${port}`)
})
