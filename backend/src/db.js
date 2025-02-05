/* eslint-disable prettier/prettier */
require("dotenv").config();
const mysql = require("mysql2/promise");

const connection = mysql.createPool({
  host: "localhost",
  port: 3306,
  user: "dummy-db",
  password: "123456",
  database: "films",
  // host: process.env.DB_HOST,
  // port: process.env.DB_PORT,
  // user: process.env.DB_USER,
  // password: process.env.DB_PASSWORD,
  // database: process.env.DB_NAME,
});

connection
  .getConnection()
  .then(() => {
    // eslint-disable-next-line no-restricted-syntax
    console.log("Can reach database");
  })
  .catch((err) => {
    console.error(err);
  });

module.exports = connection;
