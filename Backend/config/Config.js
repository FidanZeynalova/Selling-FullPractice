const mongoose = require("mongoose")
const dotenv = require("dotenv")
dotenv.config()

mongoose.connect(process.env.url)
.then(()=>{
    console.log("Succes Connected");
})
.catch((err) =>console.log("Fail",err))