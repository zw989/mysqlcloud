const mysql = require('mysql2')

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'wang7z',
    database: 'myAPP'
})
connection.connect(err => {
    if (err) { console.log(err) }
    else {
        console.log('success')
    }
})
const myQuery = 'select * from orders'
connection.query(myQuery, (err, res) => {
    if (err) {
        console.log('err', err)
    } else {
        console.log('select sucess', res)
    }
})