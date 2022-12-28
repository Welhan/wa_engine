const express = require("express");
const router = express.Router();
const pagesController = require("../controller/pagesController");

router.get("/", pagesController.index);
router.get("/verify", pagesController.verify);
router.get("/blaster", pagesController.blaster);
router.get("/login", pagesController.login);
module.exports = router;
