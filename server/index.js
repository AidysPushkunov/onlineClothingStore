const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;
const passport = require('passport');

const cors = require('cors');


const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(passport.initialize());
app.use(cors());

require('./middleware/passport')(passport);

const routes = require('./settings/routs');
routes(app);













//
//
// const mysql = require('mysql2');
// const bcrypt = require('bcrypt');
// const axios = require('axios');
//
//
//
// const urlEncodedParser = express.urlencoded({ extended: false })
//
// const connection = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     database: 'online_clothing_store',
//     password: 'zaq12@WSX'
// });
//
// connection.connect((err) => {
//     if(err) {
//         return console.error('Error: ' + err.message);
//     } else {
//         console.log("Data base connection was success!")
//     }
// })
// app.post('/registration', urlEncodedParser, async (req, res) => {
//     let username = String(req.body.username);
//     let email = String(req.body.email);
//     let password = String(req.body.password);
//     let passwordRepeat = String(req.body.repeat);
//
//
//     if (password === passwordRepeat) {
//         const salt = await bcrypt.genSalt(10);
//         const passwordBqrypt = await bcrypt.hash(password, salt);
//
//         const user = [username, email, passwordBqrypt];
//         const sql = "INSERT INTO user (full_name, email, password) VALUES(?, ?, ?)";
//
//
//         connection.execute(sql, user, (err, results, fields) => {
//             if (err) {
//                 res.redirect('http://localhost:3000/registration?data=false');
//             } else {
//                 res.redirect('http://localhost:3000/authication?data=true');
//
//             }
//         })
//     } else {
//         res.redirect('http://localhost:3000/registration?data=false');
//     }
//
// });
//
// app.post('/authication', urlEncodedParser, async (req, res) => {
//     let authEmail = String(req.body.email);
//     let authPassword = String(req.body.password);
//
//
//     const salt = await bcrypt.genSalt(10);
//     passwordBqrypt = await bcrypt.hash(authPassword, salt);
//
//     console.log('Запросы: ', authEmail, authPassword, passwordBqrypt);
//
//
//     const authUser = [authEmail];
//     const authSql = "SELECT * FROM `user` WHERE email=?";
//
//     connection.execute(authSql, authUser, (err, results) => {
//         bcrypt.compareSync(authPassword, results[0].password) ? console.log('Success') : console.log('Пароль или почта не верны')
//         // err ? res.redirect('http://localhost:3000/authication') : console.log(bcrypt.compareSync(authPassword, results[0].password));
//     })
//
//
// })

app.listen(PORT, () => {
    console.log('Server has been started on port:', PORT);
})

