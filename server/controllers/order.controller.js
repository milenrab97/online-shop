const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const Order = mongoose.model('Order')
ObjectId = require('mongodb').ObjectID

router.get('/:userId/orders', (req, res) => {
    Order.find({ status: 'pending' }, (err, docs) => {
        if (!err) {
            res.json(docs)
        }
    })
})

router.post('/:userId/orders', (req, res) => {
    const { products } = req.body

    const order = new Order({
        userId: req.params.userId,
        products,
        status: 'pending',
        orderTime: new Date(),
    })

    order
        .save()
        .then(newOrder => {
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

router.put('/orders/:orderId/approve', (req, res) => {
    const newOrder = {
        status: 'approved',
    }
    Order.update(
        {
            _id: req.params.orderId,
        },
        { $set: newOrder }
    )
        .then(() => {
            res.status(204).json({
                success: true,
                order: newOrder,
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

router.delete('/orders/:orderId', (req, res) => {
    const { orderId } = req.params

    Order.deleteOne({ _id: ObjectId(orderId) }, (err, doc) => {
        if (!err) {
            res.status(204).json({
                success: true,
            })
        } else {
            res.status(err.status || 500).json({
                success: false,
                error: err.message,
            })
        }
    })
})

module.exports = router
