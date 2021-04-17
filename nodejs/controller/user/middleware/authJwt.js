const jwt = require("jsonwebtoken");
const config = require("./secret");
const db = require("../../../config/db");
const User = db.userTable;

verifyToken = (req, res, next) => {
  let token = req.headers["x-access-token"];

  if (!token) {
    return res.status(403).send({
      message: "No token provided!",
    });
  }

  jwt.verify(token, config.secret, (err, decoded) => {
    if (err) {
      return res.status(401).send({
        message: "Unauthorized!",
      });
    }
    req.userId = decoded.id;
    next();
  });
};

isAdmin = (req, res, next) => {
  User.findByPk(req.userId).then((user) => {
    user.getRoles().then((roles) => {
      for (let i = 0; i < roles.length; i++) {
        if (roles[i].name === "admin") {
          next();
          return;
        }
      }

      res.status(403).send({
        message: "Require Admin Role!",
      });
      return;
    });
  });
};

isStudent = (req, res, next) => {
  User.findByPk(req.userId).then((user) => {
    user.getRoles().then((roles) => {
      for (let i = 0; i < roles.length; i++) {
        if (roles[i].name === "student") {
          next();
          return;
        }
      }

      res.status(403).send({
        message: "Require Student Role!",
      });
    });
  });
};

isLecturer = (req, res, next) => {
  User.findByPk(req.userId).then((user) => {
    user.getRoles().then((roles) => {
      for (let i = 0; i < roles.length; i++) {
        if (roles[i].name === "lecturer") {
          next();
          return;
        }
      }

      res.status(403).send({
        message: "Require Lecturer Role!",
      });
    });
  });
};

isFaculty = (req, res, next) => {
  User.findByPk(req.userId).then((user) => {
    user.getRoles().then((roles) => {
      for (let i = 0; i < roles.length; i++) {
        if (roles[i].name === "faculty") {
          next();
          return;
        }
      }

      res.status(403).send({
        message: "Require Faculty Role!",
      });
    });
  });
};

const authJwt = {
  verifyToken: verifyToken,
  isAdmin: isAdmin,
  isLecturer: isLecturer,
  isStudent: isStudent,
  isFaculty: isFaculty,
};
module.exports = authJwt;
