/* eslint-disable no-restricted-syntax */
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
      console.log(result[0]);
    })
    .catch((err) => {
      console.error(err + "Problem");
      res.status(500).send("Error adding the user");
    });
};

const postFavEvent = (req, res) => {
  const { userId, event } = req.body;

  connection
    .query("INSERT INTO favourites (userId, oneEvent) VALUES (?,?)", [
      userId,
      event,
    ])
    .then(([result]) => {
      res.send(result);
      res.sendStatus(201);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

module.exports = {
  getFavEvents,
  postFavEvent,
};
