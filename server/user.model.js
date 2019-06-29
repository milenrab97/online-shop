const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: 'Required',
    },
    username: {
        type: String,
        maxlength: 15,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
        minlength: 8,
    },
    email: {
        type: String,
        required: true,
        minlength: 5,
    },
    role: {
        type: String,
        required: true,
        enum: ['user', 'admin'],
    },
})

mongoose.model('User', userSchema)
