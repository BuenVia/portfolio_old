const express = require('express')
const { get } = require('mongoose')
const router = express.Router()
const Article = require('../models/blogSchema')
const Project = require('../models/projectSchema')

let blog

////////// PAGES ///////////
router.get('/', (req, res) => {
    // function getData() {
    //     try {
    //         Article.findOne({}, (err, item) => {
    //             blog = item
    //         }).limit(1).sort({$natural: -1})           
    //     } catch (err) {
    //         console.error(err);
    //     }
    // }
    // getData()
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

router.get('/:article', (req, res) => {
    const article = req.params.article
    Article.findOne({_id: article}, (err, foundResult) => {
        res.render('post', { art: foundResult })
    })
})

////////// API ///////////
//Blog//
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

//Projects//
router.get('/api/projects', (req, res) => {
    Project.find({}, (err, foundResult) => {
        if(!err) {
            res.send(foundResult)
        } else {
            res.send(err)
        }
    })
})

router.post('/api/projects', (req, res) => {
    const newProject = new Project({
        title: req.body.title,
        content: req.body.content,
        site: req.body.site,
        gitHub: req.body.gitHub,
    })
    newProject.save((err) => {
        if(!err) {
            res.send(`New Project has been successully saved:\n${newProject}`)
        } else {
            res.send(err)
        }
    })
})

module.exports = router