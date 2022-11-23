/* eslint-disable prettier/prettier */
/* eslint-disable no-restricted-syntax */
/* eslint-disable prettier/prettier */
/* eslint-disable prefer-template */
/* eslint-disable prettier/prettier */
const connection = require("../db");

const getShareEvents = (req, res) => {
  const { email } = req.params;

  connection
    .query(
      `SELECT  event, receiverEmail, senderEmail
      FROM shared where receiverEmail = '${email}'`
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


const shareEvent = (req, res) => {
  const { userId, oneEvent, eventId, receiverEmail, senderEmail } = req.body;

  connection
    .query("INSERT INTO shared (senderUserId, event, eventId, receiverEmail, senderEmail) VALUES (?,?,?,?, ?)", [
      userId,
      oneEvent,
      eventId,
      receiverEmail,
      senderEmail
    ])
    .then(([result]) => {
      const eventObj = [result, result.insertId]
      res.status(201).send(eventObj)
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};



module.exports = {
  shareEvent,
  getShareEvents
};
