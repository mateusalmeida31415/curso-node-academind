const express = require("express");

const router = express.Router();

router.get("/", (req, res, next) => {
  res.render("add-user", { pageTitle: "Adicionar usuário" });
});

router.get("/users", (req, res, next) => {
  res.render("show-users", {
    pageTitle: "Usuários",
    users: ["Mateus", "João", "Julio"],
  });
});

module.exports = router;
