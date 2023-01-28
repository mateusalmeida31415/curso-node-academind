const express = require("express");
const path = require("path");

const rootDir = require("../utils/path");

const router = express.Router();

router.get("/user", (req, res, next) => {
  res.sendFile(path.join(rootDir, "views", "add-user.html"));
});

router.post("/user", (req, res, next) => {
  console.log(req.body.username);
  res.redirect("/");
});

module.exports = router;
