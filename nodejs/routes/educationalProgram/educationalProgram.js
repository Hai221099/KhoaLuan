var express = require("express");
var router = express.Router();
var educationalProgram = require("../../controller/educationalProgram/educationalProgram");
var educationalProgramDetail = require("../../controller/educationalProgram/educationalProgramDetail");
var subject = require("../../controller/others/subject");

router.get("/educationalProgram", educationalProgram.list);
router.post("/educationalProgram/create", educationalProgram.create);
router.delete("/educationalProgram/delete", educationalProgram.delete);
router.put("/educationalProgram/update", educationalProgram.update);

router.post(
  "/educationalProgramDetail/educationalProgram",
  educationalProgramDetail.list
);

router.get("/subject", subject.list2);
router.post("/subject/create", subject.create);
router.post("/subjectId/create", subject.create2);
router.post("/subject/obligation", subject.list3);
router.post("/totalSubjects/obligation", subject.list4);
router.post("/subject/subjectId", subject.list5);
router.get("/subjectId", subject.list6);

module.exports = router;
