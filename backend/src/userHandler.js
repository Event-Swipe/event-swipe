/* eslint-disable prettier/prettier */
/* eslint-disable prefer-template */
/* eslint-disable prettier/prettier */
const connection = require("./db");

const getAllUsers = (req, res) => {
  connection
    .query("SELECT * FROM users")
    .then(([results]) => {
      res.json(results);
    })
    .catch((error) => {
      console.error(error);
      res.status(500).send("Error retrieving products from db.");
    });
};

const getLoginCredentials = (req, res) => {
  const { email, password } = req.params;

  connection
    .query(
      `SELECT * FROM users where email = '${email}' and password = '${password}' `
    )
    .then(([result]) => {
      res.send(result);
    })
    .catch((err) => {
      console.error(err + "Problem");
      res.status(500).send("Error adding the user");
    });
};

const getUserById = (req, res) => {
  const { id } = req.params;
  connection
    .query("SELECT * FROM users WHERE id = ?", [id])
    .then(([results]) => {
      if (results.length) {
        res.json(results[0]);
      } else {
        res.sendStatus(404);
      }
    });
};

const createUser = (req, res) => {
  const { username, email, password } = req.body;
  connection
    .query("INSERT INTO users (username, email, password) VALUES (?,?,?)", [
      username,
      email,
      password,
    ])
    .then(([result]) => {
      // console.log(result)
      const createdUser = {
        id: result.insertId,
        username,
        email,
        password,
      };
      res.sendStatus(201)
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const editUser = (req, res) => {
  connection
    .query("UPDATE users SET ? WHERE id = ?", [req.body, req.params.id])
    .then(([result]) => {
      res.status(200).send(result);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const deleteUser = (req, res) => {
  connection
    .query("DELETE FROM user WHERE id = ?", [req.params.id])
    .then(([result]) => {
      if (result.affectedRows)
        res.status(204).send(`The User ${req.params.id} was been deleted`);
      else res.sendStatus(404);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  editUser,
  deleteUser,
  getLoginCredentials,
};


