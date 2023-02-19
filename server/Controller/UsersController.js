'use strict'

const bcrypt = require('bcrypt')
const response = require('./../response');
const db = require('./../settings/db');


exports.getAllUsers =  (req, res) => {
    db.query(('SELECT `id`, `full_name`, `email` FROM `user`'), (err, rows, fields) => {
        if (err) {
            response.status(400, err, res)
        } else {
            response.status(200, rows, res)
        }
    })
}

exports.signup = (req, res) => {

    db.query("SELECT `id`, `full_name`,  `email` FROM `user` WHERE `email` = '"+req.body.email+"'", (err, rows, fields) => {
        if (err) {
            // response.status(400, err, res);
            res.redirect('http://localhost:3000/registration?data=false');
        } else if (typeof rows !== 'undefined' && rows.length > 0) {
            // console.log(rows);
            // const row = JSON.parse(JSON.stringify(rows));
            // // row.map(rw => {
            // //     response.status(302, {message: `Пользователь с этим email = ${rw.email} уже зарегистрирован`}, res)
            // //     return true
            // // })
            res.redirect('http://localhost:3000/registration?data=Пользователь с таким email уже зарегистрирован');
        } else {
            const name = req.body.username;
            const email = req.body.email;
            const salt = bcrypt.genSaltSync(10);
            const password = req.body.password;
            const confirmPassword = req.body.repeat;

            if (password !== confirmPassword) {
                res.redirect('http://localhost:3000/registration?data=Пароли не совпадают');
            } else {
                const hashPassword = bcrypt.hashSync(password, salt);


                console.log(name)

                const sql = "INSERT INTO `user` (`full_name`, `email`, `password`) VALUES ('"+ name +"', '"+ email +"', '"+ hashPassword +"')";
                db.query(sql, (err, results) => {
                    err ? console.log(err) : /*response.status(200, `Registration`, res);*/ res.redirect('http://localhost:3000/authication?data=true');
                })
                // console.log(req);
            }
        }
    })
}

exports.signin = (req, res) => {
    db.query("SELECT `id`, `full_name`, `email`, `password` FROM `user` WHERE `email` = '"+ req.body.email +"'", (err, rows, fields) => {
        if (err) {
            response.status(400, err, res);
        } else if (rows.length <= 0) {
            response.status(404, `User not found`, res);
        } else {
            response.status(200, `user found`, res);
        }
    });
}