const express = require("express");

const router = express.Router();

const publicController = require("../controllers/publicController");

router.get("/", publicController.addUser);

router.get("/users", publicController.getAll);

module.exports = router;
