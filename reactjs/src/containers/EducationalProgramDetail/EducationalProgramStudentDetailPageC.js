import { connect } from "react-redux";
import {
  getHV,
  getEducationalProgramById,
  getSubjectById,
} from "../../actions/educationalProgramDetail";
import EducationalProgramDetail from "../../contents/student/EducationalProgramStudentDetail";

const mapStateToProps = (state) => ({
  studentDetail: state.studentDetail,
  educationalProgramDetail: state.educationalProgramDetail,
  subject: state.subject,
});

const mapDispatchToProps = {
  getHV: getHV.start,
  getEducationalProgramById: getEducationalProgramById.start,
  getSubjectById: getSubjectById.start,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EducationalProgramDetail);
