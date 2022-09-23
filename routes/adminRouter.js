const express = require('express')
const router = express.Router()
const Article = require('../models/blogSchema')
const Project = require('../models/projectSchema')

//ADMIN//
router.get('/admin', (req, res) => {
    res.render('admin/index')
})

router.get('/admin/edit-project', (req, res) => {
    Project.find({}, (err, foundResults) => {
        if(!err) {
            res.render('admin/edit-project', { projects: foundResults })
        }
    })
})

router.get('/admin/edit-project/:id', (req, res) => {
    const projectId = req.params.id
    Project.findOne({ _id: projectId }, (err, foundResult) => {
        if(!err) {
            res.render('admin/edit-project-form', { project: foundResult})
        } else {
            res.send(err)
        }
    })
})

router.post('/admin/edit-project/', (req, res) => {
    const projectId = req.body.id
    const updateProject = {
        title: req.body.title,
        content: req.body.content,
        site: req.body.site,
        gitHub: req.body.gitHub,
        img: req.body.img
    }
    Project.updateOne({ _id: projectId }, {$set: updateProject}, (err) => {
        if(!err) {
            res.render('admin/index')
        } else {
            res.send(err);
        }
    })
})

module.exports = router