const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const jwtDecode = require('jwt-decode')
const Comment = mongoose.model('Comment')

router.get('/:productId/comments', (req, res) => {
    const foundComments = Comment.find({ productId: req.params.productId }, (err, docs) => {
        if (!err) {
            res.json(docs)
        }
    })
})

router.post('/:productId/comments', (req, res) => {
    const { description } = req.body
    const token = req.headers.authorization
    const decoded = token && jwtDecode(token)

    const comment = new Comment({
        description,
        author: (decoded && decoded.name) || 'Anonymous',
        time: new Date(),
        productId: req.params.productId,
    })

    comment
        .save()
        .then(newComment => {
            return res.status(201).json({
                success: true,
            })
        })
        .catch(err => {
            res.status(500).json({
                success: false,
                message: 'Server error',
                error: err.message,
            })
        })
})

module.exports = router
