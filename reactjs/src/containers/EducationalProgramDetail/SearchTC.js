import { connect } from "react-redux";
import {
  //   getHV,
  getNewSubjectId,
  getSubjects,
  addSubject,
} from "../../actions/educationalProgramDetail";
import SearchTC from "../../components/otherFunctions/SearchSubjectTC";

const mapStateToProps = (state) => ({
  totalSubjects: state.totalSubjects,
  newSubjectId: state.newSubjectId,
});

const mapDispatchToProps = {
  getSubjects: getSubjects.start,
  addSubjectStart: addSubject.start,
  getNewSubjectId: getNewSubjectId.start,
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchTC);
