const mongoose = require('mongoose')

const cartSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true,
    },
    productId: {
        type: Object,
        required: true,
    },
})

mongoose.model('Cart', cartSchema)
