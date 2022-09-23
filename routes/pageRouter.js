const express = require('express')
const router = express.Router()
const Article = require('../models/blogSchema')

////////// PAGES ///////////
router.get('/', (req, res) => {
    res.render('index')
})

router.get('/blog', (req, res) => {
    Article.find({}, (err, foundResults) => {
        if (!err) {
            res.render('blog', { posts: foundResults })
        } else {
            res.send(err)
        }
    })
})

router.get('/blog/:id', (req, res) => {
    const article = req.params.id
    Article.findOne({ _id: article }, (err, foundResult) => {
        if (!err) {
            res.render('article', { article: foundResult })
        } else {
            res.send(err)
        }
    })
})

////////// API ///////////
router.get('/api/blog', (req, res) => {
    Article.find({}, (err, foundResults) => {
        if(!err) {
            res.send(foundResults)
        } else {
            res.send(err)
        }
    })
})

router.post('/api/blog', (req, res) => {
    const newArticle = new Article({
        title: req.body.title,
        content: req.body.content,
        auth: req.body.auth
    })
    newArticle.save((err) => {
        if (!err) {
            res.send(`Article sent\n ${newArticle}`)
        } else {
            res.send(err)
        }
    })
})

module.exports = router