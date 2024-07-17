
// const data = requrie('.data.json')

const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/amy')

mongoose.connection.once('open', () => {
    console.log('try make schema')


    const NoteSchema = new mongoose.Schema({
        title: String,
        year: Number,
        score: Number,
        rating: String,
    })

    const NoteModel = mongoose.model('note', NoteSchema)


    // NoteModel.create({
    //     title: 'sports world',
    //     year: 1876,
    //     score: 5.6,
    //     rating: 'R',
    // })



    // NoteModel.create([{
    //     title: 'sports world',
    //     year: 1876,
    //     score: 5.6,
    //     rating: 'R',
    // }, {
    //     title: 'travel world',
    //     year: 1873,
    //     score: 9.9,
    //     rating: 'R',
    // }])




    // NoteModel.insertMany([{
    //     title: 'FFFF world',
    //     year: 1873,
    //     score: 9.9,
    //     rating: 'R',
    // }, {
    //     title: 'foodie world',
    //     year: 1993,
    //     score: 3.2,
    //     rating: 'R',
    // }, {
    //     title: 'animal world',
    //     year: 2001,
    //     score: 8.3,
    //     rating: 'R',
    // },
    // {
    //     title: 'VVVVv world',
    //     year: 1873,
    //     score: 10,
    //     rating: 'R',

    // }])



    // NoteModel.find({ score: { $lt: 8 } }).then(res => {
    //     console.log('res', res)
    // })




    // NoteModel.updateOne({ title: "travel world" }, { title: "AAAA world" }).then(res => {
    //     console.log('update one success', res)
    // })


    // NoteModel.deleteOne({ score: { $lt: 9 } }).then(res => {
    //     console.log('delete <9 one success', res)
    // })

    // NoteModel.find({ title: /travel/ }).then(res => {
    //     console.log('res', res)
    // })

    // NoteModel.find({
    //     // $and: [{ title: 'travel world' }, { score: { $lt: 9 } }]
    //     //名字是包含travel，score在0 至9之间：
    //     $and: [{ title: /A/ }, { $and: [{ score: { $lt: 10 } }, { score: { $gt: 0 } }] }]

    // }).then(res => {
    //     console.log('res', res)
    // })

    NoteModel.find().select({ title: 1, score: 1, _id: 0 })
        .sort(
            { score: -1, title: 1 }
        )
        .limit(2).skip(1).then(res => {
            console.log('res', res)
        })

})