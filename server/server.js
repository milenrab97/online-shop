require('./db')
const express = require('express')
const userController = require('./controllers/users.controller')
const productController = require('./controllers/product.controller')
const authController = require('./controllers/auth.controller')
const commentController = require('./controllers/comment.controller')
const cartController = require('./controllers/cart.controller')
const orderController = require('./controllers/order.controller')
const bodyparser = require('body-parser')
const cors = require('cors')

const app = express()

app.use(cors())

app.use('/uploads', express.static('uploads'))

app.use(
    bodyparser.urlencoded({
        extended: true,
    })
)
app.use(bodyparser.json())

app.listen(5000, () => {
    console.log('started')
})

app.use('/api/users', userController)
app.use('/api/users', cartController)
app.use('/api/users', orderController)
app.use('/api/products', productController)
app.use('/api/products', commentController)
app.use('/auth/', authController)
