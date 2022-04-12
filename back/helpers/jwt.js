const jwt = require("jsonwebtoken");

module.exports.createToken = (id) => {
  return jwt.sign({ id }, process.env.TOKEN_SECRET, {
    expiresIn: maxAge,
  });
};

const maxAge = 3 * 24 * 60 * 60 * 1000;

exports.maxAge = maxAge;
