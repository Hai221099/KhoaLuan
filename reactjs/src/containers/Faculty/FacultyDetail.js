import { connect } from "react-redux";
import { getFacultyById, getClassById } from "../../actions/faculty";
import FacultyDetail from "../../contents/faculty/FacultyDetail";

const mapStateToProps = (state) => ({
  faculty: state.facultyDetail,
  classList: state.classList,
});

const mapDispatchToProps = {
  getFacultyById: getFacultyById.start,
  getClassById: getClassById.start,
};

export default connect(mapStateToProps, mapDispatchToProps)(FacultyDetail);
