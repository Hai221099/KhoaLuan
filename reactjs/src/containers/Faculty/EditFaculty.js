import { connect } from "react-redux";
import { editFaculty } from "../../actions/faculty";
import EditFaculty from "../../components/edits/EditFaculty";

const mapStateToProps = (state) => ({
  // EditEducationalProgramState: state.string,
});

const mapDispatchToProps = {
  editFacultyStart: editFaculty.start,
};

export default connect(mapStateToProps, mapDispatchToProps)(EditFaculty);
