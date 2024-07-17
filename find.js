const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/amy')
const { NoteModel } = require("./model")
mongoose.connection.once('open', () => {
    NoteModel.find({
        // $and: [{ title: 'travel world' }, { score: { $lt: 9 } }]
        //名字是包含travel，score在0 至9之间：
        $and: [{ title: /A/ }, { $and: [{ score: { $lt: 10 } }, { score: { $gt: 0 } }] }]

    }).then(res => {
        console.log('res', res)
    })
})