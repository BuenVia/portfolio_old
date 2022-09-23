const express = require('express')
const router = express.Router()
const Article = require('../models/blogSchema')
const Project = require('../models/projectSchema')

let blog

////////// PAGES ///////////
router.get('/', (req, res) => {
    Project.find({}, (err, foundResults) => {
        if(!err) {
            res.render('home', { projects: foundResults, blog: blog })
        } else {
            res.send(err)
        }
    })
})

router.get('/blog', (req, res) => {
    Article.find({}, (err, foundResults) => {
        if (!err) {
            res.render('blog', { posts: foundResults })
        } else {
            res.send(err)
        }
    }).sort({$natural: -1})
})

router.get('/blog/:article', (req, res) => {
    const article = req.params.article
    Article.findOne({_id: article}, (err, foundResult) => {
        res.render('post', { art: foundResult })
    })
})

router.get('/blog/id', (req, res) => {
    res.render('test')
})



module.exports = router