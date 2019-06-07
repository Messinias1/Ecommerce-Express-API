const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
    sellername: String,
    book: String,
    author: String,
    price: String,
    genre: String
})

module.exports = mongoose.model('User', userSchema)