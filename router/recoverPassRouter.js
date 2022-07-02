const express = require("express");

const {
  recoverPassController,
} = require("../controller/recoverPassController");

const router = express.Router();

router.get("/", recoverPassController);

module.exports = router;
