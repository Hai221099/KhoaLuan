var express = require("express");
var router = express.Router();
var user = require("../../controller/user/user");

router.post("/user", user.check);

module.exports = router;
