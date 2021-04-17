import { connect } from "react-redux";
import { getEducationalPrograms } from "../../actions/educationalProgram";
import EducationalProgram from "../../contents/educationalProgram/EducationalProgram";

const mapStateToProps = (state) => ({
  educationalProgramList: state.educationalProgram,
});

const mapDispatchToProps = {
  getEducationalPrograms: getEducationalPrograms.start,
};

export default connect(mapStateToProps, mapDispatchToProps)(EducationalProgram);
