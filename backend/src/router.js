const express = require("express");

const router = express.Router();

const userHandler = require("./userHandler");

router.get("/", userHandler.getAllUsers);
router.get("/:id", userHandler.getUserById);
router.put("/:id", userHandler.createUser);
router.post("/users", userHandler.createUser);
router.delete("/:id", userHandler.deleteUser);

module.exports = router;
