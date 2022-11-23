/* eslint-disable prettier/prettier */
/* eslint-disable no-restricted-syntax */
/* eslint-disable prettier/prettier */
/* eslint-disable prefer-template */
/* eslint-disable prettier/prettier */
const connection = require("../db");

const getFavEvents = (req, res) => {
  const { id } = req.params;

  connection
    .query(
      `SELECT users.id, favourites.oneevent, favourites.id
      FROM users
      INNER JOIN favourites ON users.id=favourites.userId where users.id = '${id}'`
    )
    .then(([result]) => {
      res.send(result);
      console.log(result);
    })
    .catch((err) => {
      console.error(err + "Problem");
      res.status(500).send("Error adding the user");
    });
};

const postFavEvent = (req, res) => {
  const { userId, event, eventId } = req.body;

  connection
    .query(
      "INSERT INTO favourites (userId, oneEvent, eventId) VALUES (?,?,?)",
      [userId, event, eventId]
    )
    .then(([result]) => {
      const eventObj = [result, result.insertId];
      res.status(201).send(eventObj);
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

const deleteFavEvent = (req, res) => {
  const { id } = req.params;

  connection
    .query(`DELETE FROM favourites Where eventId = '${id}'`, [id])
    .then(([result]) => {
      res.status(201).send(result);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

module.exports = {
  getFavEvents,
  postFavEvent,
  deleteFavEvent,
};
