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

app.get("/chefs/:id", (req, res) => {
    const id = req.params.id;
    const selecetedChef = chefs.find(n => n.id == id)
    res.send(selecetedChef) 
})

app.listen(port , () => {
    console.log("server running on port")
})