const express = require("express")
const morgan = require("morgan")
const cors = require("cors")
const storeRouter = require("./routes/store")


const app = express()

app.use(morgan("tiny"))
app.use(express.json())
app.use(cors())

app.use("/store", storeRouter)

app.get("/", async (req, res, next) =>{
    return res.status(200).json({ping:"pong"})
})


const port = 3001
app.listen(port, () => {
    console.log(`Server running http://localhost:`+ port)
})