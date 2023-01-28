//Core modules
const express = require("express");
const path = require("path");

//Modulos de terceiros
const bodyParser = require("body-parser");

//Utilitarios
const rootDir = require("./utils/path");

// Rotas criadas
const publicRoutes = require("./routes/public");
const adminRoutes = require("./routes/admin");

const app = express();

// Parse request
app.use(bodyParser.urlencoded({ extended: false }));

// Servindo arquivos estáticos em /public
app.use(express.static(path.join(rootDir, "public")));

//Rotas usadas
app.use(publicRoutes);
app.use("/admin", adminRoutes);

//404 rota
app.use((req, res) => {
  res.status(404).sendFile(path.join(rootDir, "views", "404.html"));
});

app.listen(3000);
