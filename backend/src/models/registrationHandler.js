/* eslint-disable prettier/prettier */
/* eslint-disable prefer-template */
/* eslint-disable prettier/prettier */
const connection = require("../db");

const getLoginCredentials = (req, res) => {
  const { email, password } = req.params;

  connection
    .query(
      `SELECT * FROM users where email = '${email}' and password = '${password}' `
    )
    .then(([result]) => {
      res.send(result[0]);
    })
    .catch((err) => {
      console.error(err + "Problem");
      res.status(500).send("Error adding the user");
    });
};

module.exports = {
  getLoginCredentials,
};
