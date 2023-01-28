const express = require("express");

const app = express();

// app.use((req, res, next) => {
//   res.send("<h1> Olá da Middlaware 1 </h1>");
//   next();
// });

// app.use((req, res, next) => {
//   res.send("<h1> Olá da Middlaware 2 </h1>");
// });

app.use("/users", (req, res, next) => {
  res.send("<h1> Olá usuário </h1>");
});

app.use("/", (req, res, next) => {
  res.send("<h1>Bem-vindo a página inicial</h1>");
});

app.listen(3000);
