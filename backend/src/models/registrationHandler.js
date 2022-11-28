/* eslint-disable prefer-destructuring */
/* eslint-disable object-shorthand */
/* eslint-disable prettier/prettier */
/* eslint-disable prefer-template */
/* eslint-disable prettier/prettier */
const jwt = require('jsonwebtoken');
const connection = require("../db");


const getLoginCredentials = (req, res, next) => {

  const { email, password } = req.params;

  connection
    .query(
      `SELECT * FROM users where email = '${email}' and password = '${password}' `
    )
    .then(([result]) => {
      req.user=result[0];
      next()
    })
    .catch((err) => {
      console.error(err + "Problem");
      res.status(500).send("Error adding the user");
    });
};
const generateToken = (req, res) => {
  const token = jwt.sign({ password: req.user.password, email: req.user.email }, 'lalala')

    // .then((res) => {
     res.status(200).send({user: req.user, token: token})
    // })
    // .catch((err) => {
    //   console.error(err + "Problem");
    //   res.status(500).send("Error adding the user");
    // });
};

module.exports = {
  getLoginCredentials,
  generateToken
};
