const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const api = require('./routes/api')
const port = 4000

const mongoose = require('mongoose')
const keys = require('./keys.js')
mongoose.connect(keys.mongoDBUrl, {
    useNewUrlParser: true
}).then(() => console.log("DB connected"))
// const User = require("./models/User.js")

app.use(express.static("public"))
app.use(bodyParser.json())
app.use('/api', api)

app.listen(port, () => console.log(`Example app listening on port ${port}!`))