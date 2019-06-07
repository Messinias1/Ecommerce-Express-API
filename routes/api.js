const express = require('express')
const router = express.Router()
const User = require('../models/User')

router.get('/', (req, res) => {
    res.send('Api route working')
})

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

module.exports = router