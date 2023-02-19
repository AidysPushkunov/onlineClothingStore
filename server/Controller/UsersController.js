'use strict'

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

    db.query("SELECT `id`, `email`, `full_name` FROM `user` WHERE `email` = '"+req.body.email+"'", (err, rows, fields) => {
        if (err) {
            response.status(400, err, res);
        } else if (typeof rows !== 'undefined' && rows.length > 0) {
            console.log(rows);
            response.status(404, `Already exist`);
            const row = JSON.parse(JSON.stringify(rows));
            row.map(rw => {
                response.status(302, {message: `Пользователь с этим емайл = ${rw.email} уже зарегистрирован`}, res)
                return true
            })
        } else {
            const email = req.body.email;
            const name = req.body.name;
            const password = req.body.password;


            const sql = "INSERT INTO `user` (`full_name`, `email`, `password`) VALUES ('"+ name +"', '"+ email +"', '"+ password +"')";
            db.query(sql, (err, results) => {
                err ? console.log(err) : response.status(results, res);
            })
            console.log(req);
            // response.status(200, `Registration`, res);

        }
    })
}