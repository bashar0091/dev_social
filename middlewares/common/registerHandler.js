const { check, validationResult } = require("express-validator");

const peopleValidation = [
  check("email", "email is not valid")
    .isEmail()
    .withMessage("Invalid Email Addres")
    .trim(),
];

function validationError(req, res, next) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const alert = errors.array();
    res.render("register", { alert });
  }
}

module.exports = {
  peopleValidation,
  validationError,
};
