const express = require("express");

const { registerController } = require("../controller/registerController");
const {
  peopleValidation,
  peopleErrorCatch,
} = require("../middlewares/formValidation");

const router = express.Router();

router.get("/", registerController);

// register form validator with submit
router.post("/", peopleValidation, peopleErrorCatch);

module.exports = router;
