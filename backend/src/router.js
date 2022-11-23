/* eslint-disable prettier/prettier */
const express = require("express");

const router = express.Router();

const userHandler = require("./userHandler");
const registrationHandler = require("./models/registrationHandler");
const FavouritesHandler = require("./models/FavouritesHandler");
const shareHandler = require("./models/shareHandler");

router.get("/", userHandler.getAllUsers);
router.get("/login/:email/:password", registrationHandler.getLoginCredentials);
router.get("/favourites/:id", FavouritesHandler.getFavEvents);
router.get("/share/:email", shareHandler.getShareEvents);
router.get("/:id", userHandler.getUserById);
router.put("/:id", userHandler.createUser);
router.post("/users", userHandler.createUser);
router.post("/favourites", FavouritesHandler.postFavEvent);
router.post("/share", shareHandler.shareEvent);
router.delete("/:id", userHandler.deleteUser);
router.delete("/favourites/:id", FavouritesHandler.deleteFavEvent);
router.delete("/share/:id", shareHandler.deleteShareEvent);

module.exports = router;
