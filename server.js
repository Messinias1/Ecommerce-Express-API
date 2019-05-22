const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3000

const mongoose = require('mongoose')
const keys = require('./keys.js')
mongoose.connect(keys.mongoDBUrl, {
    useNewUrlParser: true
}).then(() => console.log("DB connected"))
const User = require("./models/User.js")

app.use(express.static("public"))
app.use(bodyParser.json())


app.post('/api', function(req, res) {
    const sellerName = req.body.sellername
    const product = req.body.product
    const productId = req.body.productid
    const price = req.body.price
    const description = req.body.description

    const data = {
        sellername: sellerName,
        product,
        productid: productId,
        price,
        description
    }
    console.log(data)

    const user = new User(data)
    user.save()
    .then(function() {
        res.send(data)
        .catch(function(err) {
            console.log(err)
        })
    })
})

app.get('/getallinfo', function(req, res) {
    res.send(data)
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))