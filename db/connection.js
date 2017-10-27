var mysql = require('mysql');

 var connection =  mysql.createConnection({
     host: 'localhost',
     port: 3306,
     user: 'root',
     database: 'martins_impressoras'
 });

 module.exports = connection;