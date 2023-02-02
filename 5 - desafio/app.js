const express = require("express");
const path = require("path");

const bodyParser = require("body-parser");

const publicRoutes = require("./routes/publicRoutes");
const adminRoutes = require("./routes/adminRoutes");

const app = express();

app.set("view engine", "pug");
app.set("views", "views");

app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, "public")));

app.use(publicRoutes);
app.use("/admin", adminRoutes);

app.listen(3000);
