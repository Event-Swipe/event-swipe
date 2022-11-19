/* eslint-disable prettier/prettier */
const express = require("express");

const router = express.Router();

const userHandler = require("./userHandler");
const registrationHandler = require("./models/registrationHandler");
const FavouritesHandler = require("./models/FavouritesHandler");

router.get("/", userHandler.getAllUsers);
router.get("/login/:email/:password", registrationHandler.getLoginCredentials);
router.get("/favourites/:id", FavouritesHandler.getFavEvents);
router.get("/:id", userHandler.getUserById);
router.put("/:id", userHandler.createUser);
router.post("/users", userHandler.createUser);
router.delete("/:id", userHandler.deleteUser);

module.exports = router;
