import { connect } from "react-redux";
import {
  getLecturerClassCourse,
  getClassCourse,
  getStudentClassCourse,
} from "../../actions/classCourse";
import ClassCourseDetail from "../../contents/lecturer/ClassCourseDetail";

const mapStateToProps = (state) => ({
  lecturer: state.lecturerClassCourse,
  classCourse: state.classCourse,
  student: state.studentClassCourse,
});

const mapDispatchToProps = {
  getLecturer: getLecturerClassCourse.start,
  getClassCourse: getClassCourse.start,
  getStudent: getStudentClassCourse.start,
};

export default connect(mapStateToProps, mapDispatchToProps)(ClassCourseDetail);
