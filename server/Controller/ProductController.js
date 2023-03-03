const db = require("../settings/db");
const response = require("../response");


exports.getProducts =  (req, res) => {
    db.query(('SELECT * FROM `products`'), (err, rows, fields) => {
        if (err) {
            response.status(400, err, res).json({rows});
        } else {
            response.status(200, rows, res)
        }
    })
}
