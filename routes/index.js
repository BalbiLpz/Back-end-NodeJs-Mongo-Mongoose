'use strict'

const express = require('express')
const ProductController = require('../Controllers/Products')
const api = express.Router()



       /*-*-*-*-*-*-*-* API RESTFULL *-*-*-*-*-*-*-*-*/

// Petición GET de productos, {API REST} obtiene de todos los productos
api.get('/product', ProductController.getProducts)

// Petición GET de producto por ID se pasa por parámetros en la URL
api.get('/product/:productId', ProductController.getProduct)

// POST de un producto el objeto producto es un schema de mongo 
api.post('/product', ProductController.saveProduct)

// PUT de un producto por ID 
api.put('/product/:productId', ProductController.updateProduct)

// DELETE para borrar un producto por su ID
api.delete('/product/:productId', ProductController.deleteProduct)
            
                    /*-*-*-*-*-*-*-*-*-*-*-*-*-*/
module.exports = api