/* eslint-disable prettier/prettier */
require("dotenv").config();
const mysql = require("mysql2/promise");

const connection = mysql.createPool({
  host: "localhost",
  port: 3306,
  user: "dummy-db",
  password: "123456",
  database: "films",
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
