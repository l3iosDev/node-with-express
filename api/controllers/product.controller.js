const Product = require('../models/product')

exports.findAll = async (req, res) => {
    const products = await Product.find()
    res.json(products)
}

exports.findById = async (req, res) => {
    const { id } = req.params
    const product = await Product.findById(id)
    res.json(product)
}

exports.create = async (req, res) => {
    const body = req.body
    const product = new Product(body)
    await product.save()
    res.json({ message: 'Saved successfully' })
}

exports.update = async (req, res) => {
    const { id } = req.params
    const body = req.body

    const product = await Product.findByIdAndUpdate(id, { $set: body })

    res.json(product)
}

exports.delete = async (req, res) => {
    const { id } = req.params

    await Product.findByIdAndDelete(id)

    res.json({ message: 'Deleted successfully' })
}
