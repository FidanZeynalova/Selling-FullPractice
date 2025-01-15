const express = require("express")
const app = express()
const cors = require("cors")
const dotenv = require("dotenv")
const route = require("./routes/routes")
app.use(express.json())
app.use(cors())
dotenv.config()

require("./config/Config")
app.use("/selling", route)


app.listen(process.env.port, () => {
    console.log("Listen 2020 port");
})