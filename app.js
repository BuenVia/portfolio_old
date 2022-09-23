const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
require('dotenv').config()

const app = express()
const port = 3000
const pageRouter = require('./routes/pageRouter')

mongoose.connect(process.env.MONGO_DB)

app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static(`${__dirname}/public`))

// Pages //
app.get('/', pageRouter)
app.get('/blog', pageRouter)
app.get('/blog/:id', pageRouter)

// API //
// Blog
app.get('/api/blog', pageRouter)
app.post('/api/blog', pageRouter)

// Projects
app.get('/api/projects', pageRouter)
app.post('/api/projects', pageRouter)

app.listen(port, (req, res) => {
    console.log(`App is listening on port: ${port}`);
})