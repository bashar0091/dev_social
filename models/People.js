const mongoose = require("mongoose");

const peopleSchema = mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
    },
    email: {
      type: String,
      trim: true,
      lowercase: true,
    },
    password: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const People = mongoose.model("People", peopleSchema);

module.exports = People;
