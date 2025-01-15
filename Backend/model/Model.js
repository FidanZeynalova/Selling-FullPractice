const mongoose = require("mongoose")


let sellingSchema = new mongoose.Schema({
    image: String,
    name: String,
    desc: String
})

let sellingModel = mongoose.model("selling", sellingSchema)

module.exports = sellingModel