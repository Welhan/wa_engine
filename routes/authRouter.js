const express = require("express");
const router = express.Router();
const authController = require("../controller/authController");

router.get("/login", authController.login);
// router.get('/serverDetail/:id', authController.)
// router.post("/authlogin", authController.authlogin);
module.exports = router;
