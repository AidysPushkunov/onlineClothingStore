'use strict'

const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const response = require('./../response');
const db = require('./../settings/db');
const config = require('./../config')


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
                    err ? console.log(err) : /*response.status(200, `Registration`, res);*/ res.redirect('http://localhost:3000/authentication?data=Пользователь успешно зарегистрирован');
                })
                // console.log(req);
            }
        }
    })
}

exports.signin = (req, res) => {
    // console.log(req.body)
    const email = req.body.email;
    // console.log(email)
    db.query("SELECT `id`, `full_name`,  `email`, `password` FROM `user` WHERE `email` = '"+email+"' ", (err, rows, fields) => {
        if (err) {
            response.status(400, err, res);
            // res.redirect('http://localhost:3000/pagenotfound');

        } else if (rows.length <= 0) {
            // console.log(rows)
            response.status(401, {message: `Пользователь не найден`}, res);
            // res.redirect('http://localhost:3000/authentication?data=Пользователь не зарегистрирован');
        } else {
            const row = JSON.parse(JSON.stringify(rows));
            row.map(rw => {
                const password = bcrypt.compareSync(String(req.body.password), rw.password);
                if (password) {
                    // Впускаем пользователя и генерируем токен
                    const token = jwt.sign({id:rows[0].id}, "jwtkey");
                    const {password, ...other} = rows[0];

                    res.cookie("access_token", token, {
                        httpOnly: true
                    }).status(200).json(other)

                    // response.status(200, `Bearer ${token}`, res);
                    // res.redirect('http://localhost:3000/profile?id=${}');


                } else {
                    // res.redirect('http://localhost:3000/authentication?data=Пароль не верный');
                    response.status(401, {message: `Пароль не верный`}, res)
                }
                return true;
            })
        }
    });
}

exports.logout = (req, res) => {
    res.clearCookie("access_token", {
        sameSite: "none",
        secure: true
    }).status(200).json("User has been logged out.")
}