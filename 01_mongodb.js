


const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/movieAPP')
mongoose.connection.once('open', () => {
    console.log('open success')
})
mongoose.connection.on('error', () => {
    console.log('error failure')
})

mongoose.connection.on('close', () => {
    console.log('close ')
})



