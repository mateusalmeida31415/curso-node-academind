// Criar novo projeto com express e nodemon
// Usar uma template engine (pug ou ej ou ...)
// Adicionar duas rotas
// "/" com um formulário que permite adicionar um nome e exibir no console
// "/users" exibe uma <ul> e exibir o nome adicionar ou algum texto de erro

//Core modules
const express = require("express");
const path = require("path");

//3th party modules
const bodyParser = require("body-parser");

//utils
const corePath = require("./utils/path");

//route files
const adminRoutes = require("./routes/admin");
const publicRoutes = require("./routes/public");

const app = express();

//pug default engine
app.set("view engine", "pug");
app.set("views", "views");

//Body parser
app.use(bodyParser.urlencoded({ extended: false }));
//serving static files
app.use(express.static(path.join(corePath, "public")));

//Routes
app.use("/admin", adminRoutes);
app.use(publicRoutes);

//404 route
app.use("/", (req, res, next) => {
  res.render("404", { pageTitle: "Página não encontrada!" });
});

app.listen(3000);

// Usar o pug como template engine
// Sintaxe do pug
// Loops e condicionais usando o pug
// Usar um main layout
