import { connect } from "react-redux";
import { addLecturer } from "../../actions/lecturer";
import AddLecturer from "../../components/adds/AddLecturer";

const mapStateToProps = (state) => ({
  AddLecturerState: state.string,
});

const mapDispatchToProps = {
  addLecturerStart: addLecturer.start,
};

export default connect(mapStateToProps, mapDispatchToProps)(AddLecturer);
