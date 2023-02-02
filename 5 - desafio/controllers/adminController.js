const User = require("../models/userModel");

exports.addUser = (req, res, next) => {
  const username = req.body.username;

  const user = new User(username);
  user.save();

  return res.redirect("/");
};
