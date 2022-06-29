const express = require("express");

const {registerController} = require("../controller/registerController");

const router = express.Router();

router.get("/", registerController);

module.exports = router;