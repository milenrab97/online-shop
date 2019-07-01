const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    title: {
        type: String,
        maxlength: 80,
        required: 'Required',
    },
    shortDescription: {
        type: String,
        required: 'Required',
        maxlength: 256,
    },
    photo: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        maxlength: 2048,
    },
    price: {
        type: Number,
    },
    category: {
        type: String,
    },
})

mongoose.model('Product', productSchema)
