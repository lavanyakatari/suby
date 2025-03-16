const express = require("express")
const dotEnv = require("dotenv")
const mongoose = require('mongoose')
const vendorRouter = require("./routes/vendorRoutes")
const bodyParser = require("body-parser")
const app = express()
dotEnv.config();
mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("connected mongoDB"))
.catch((error) => (error))
app.use(bodyParser.json())
app.use('/vendor',vendorRouter)

const PORT = 4000;
app.listen(PORT, () => {
    console.log(`running at ${PORT}`)
})
