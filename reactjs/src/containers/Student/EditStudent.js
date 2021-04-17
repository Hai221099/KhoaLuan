import {connect} from "react-redux";
import { editStudent } from "../../actions/student";
import EditStudent from '../../components/edits/EditStudent';

const mapStateToProps = (state) => ({
    EditStudentState: state.string,
});

const mapDispatchToProps = {
    editStudentStart: editStudent.start,
}

export default connect (mapStateToProps, mapDispatchToProps)(EditStudent);

