var router = require('express').Router()
const product = require('../controllers/product.controller')

module.exports = (app) => {
    router.get('/products', product.findAll)

    router.get('/products/:id', product.findById)

    router.post('/products', product.create)

    router.put('/products/:id', product.update)

    router.delete('/products/:id', product.delete)

    app.use(router)
}
