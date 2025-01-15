const SellingController = require("../controller/controller")

const express = require("express")

let route = express.Router()

route.get("/", SellingController.getAll)
route.get("/:id", SellingController.getDataById)
route.post("/", SellingController.postData)
route.delete("/:id", SellingController.deleteData)
route.put("/:id", SellingController.editData)

module.exports = route