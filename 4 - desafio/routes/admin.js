const express = require("express");

const router = express.Router();

router.post("/user", (req, res, next) => {
  console.log(req.body.username);
  res.redirect("/users");
});

module.exports = router;
