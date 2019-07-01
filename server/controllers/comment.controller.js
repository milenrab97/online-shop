const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const Product = mongoose.model('Product')
const Comment = mongoose.model('Comment')

router.get('/:productId/comments', (req, res) => {
    const foundComments = Comment.find({ productId: req.params.productId }, (err, docs) => {
        if (!err) {
            res.json(docs)
        }
    })
})

// TODO: get author from JWT token
router.post('/:productId/comments', (req, res) => {
    const { description, author } = req.body
    console.log('req.body', req.body)
    const comment = new Comment({
        description,
        author: author || 'Anonymous',
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
