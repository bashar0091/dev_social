const express = require("express");

const { forgetPassController } = require("../controller/forgetPassController");

const router = express.Router();

router.get("/", forgetPassController);

module.exports = router;
