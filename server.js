const express = require("express");
const app = express();
var parser = require("body-parser");
var methodOverride = require("method-override");
const path = require("path");
var con = require("./config/db.js");
var request = require("request");

// Using pug template engine
app.use(express.static(path.join(__dirname, "public")));
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
app.use(parser.json());
app.use(parser.urlencoded({ extended: true }));
// app.use(express.bodyParser());

// include router
const pagesRouter = require("./routes/pagesRouter");
// const authRouter = require("./routes/authRouter")

// routing
app.use("/", pagesRouter);
// app.use("/login", authRouter)

// starting server
app.listen(3000, function () {
  console.log("server listening on port 3000");
});
