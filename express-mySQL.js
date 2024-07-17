const express = require('express')
const mysql = require('mysql2')
const cors = require('cors')

const connection = mysql.createConnection({
    host: 'bax03lzjupqqtoj9pkmo-mysql.services.clever-cloud.com',
    user: 'uukfwpc1tzzakyry',
    password: 'rW682kjiY4bQ1xtPRflz',
    database: 'bax03lzjupqqtoj9pkmo'
})
connection.connect(err => {
    if (err) { console.log(err) }
    else {
        console.log('success')
    }
})

const app = express()
app.use(cors())
app.use(express.json())

// const myQuery = `select * from orders where id > ${req.params.id}`
// const myQuery = `select * from orders where id > ${req.params.id}`
app.get('/', (req, res) => {
    // const query1 = `SELECT * FROM orders`
    const query2 = `SELECT * FROM auth`
    connection.query(query2, (err, data) => {
        if (err) {
            res.send('err', err)
        } else {
            res.send(data);
        }
    })
})


// app.post('/', (req, res) => {
//     const { id1, id2 } = req.query
//     connection.query(`SELECT * FROM orders WHERE id between ? and ?`, [id1, id2], (err, data) => {
//         if (err) {
//             res.send('err', err)
//         } else {
//             res.send(data);
//         }
//     })
// })


app.post('/add', (req, res) => {
    // const user = { user_name: 'wang7z', password: 'abc' }
    // const { user_name, password } = user
    // const sql_add = `INSERT INTO auth (user_name, user_password) VALUES(${user_name},${password})`


    const { user_name, user_password } = req.body
    const sql_add = `INSERT INTO auth (user_name, user_password) VALUES(?,?)`
    connection.query(sql_add, [user_name, user_password], (err, data) => {
        if (err) {
            res.send('err', err)
        } else {
            res.send(data);
        }
    })
})





app.listen(9000, () => {
    console.log('listening 9000 my sql')
})



// const mysql = require('mysql2');
// const express = require('express');
// const app = express();


// const connection = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: 'wang7z',
//     database: 'myAPP'
// });

// connection.connect((err) => {
//     if (err) {
//         console.error('err', err);
//         return;
//     }
//     console.log('Connected to the database');
// });

// app.get('/', (req, res) => {
//     const id = 3;

//     console.log('testing', { id });

//     connection.query(`SELECT * FROM orders WHERE customer_id = ?`, [id], (err, data) => {
//         if (err) {
//             console.error('err:', err);
//             res.status(500).send('err');
//         } else {
//             console.log('Query successful, data retrieved:', data);
//             res.status(200).json(data);
//         }
//     });
// });

// app.listen(9000, () => {
//     console.log(`Server is 9000`);
// });


// // Y @!$qBqsTAU72Hr