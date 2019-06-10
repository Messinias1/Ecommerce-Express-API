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

router.get('/gettitleresults/:book', function(req, res) {

    const input = req.params.book

    console.log(input)

    var item = new RegExp(["^", input, "$"].join(""), "i");
    User.find({ book:item })

        .then(result  => {
            console.log(input, result)
            res.send(result)
        })
        .catch(err => {
            console.log(err)
            res.send(err)
        })
})

router.get('/getauthorresults/:author', function(req, res) {
    const input = req.params.author
    console.log(input)

    let item = new RegExp(["^", input, "$"].join(""), "i")
    User.find({ author:item })

        .then(result => {
            console.log(input, result)
            res.send(result)
        })
        .catch(err => {
            console.log(err)
            res.send(err)
        })
})

router.get('/getgenreresults/:genre', function(req, res) {
    const input = req.params.genre
    console.log(input)

    let item = new RegExp(["^", input, "$"].join(""), "i")
    User.find({ genre:item })

        .then(result => {
            console.log(input, result)
            res.send(result)
        })
        .catch(err => {
            console.log(err)
            res.send(err)
        })
})

router.get('/getpriceresults/:price', function(req, res) {
    const input = req.params.price
    console.log(input)

    User.find({ price:input })

        .then(result => {
            console.log(input, result)
            res.send(result)
        })
        .catch(err => {
            console.log(err)
            res.send(err)
        })
})

module.exports = router