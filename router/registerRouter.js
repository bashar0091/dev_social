const express = require("express");

const { registerController } = require("../controller/registerController");
const {
  peopleValidation,
  validationError,
} = require("../middlewares/common/registerHandler");

const router = express.Router();

router.get("/", registerController);

// form submit
router.post("/", peopleValidation, validationError);

module.exports = router;
