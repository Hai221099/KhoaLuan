var express = require("express");
var router = express.Router();
// var educationalProgram = require("./../controller/educationalProgram/educationalProgram");
// var student = require("./../controller/student/student");
// var studentDetail = require("../controller//student/studentDetail");
// var educationalProgramDetail = require("../controller/educationalProgram/educationalProgramDetail");
var subject = require("../controller/others/subject");
var classCourse = require("../controller/others/class");

var studentRouter = require("./student/student");
var educationalProgramRouter = require("./educationalProgram/educationalProgram");
var lecturerRouter = require("./lecturer/lecturer");
var facultyRouter = require("./faculty/faculty");
var userRouter = require("./user/user");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

// router.get("/educationalProgram", educationalProgram.list);
// router.post("/educationalProgram/create", educationalProgram.create);
// router.delete("/educationalProgram/delete", educationalProgram.delete);
// router.put("/educationalProgram/update", educationalProgram.update);

router.use("/", studentRouter);
router.use("/", educationalProgramRouter);
router.use("/", lecturerRouter);
router.use("/", facultyRouter);
router.use("/", userRouter);
// router.get("/student", student.list);
// router.post("/student/create", student.create);
// router.delete("/student/delete", student.delete);
// router.put("/student/update", student.update);

// router.post("/educationalProgramDetail/student", studentDetail.list);
// router.post(
//   "/educationalProgramDetail/educationalProgram",
//   educationalProgramDetail.list
// );
router.post("/educationalProgramDetail/subject", subject.list);
router.post("/class", classCourse.list);
router.post("/classes", classCourse.list2);

// router.get("/lecturer", lecturer.list);
// router.post("/lecturer/create", lecturer.create);
// router.delete("/lecturer/delete", lecturer.delete);
// router.put("/lecturer/update", lecturer.update);

// router.post("/classCourse/lecturer", lecturerDetail.list);
// router.post("/classCourse/student", studentClassCourse.list);

module.exports = router;
