const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const jwtDecode = require('jwt-decode')
const Product = mongoose.model('Product')
const Comment = mongoose.model('Comment')
const Cart = mongoose.model('Cart')
ObjectId = require('mongodb').ObjectID

router.get('/:userId/cart', (req, res) => {
    Cart.aggregate([
        {
            $lookup: {
                from: 'products',
                localField: 'productId',
                foreignField: '_id',
                as: 'product',
            },
        },
    ])
        .then(data => res.json(data))
        .catch(err => {
            res.status(500).json({
                success: false,
                message: 'Server error',
                error: err.message,
            })
        })
})

router.post('/:userId/cart', (req, res) => {
    const { productId } = req.body

    const cart = new Cart({
        productId: ObjectId(productId),
        userId: req.params.userId,
    })

    cart.save()
        .then(newCart => {
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
