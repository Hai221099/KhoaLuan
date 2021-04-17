import { combineReducers } from "redux";
import educationalProgram from "./educationalProgram/educationalProgram";
import student from "./student/student";
import studentDetail from "./student/studentDetail";
import educationalProgramDetail from "./educationalProgram/educationalProgramDetail";
import subject from "./subject/subject";
import lecturer from "./lecturer/lecturer";
import lecturerClassCourse from "./lecturer/lecturerClassCourse";
import classCourse from "./classCourse/classCourse";
import studentClassCourse from "./student/studentClassCourse";
import totalSubjects from "./subject/totalSubject";
import subjectObligation from "./subject/subjectObligation";
import totalSubjectObligation from "./subject/totalSubjectObligation";
import subjectSubjectId from "./subject/subjectSubjectId";
import newSubjectId from "./subject/newSubjectId";
import totalClassCourse from "./classCourse/totalClassCourse";
import faculty from "./faculty/faculty";
import facultyDetail from "./faculty/facultyDetail";
import classList from "./faculty/classList";
import userInfor from "./user/login";

export default combineReducers({
  educationalProgram,
  student,
  studentDetail,
  educationalProgramDetail,
  subject,
  lecturer,
  lecturerClassCourse,
  classCourse,
  studentClassCourse,
  totalSubjects,
  subjectObligation,
  totalSubjectObligation,
  subjectSubjectId,
  newSubjectId,
  totalClassCourse,
  faculty,
  facultyDetail,
  classList,
  userInfor,
});
