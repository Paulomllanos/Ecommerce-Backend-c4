const mongoose = require('mongoose');

const cacSpecialSchema = new mongoose.Schema({
    red: {
        type: String
    },
    blue: {
        type: String
    }
})

const productSchema = new mongoose.Schema({
    SKU: {
        type: String,
        required: true,
        minLength: 5,
        maxLength: 5
    },
    name: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        typeProduct: {
            type: String
        },
        material: {
            type: String
        },
        weight: {
            type: Number,
            min: 0.1
        },
       color: [cacSpecialSchema]
    },
    price: {
        type: Number,
        required: true,
        min: 0,
        max: 100000000
    },
    stock: {
        type: Number,
        required: true,
        min: 0,
    },
    image: {
        type: String,
        required: true
    }
})

const Product = mongoose.model("product", productSchema)

module.exports = Product;