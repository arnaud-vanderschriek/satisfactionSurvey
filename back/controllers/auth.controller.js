const UserModel = require("../models/user.model");

module.exports.signUp = async (req, res) => {
  const { lastname,firstname, email, password } = req.body;

  try {
    const user = await UserModel.create({
      lastname,
      firstname,
      email,
      password,
    });
    res.status(201).json({ user: user._id });
  } catch (err) {
    res.status(200).send({ err });
  }
};
