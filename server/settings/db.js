const mysql = require('mysql2');
const config = require('../config');

const connection = mysql.createConnection({
    host: config.HOST,
    port: config.PORT,
    user: config.DBUSER,
    database: config.DBNAME,
    password: config.DBPASSWORD
});

connection.connect((err) => {
    if(err) {
        return console.error('Error: ' + err.message);
    } else {
        console.log("Data base connection was success!")
    }
})

module.exports = connection;