const express = require('express')
const router = express.Router()
const User = require('../models/User')

router.post('/', function(req, res) {

    const { sellername, book, author, price, genre } = req.body

    const data = {
        sellername,
        book,
        author,
        price,
        genre
    }

    console.log(data)

    const user = new User(data)
    user.save()
    .then(() => {
        res.send(data)
        .catch((err) => {
            console.log(err)
        })
    })
})

router.get('/getallinfo', function(req, res) {
    User.find()
    .then(results => {
        console.log(results)
        res.send(results)
    })
})

router.get('/gettitleresults', function(req, res) {

    const input = req.query.input

    console.log(input)

    User.find({ book:input }, function(book, error) {
        if (book) {
            res.send(book)
        } else {
            res.send(error)
        }
    })
})

module.exports = router