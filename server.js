const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3000

app.use(express.static("public"))
app.use(bodyParser.json())

app.get('/', (req, res) => res.send('Hello World!'))

let data = [];
app.post('/api', function(req, res) {
    const sellerName = req.body.sellername
    const product = req.body.product
    const productId = req.body.productid
    const price = req.body.price
    const description = req.body.description

    const temp = {
        sellername: sellerName,
        product,
        productid: productId,
        price,
        description
    }

    data.push(temp)
    console.log(data)
    // console.log(carMake, carModel, color)
    const reply = `${sellerName} is selling ${product} with ID of ${productId} for ${price}: ${description}.`
    res.send(reply)
})

app.get('/getallinfo', function(req, res) {
    res.send(data)
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))