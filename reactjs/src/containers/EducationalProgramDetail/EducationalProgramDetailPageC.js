import { connect } from "react-redux";
import {
  //   getHV,
  getEducationalProgramById,
  getSubjectById,
  getSubjectObligationById,
} from "../../actions/educationalProgramDetail";
import EducationalProgramDetail from "../../contents/educationalProgram/EducationalProgramDetail";

const mapStateToProps = (state) => ({
  //   studentDetail: state.studentDetail,
  educationalProgramDetail: state.educationalProgramDetail,
  subject: state.subject,
  subjectObligation: state.subjectObligation,
});

const mapDispatchToProps = {
  //   getHV: getHV.start,
  getEducationalProgramById: getEducationalProgramById.start,
  getSubjectById: getSubjectById.start,
  getSubjectObligationById: getSubjectObligationById.start,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EducationalProgramDetail);
