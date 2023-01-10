/* create database connection */
const mysql = require('mysql2');



const pool = mysql.createPool({
    port: 8888,
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USERNAME || 'root',
    password: process.env.DB_PASSWORD || 'root',
    database: process.env.DB_DBNAME || 'chat-nodejs',
    queueLimit : 0, // unlimited queueing
    connectionLimit : 0 
});

module.exports = pool.promise()