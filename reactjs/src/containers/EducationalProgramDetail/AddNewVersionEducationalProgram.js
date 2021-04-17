import { connect } from "react-redux";
import {
  getEducationalProgramById,
  getSubjectById,
  getSubjects,
  getSubjectObligationById,
  getTotalSubjectObligation,
  getSubjectSubjectId,
  addSubjectSubjectId,
} from "../../actions/educationalProgramDetail";
import {
  getEducationalPrograms,
  addEducationalProgram,
} from "../../actions/educationalProgram";
import AddNewVersionEducationalProgram from "../../contents/educationalProgram/AddNewVersionEducationalProgram";

const mapStateToProps = (state) => ({
  //   studentDetail: state.studentDetail,
  educationalProgramDetail: state.educationalProgramDetail,
  subject: state.subject,
  totalSubjects: state.totalSubjects,
  educationalProgram: state.educationalProgram,
  subjectObligation: state.subjectObligation,
  totalSubjectObligation: state.totalSubjectObligation,
  subjectSubjectId: state.subjectSubjectId,
});

const mapDispatchToProps = {
  //   getHV: getHV.start,

  getEducationalProgramById: getEducationalProgramById.start,
  getSubjectById: getSubjectById.start,
  getSubjects: getSubjects.start,
  getEducationalPrograms: getEducationalPrograms.start,
  getSubjectObligationById: getSubjectObligationById.start,
  addEducationalProgramStart: addEducationalProgram.start,
  getTotalSubjectObligation: getTotalSubjectObligation.start,
  getSubjectSubjectId: getSubjectSubjectId.start,
  addSubjectSubjectIdStart: addSubjectSubjectId.start,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddNewVersionEducationalProgram);
