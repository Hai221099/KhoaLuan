import { connect } from "react-redux";
import { getStudents } from "../../actions/student";
import { getEducationalPrograms } from "../../actions/educationalProgram";
import { getTotalClassCourse } from "../../actions/classCourse";
import Student from "../../contents/student/Student";

const mapStateToProps = (state) => ({
  studentList: state.student,
  educationalProgramList: state.educationalProgram,
  totalClassCourse: state.totalClassCourse,
});

const mapDispatchToProps = {
  getStudents: getStudents.start,
  getEducationalPrograms: getEducationalPrograms.start,
  getTotalClassCourse: getTotalClassCourse.start,
};

export default connect(mapStateToProps, mapDispatchToProps)(Student);
