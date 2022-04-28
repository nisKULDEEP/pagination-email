const express = require("express");
const userController = require("../Controllers/Users");
// const AllUser = require("../Controllers/Users");
const Router = express.Router();

Router.route("/register").post(userController.Register);
Router.route("/").get(userController.AllUser);

module.exports = Router;
