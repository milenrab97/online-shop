const express = require('express')
const router = express.Router()
const util = require('util')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const dotenv = require('dotenv')
const mongoose = require('mongoose')
const User = mongoose.model('User')
dotenv.config()

const secret = process.env.SECRET

router.post('/login', function(req, res) {
    const db = req.app.locals.db
    const params = req.body
    console.log(req.body)

    User.findOne({
        username: params.username,
    })
        .then(user => {
            if (!user || !user.username) {
                res.status(404).json({
                    success: false,
                    message: `User ${params.username} not found!`,
                })
            } else {
                const passwordIsValid = bcrypt.compareSync(params.password, user.password)
                if (!passwordIsValid) {
                    res.status(401).json({
                        success: false,
                        message: 'Unauthorized.',
                    })
                } else {
                    token = jwt.sign(
                        {
                            id: user._id,
                            role: user.role,
                        },
                        secret,
                        {
                            expiresIn: 3600,
                        }
                    )
                    delete user.password
                    res.status(200).json({
                        auth: true,
                        token,
                    })
                }
            }
        })
        .catch(err =>
            res.status(500).json({
                success: false,
                message: 'Server error',
                error: err.message,
            })
        )
})

module.exports = router
