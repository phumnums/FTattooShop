const Product = require('../models/productModel')
const path = require('path')

exports.showAllProducts = async (req, res, next) => {
    try {
        let products = await Product.find()
        return res.status(200).send({
            status: 200,
            message: "Products fetched successfully",
            data: products
        })
    } catch (error) {
        return res.status(500).send({
            message: "Something went wrong",
            success: false
        })
    }
}

exports.createProduct = async (req, res, next) => {
    try {
        const { productName, price } = req.body
        const productImg = req.file.path
        let newProduct = new Product({
            productImg, 
            productName, 
            price
        })
        let product = await newProduct.save()
        return res.status(200).send({
            data: product,
            message: "Product created successfully",
            success: true
        })
    } catch (error) {
        return res.status(500).send({
            message: "Something went wrong",
            success: false
        })
    }
}

exports.updateProduct = async (req, res, nex) => {
    try {
        const { productName, price} = req.body
        let id = req.params.id

        let updateData = {
            productName,
            price
        }
        
        if (req.file) {
            const productImg = req.file.path
            updateData.productImg = productImg
        }

        let product = await Product.findByIdAndUpdate(id, updateData,{ new: true})
        
        return res.status(200).send({
            message: "Product updated successfully",
            data: product,
            success: true
        })
        
    } catch (error) {
        return res.status(500).send({
            message: "Something went wrong",
            message: error.message,
        })
    }
}

exports.removeProduct = async (req, res, next) => {
    try {
        let id = req.params.id
        let product = await Product.findByIdAndDelete(id) 
        return res.status(200).send({
            message: "Product deleted successfully",
            data: product,
            success: true
        })
    } catch (error) {
        return res.status(500).send({
            message: "Something went wrong",
            message: error.message,
            success: false
        })
    }
}