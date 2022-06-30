const express = require("express");

const {dashboardController} = require("../controller/dashboardController");

const router = express.Router();

router.get("/", dashboardController);

module.exports = router;