import { connect } from "react-redux";
import { addFaculty } from "../../actions/faculty";
import AddFaculty from "../../components/adds/AddFaculty";

const mapStateToProps = (state) => ({
  // AddEducationalProgramState: state.string,
});

const mapDispatchToProps = {
  addFaculty: addFaculty.start,
};

export default connect(mapStateToProps, mapDispatchToProps)(AddFaculty);
