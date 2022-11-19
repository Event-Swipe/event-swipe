/* eslint-disable prettier/prettier */
/* eslint-disable prefer-template */
/* eslint-disable prettier/prettier */
const connection = require("../db");

const getFavEvents = (req, res) => {
  const { id } = req.params;

  connection
    .query(
      `SELECT users.id, favourites.oneevent
      FROM users
      INNER JOIN favourites ON users.id=favourites.userId where users.id = '${id}'`
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
  getFavEvents,
};
