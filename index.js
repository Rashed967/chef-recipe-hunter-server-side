const express = require('express')
const app = express()
const port = process.env.PORT || 5000

var cors = require('cors')

app.use(cors())

const navBar = require('./data/nav.json')
const chefs = require('./data/chefs.json')


app.get('/', (req, res) => {
    res.send("Hello world")
})

app.get('/nav', (req, res) => {
    res.send(navBar)
})

app.get('/chefs', (req, res) => {
    res.send(chefs)
})

app.listen(port , () => {
    console.log("server running on port")
})