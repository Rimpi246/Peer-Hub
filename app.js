//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");

const mongoose = require("mongoose");

const app = express();

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

// mongoose.connect(
//   "mongodb+srv://admin-rimpi:Test59158@cluster0.jmf57.mongodb.net/blogDB",
//   { useNewUrlParser: true, useUnifiedTopology: true }
// );

app.get("/", function (req, res) {
  res.render("landing");
});
app.get("/profile", function (req, res) {
  res.render("profile");
});
app.get("/discussion", function (req, res) {
  res.render("discussion");
});

let port = process.env.PORT;
if (port == null || port == "") {
  port = 3000;
}
app.listen(port, function () {
  console.log("Server has started successfully");
});
