const express = require('express')
const mongoose = require('mongoose')
const ejs = require('ejs')
require('dotenv').config()

const app = express()
const port = 3000

mongoose.connect(process.env.MONGO_DB)

app.set('view engine', 'ejs')
app.use(express.static(`${__dirname}/public`))

app.get('/', (req, res) => {
    res.render('index')
})

app.get('/login', (req, res) => {
    res.render('login')
})

app.listen(port, (req, res) => {
    console.log(`App is listening on port: ${port}`);
})