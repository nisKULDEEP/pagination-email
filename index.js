const express = require("express");
const UserRoutes = require("./src/Routes/UserRoutes");

const app = express();

app.use(express.json());

//Routes
app.use("/users", UserRoutes);

module.exports = app;
