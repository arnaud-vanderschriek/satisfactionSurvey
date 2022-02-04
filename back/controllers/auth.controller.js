const UserModel = require("../models/user.model");
const jwt = require("jsonwebtoken");
const helpersJwt = require("../helpers/jwt");
const { signUpErrors } = require("../helpers/error");
const { signInErrors } = require("../helpers/error");

module.exports.signUp = async (req, res) => {
  const {
    lastname,
    firstname,
    email,
    password,
    position,
    departement,
    userForm,
    techForm,
  } = req.body;

  try {
    const user = await UserModel.create({
      lastname,
      firstname,
      email,
      password,
      position,
      departement,
      userForm,
      techForm,
    });
    res.status(201).json({ user: user._id });
  } catch (err) {
    const errors = signUpErrors(err);
    res.status(200).send({ errors });
  }
};

module.exports.signIn = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await UserModel.login(email, password);
    const token = helpersJwt.createToken(user._id);
    res.cookie("jwt", token, { httpOnly: true, maxAge: helpersJwt.maxAge });
    res.status(200).json({
      id: user._id,
      lastName: user.lastname,
      firstname: user.firstname,
      colleagues: user.colleagues,
      departement: user.departement,
      status: user.status,
      userForm: user.userForm,
      techForm: user.techForm,
    });
  } catch (err) {
    const errors = signInErrors(err);
    res.status(200).json({ errors });
  }
};

module.exports.logout = async (req, res) => {
  res.cookie("jwt", "", { maxAge: 1 });
  res.redirect("/");
};
