var jwt = require("jsonwebtoken");
require('dotenv').config();


module.exports = {

    generateToken(user) {
    var u = {
    email: user.email,
    username: user.username,
    };
    return token = jwt.sign(u, process.env.JWT_SECRET, {
        expiresIn: 60 * 60 * 24 // expires in 24 hours
    });
    }
}