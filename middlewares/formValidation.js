const { check, validationResult } = require("express-validator");

// check validation
const peopleValidation = [
  check("email", "Email is not valid").isEmail().trim(),
  check("password")
    .isStrongPassword()
    .withMessage(
      "Password must be at least 8 characters long & should contain at least 1 lowercase, 1 uppercase, 1 number & 1 symbol"
    ),
];

// error catch
function peopleErrorCatch(req, res, next) {
  const error = validationResult(req);
  if (!error.isEmpty()) {
    const alert = error.array();
    res.render("register", {
      alert,
    });
  }
}

module.exports = {
  peopleValidation,
  peopleErrorCatch,
};
