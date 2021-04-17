const db = require("../../config/db");
const User = db.userTable;
const config = require("./middleware/secret");
var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");

const user = {};

user.check = async (req, res) => {
  const request = {
    username: req.body.username,
    password: req.body.password,
  };
  const response = await User.findOne({
    where: {
      username: request.username,
      password: request.password,
    },
  });
  var token = jwt.sign({ id: response.id }, config.secret, {
    expiresIn: 86400, // 24 hours
  });
  const result = {
    role: response.role,
    accessToken: token,
  };
  res.json(result);
};

module.exports = user;
