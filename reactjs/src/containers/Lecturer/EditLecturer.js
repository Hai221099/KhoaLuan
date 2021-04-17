import { connect } from "react-redux";
import { editLecturer } from "../../actions/lecturer";
import EditLecturer from "../../components/edits/EditLecturer";

const mapStateToProps = (state) => ({
  EditLecturerState: state.string,
});

const mapDispatchToProps = {
  editLecturerStart: editLecturer.start,
};

export default connect(mapStateToProps, mapDispatchToProps)(EditLecturer);
