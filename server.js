const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 4000

const mongoose = require('mongoose')
const keys = require('./keys.js')
mongoose.connect(keys.mongoDBUrl, {
    useNewUrlParser: true
}).then(() => console.log("DB connected"))
const User = require("./models/User.js")

app.use(express.static("public"))
app.use(bodyParser.json())


app.post('/api', function(req, res) {

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

app.get('/getallinfo', function(req, res) {
    User.find()
    .then(results => {
        console.log(results)
        res.send(results)
    })
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))