const sellingModel = require("../model/Model")
// const express = require("express")
// const app = express()
// app.use(express.json())

let SellingController = {
    getAll: async (req, res) => {
        let allData = await sellingModel.find()
        res.send(allData)
    },
    getDataById: async (req, res) => {
        let { id } = req.params
        let dataById = await sellingModel.findById(id)
        res.send(dataById)
    },
    postData: async (req, res) => {
        let newData = sellingModel(req.body)
        await newData.save()
        res.send({
            message: "Succes Post",
            data: req.body
        })
    },
    deleteData: async (req, res) => {
        let { id } = req.params
        await sellingModel.findByIdAndDelete(id)
        res.send({
            message: "Succes Delete"
        })
    },
    editData: async (req, res) => {
        let { id } = req.params
        let edit = req.body
        let edited = await sellingModel.findByIdAndUpdate(id, edit, { new: true })
        res.send({
            message: "Succes Edited",
            data: edited
        })
    }
}

module.exports = SellingController