const mongoose = require("mongoose");
const { isEmail } = require("validator");

const userSchema = new mongoose.Schema(
  {
    lastname: {
      type: String,
      required: true,
      minlength: 3,
      maxlength: 15,
      unique: true,
      trim: true,
    },
    firstname: {
      type: String,
      required: true,
      minlength: 3,
      maxlength: 15,
      unique: false,
      trim: true,
    },
    password: {
      type: String,
      required: true,
      max: 1024,
      minlength: 6,
    },
    email: {
      type: String,
      required: true,
      validate: isEmail,
      lowercase: true,
      trim: true,
    },
    address: {
      type: String,
      minlength: 3,
      maxlength: 40,
    },
  },
  {
    timestamps: true,
  }
);

const userModel = mongoose.model("user", userSchema);

module.exports = userModel;
