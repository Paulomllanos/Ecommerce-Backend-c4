const express = require('express');
const auth = require('../middleware/auth');

const { getProducts, createProduct, getProductById, deleteProduct, editProduct, reduceStock } = require('../controllers/product.controller');

const productRouter = express.Router()

productRouter.route('/products')
    .post(auth, createProduct)
    .get(getProducts)

productRouter.route('/products/:productId')
    .get(getProductById)

productRouter.route('/admin/products/:productId')
    .put(editProduct)
    .delete(deleteProduct)

productRouter.route("/product/reduce-stock")
    .put(reduceStock)

module.exports = productRouter;