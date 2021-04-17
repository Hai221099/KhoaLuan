import { connect } from "react-redux";
import { deleteLecturer } from "../../actions/lecturer";
import DeleteLecturer from "../../components/deletes/DeleteLecturer";

const mapStateToProps = (state) => ({
  DeleteLecturerState: state.string,
});

const mapDispatchToProps = {
  deleteLecturerStart: deleteLecturer.start,
};

export default connect(mapStateToProps, mapDispatchToProps)(DeleteLecturer);
