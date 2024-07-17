

const express = require('express')
const mongoose = require('mongoose')
const { NoteModel } = require('./model')

mongoose.connect('mongodb://127.0.0.1:27017/amy')
const cors = require('cors')
const app = express()
app.use(cors)

app.get('/all', (req, res) => {
    res.send('module routes get /all')
})


// app.get('/sort', (req, res) => {
//     NoteModel.find().sort({ price: 1 }).select({ name: 1, price: 1, _id: 0 })
//         .then(data => {
//             res.send(data)
//         }).catch(err => {
//             res.send('error', err)
//         })
//     res.send('welcome')
// })


app.listen(9000, () => {
    console.log('listening on 9000')
})
