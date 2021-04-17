import { connect } from "react-redux";

import { getFaculties } from "../../actions/faculty";
import Faculty from "../../contents/faculty/Faculty";

const mapStateToProps = (state) => ({
  faculty: state.faculty,
});

const mapDispatchToProps = {
  getFaculties: getFaculties.start,
};

export default connect(mapStateToProps, mapDispatchToProps)(Faculty);
