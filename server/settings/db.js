const mysql = require('mysql2');
const env = require('./../dbenv');

const connection = mysql.createConnection({
    host: env.HOST,
    port: env.PORT,
    user: env.DBUSER,
    database: env.DBNAME,
    password: env.DBPASSWORD
});

connection.connect((err) => {
    if(err) {
        return console.error('Error: ' + err.message);
    } else {
        console.log("Data base connection was success!")
    }
})

module.exports = connection;