const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
    sellername: String,
    product: String,
    price: Number,
    description: String
})

module.exports = mongoose.model('User', userSchema)