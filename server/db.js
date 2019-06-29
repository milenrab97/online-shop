const mongoose = require('mongoose')

mongoose.connect(
    'mongodb://localhost:27017/online-shop',
    {
        useNewUrlParser: true,
    },
    err => {
        if (!err) {
            console.log('success')
        } else {
            console.log('err', err)
        }
    }
)
require('./user.model')
