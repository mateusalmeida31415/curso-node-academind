const User = require("../models/userModel");

exports.addUser = (req, res, next) => {
  res.render("add-user", { pageTitle: "Adicionar usuário" });
};

exports.getAll = (req, res, next) => {
  User.fetchAll((users) => {
    res.render("show-users", { pageTitle: "Usuários", users: users });
  });
};
