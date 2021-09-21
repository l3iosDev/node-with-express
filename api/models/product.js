const mongoose = require('mongoose')
const Schema = mongoose.Schema

const schema = new Schema(
    {
        name: String,
        price: Number,
    },
    {
        timestamps: true,
    }
)

const productModel = mongoose.model('Product', schema)

module.exports = productModel
