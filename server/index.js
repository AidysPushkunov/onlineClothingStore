const express = require('express');
const mysql = require('mysql2');
const bcrypt = require('bcrypt');

// const utf8 = require('utf8');




const PORT = process.env.PORT || 3001;

const app = express();

const urlEncodedParser = express.urlencoded({ extended: false })

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


app.post('/registration', urlEncodedParser, async (req, res) => {
    let username = String(req.body.username);
    let email = String(req.body.email);
    let password = String(req.body.password);
    let passwordRepeat = String(req.body.repeat);


    if (password === passwordRepeat) {
        // console.log(typeof(username), typeof(email), typeof(password), typeof(passwordRepeat));
        // console.log(username);
        const salt = await bcrypt.genSalt(10);
        password = await bcrypt.hash('qwerty', salt);

        const user = [username, email, password];
        const sql = "INSERT INTO user (full_name, email, password) VALUES(?, ?, ?)";


        connection.execute(sql, user, (err, results, fields) => {
            console.log(err);
            if (err) {
                res.redirect('http://localhost:3000/pagenotfound');
            }
            console.log(results); // собственно данные
            // console.log(fields); // мета-данные полей

        })

        res.redirect('http://localhost:3000/authication?data="Пользеватель успешно добавлен"');

        // res.end('This is server request:')
        // console.log('Password incorrect');
        // res.redirect(('http://localhost:3000/registration'));
    }

})

app.listen(PORT, () => {
    console.log('Server has been started on port:', PORT);
})

