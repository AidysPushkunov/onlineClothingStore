const express = require('express');
const mysql = require('mysql2');

const app = express();

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'online_clothing_store',
    password: 'zaq12@WSX'
});

connection.connect((err) => {
    if(err) {
        return console.error('Error: ' + err.message);
    } else {
        console.log("Data base connection was success!")
    }
})

const PORT = process.env.PORT || 3001;

// app.get('/main', (req, res) => {
//     res.redirect('http://localhost:3000');
// })

app.listen(PORT, () => {
    console.log('Server has been started on port:', PORT);
})

