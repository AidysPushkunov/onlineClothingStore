const express = require('express');
const mysql = require('mysql2');

const PORT = process.env.PORT || 3001;

const app = express();

const urlEncodedparser = express.urlencoded({ extended: false })

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


// app.get('/main', (req, res) => {
//     res.redirect('http://localhost:3000');
// })


app.post('/registration', urlEncodedparser, (req, res) => {
    console.log(req.body);
    res.end('This is server request:')
})

app.listen(PORT, () => {
    console.log('Server has been started on port:', PORT);
})

