
const mongoose = require('mongoose')

const NoteSchema = new mongoose.Schema({
    title: String,
    year: Number,
    score: Number,
    rating: String,
})

const NoteModel = mongoose.model('note', NoteSchema)


module.exports = NoteModel