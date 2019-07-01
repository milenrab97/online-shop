const mongoose = require('mongoose')

const commentSchema = new mongoose.Schema({
    description: {
        type: String,
        maxlength: 255,
        required: 'Required',
    },
    author: {
        type: String,
        required: 'Required',
        maxlength: 255,
    },
    time: {
        type: Date,
        required: true,
    },
    productId: {
        type: String,
        required: true,
    },
})

mongoose.model('Comment', commentSchema)
