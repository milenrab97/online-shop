require('./db')
const express = require('express')
const userController = require('./controllers/users.controller')
// const authController = require('./controllers/auth.controller')
const bodyparser = require('body-parser')
const cors = require('cors')

const app = express()

app.use(cors())

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
// app.use('/auth/', authController)
