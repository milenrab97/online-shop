const mongoose = require('mongoose')

const orderSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true,
    },
    products: [],
    status: {
        type: String,
        required: true,
    },
    orderTime: {
        type: Date,
        required: true,
    },
})

mongoose.model('Order', orderSchema)
