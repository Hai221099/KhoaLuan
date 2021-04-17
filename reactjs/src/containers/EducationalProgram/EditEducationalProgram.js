import {connect} from "react-redux";
import { editEducationalProgram } from "../../actions/educationalProgram";
import EditEducationalProgram from '../../components/edits/EditEducationalProgram';

const mapStateToProps = (state) => ({
    EditEducationalProgramState: state.string,
});

const mapDispatchToProps = {
    editEducationalProgramStart: editEducationalProgram.start,
}

export default connect (mapStateToProps, mapDispatchToProps)(EditEducationalProgram);

