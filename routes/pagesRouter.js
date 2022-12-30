const express = require("express");
const router = express.Router();

//routing controller
const dashboardController = require("../controller/dashboardController");
const authController = require("../controller/authController");

//define route

//dashboardcontroller
router.get("/", dashboardController.index);
router.get("/verify", dashboardController.verify);
router.get("/blaster", dashboardController.blaster);

//auth controller
router.get("/login", authController.login);
router.post("/authlogin", authController.authlogin);
module.exports = router;
