const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const User = mongoose.model('User')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
// TO DO: indicative validation

router.get('/', (req, res) => {
    User.find({}, { password: 0 }, (err, docs) => {
        if (!err) {
            res.json(docs)
        }
    })
})

router.post('/', (req, res) => {
    const { name, username, password, email, role } = req.body

    const user = new User({
        name,
        username,
        password: bcrypt.hashSync(password),
        email,
        role: 'user',
    })

    user.save()
        .then(newUser => {
            return res
                .status(201)
                .location(`/api/users/${newUser._id}`)
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

router.get('/:id', (req, res) => {
    User.findById(req.params.id, { password: 0 }, (err, doc) => {
        if (!err) {
            if (doc) {
                delete doc.password
                res.json(doc)
            } else {
                res.status(404).json({
                    success: false,
                    message: 'User not found!',
                })
            }
        } else {
            res.status(err.status || 500).json({
                success: false,
                error: err.message,
            })
        }
    })
})

router.put('/:id', (req, res) => {
    const newUser = {
        ...req.body,
        modify_time: new Date(),
    }
    User.update(
        {
            _id: req.params.id,
        },
        {
            $set: newUser,
        }
    )
        .exec()
        .then(() => {
            res.status(201).json({
                success: true,
                user: newUser,
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

router.delete('/:id', (req, res) => {
    User.findByIdAndRemove(req.params.id, (err, doc) => {
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
