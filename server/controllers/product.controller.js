const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const Product = mongoose.model('Product')
const multer = require('multer')

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, './uploads/')
    },
    filename: function(req, file, cb) {
        cb(null, new Date().valueOf() + file.originalname)
    },
})
const upload = multer({ storage })

router.get('/', (req, res) => {
    Product.find((err, docs) => {
        if (!err) {
            res.json(docs)
        }
    })
})

router.get('/:productId', (req, res) => {
    Product.findById(req.params.productId, (err, doc) => {
        if (!err) {
            res.json(doc)
        }
    })
})

router.post('/', upload.single('photo'), (req, res) => {
    const { title, shortDescription, photo, description, price, category } = req.body
    const product = new Product({
        title,
        shortDescription,
        photo: req.file.path,
        description,
        price,
        category,
    })
    product
        .save()
        .then(newProduct => {
            return res
                .status(201)
                .location(`/api/products/${newProduct._id}`)
                .json({
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

router.put('/:productId', (req, res) => {
    const newProduct = {
        ...req.body,
    }
    Product.update(
        {
            _id: req.params.productId,
        },
        {
            $set: newProduct,
        }
    )
        .exec()
        .then(() => {
            res.status(201).json({
                success: true,
                product: newProduct,
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

router.delete('/:productId', (req, res) => {
    Product.findByIdAndRemove(req.params.productId, (err, doc) => {
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
