import { connect } from "react-redux";
import { getLecturers } from "../../actions/lecturer";
import { getTotalClassCourse } from "../../actions/classCourse";
import Lecturer from "../../contents/lecturer/Lecturer";

const mapStateToProps = (state) => ({
  lecturerList: state.lecturer,
  // educationalProgramList: state.educationalProgram
  totalClassCourse: state.totalClassCourse,
});

const mapDispatchToProps = {
  getLecturers: getLecturers.start,
  getTotalClassCourse: getTotalClassCourse.start,
  // getEducationalPrograms: getEducationalPrograms.start
};

export default connect(mapStateToProps, mapDispatchToProps)(Lecturer);
