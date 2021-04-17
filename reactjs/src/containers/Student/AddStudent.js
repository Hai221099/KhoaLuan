import {connect} from "react-redux";
import { addStudent } from "../../actions/student";
import AddStudent from '../../components/adds/AddStudent';

const mapStateToProps = (state) => ({
    AddStudentState: state.string,
});

const mapDispatchToProps = {
    addStudentStart: addStudent.start,
}

export default connect (mapStateToProps, mapDispatchToProps)(AddStudent);

