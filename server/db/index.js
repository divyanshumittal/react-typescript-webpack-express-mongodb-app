const mongoose = require('mongoose')

mongoose
    .connect('mongodb://127.0.0.1:27017/blockchain', { useNewUrlParser: true })
    .then(res => console.log('Connection successful'))
    .catch(e => {
        console.error('Connection error', e.message)
    })

const db = mongoose.connection

module.exports = db
