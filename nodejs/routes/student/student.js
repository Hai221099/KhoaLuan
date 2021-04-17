var express = require("express");
var router = express.Router();
var student = require("../../controller/student/student");
var studentDetail = require("../../controller/student/studentDetail");
var studentClassCourse = require("../../controller/student/studentClassCourse");

router.get("/student", student.list);
router.post("/student/create", student.create);
router.delete("/student/delete", student.delete);
router.put("/student/update", student.update);

router.post("/educationalProgramDetail/student", studentDetail.list);
router.post("/classCourse/student", studentClassCourse.list);

module.exports = router;
