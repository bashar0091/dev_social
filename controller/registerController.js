const bcrypt = require("bcrypt");

// internal imports
const People = require("../models/People");

function registerController(req, res, next) {
  res.render("register");
}

// add user
async function addUser(req, res, next) {
  // save user or send error
  try {
    res.send(req.body.name);
    const PeopleRegister = new People({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
    });
    const result = await PeopleRegister.save();
    res.status(200).json({
      message: "User was added successfully!",
    });
  } catch (err) {
    res.status(500).json({
      errors: {
        common: {
          msg: "Unknown error occured!",
        },
      },
    });
  }
}

module.exports = {
  registerController,
  addUser,
};
