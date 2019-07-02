let jwt = require("jsonwebtoken");
require("dotenv").config();

module.exports = {
  generateToken(user) {
    let u = {
      email: user.email,
      username: user.username
    };
    return (token = jwt.sign(u, process.env.JWT_SECRET, {
      expiresIn: 60 * 60 * 24 * 365 // expires in 24 hours
    }));
  },

  validateUser(token) {
    try {
      return (decoded = jwt.verify(token, process.env.JWT_SECRET));
    } catch (err) {
      return -1;
    }
  }
};
