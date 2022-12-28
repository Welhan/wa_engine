const express = require("express");
const app = express();
var methodOverride = require("method-override");
const path = require("path");
var con = require("./config/db.js");

// Using pug template engine
app.use(express.static("public"));
app.set("view engine", "ejs");

// connecting route to database
app.use(function (req, res, next) {
  req.con = con;
  next();
});

// parsing body request
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

// include router
const pagesRouter = require("./routes/pagesRouter");

// routing
app.use("/", pagesRouter);

// starting server
app.listen(3000, function () {
  console.log("server listening on port 3000");
});
