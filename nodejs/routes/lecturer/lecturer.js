var express = require("express");
var router = express.Router();
var lecturer = require("../../controller/lecturer/lecturer");
var lecturerDetail = require("../../controller/lecturer/lecturerDetail");

router.get("/lecturer", lecturer.list);
router.post("/lecturer/create", lecturer.create);
router.delete("/lecturer/delete", lecturer.delete);
router.put("/lecturer/update", lecturer.update);

router.post("/classCourse/lecturer", lecturerDetail.list);

module.exports = router;
