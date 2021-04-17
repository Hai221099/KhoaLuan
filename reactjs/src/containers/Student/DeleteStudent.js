import {connect} from "react-redux";
import { deleteStudent } from "../../actions/student";
import DeleteStudent from '../../components/deletes/DeleteStudent';

const mapStateToProps = (state) => ({
    DeleteStudentState: state.string,
});

const mapDispatchToProps = {
    deleteStudentStart: deleteStudent.start,
}

export default connect (mapStateToProps, mapDispatchToProps)(DeleteStudent);

