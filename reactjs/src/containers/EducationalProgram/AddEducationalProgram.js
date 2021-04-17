import {connect} from "react-redux";
import { addEducationalProgram } from "../../actions/educationalProgram";
import AddEducationalProgram from '../../components/adds/AddEducationalProgram';

const mapStateToProps = (state) => ({
    AddEducationalProgramState: state.string,
});

const mapDispatchToProps = {
    addEducationalProgramStart: addEducationalProgram.start,
}

export default connect (mapStateToProps, mapDispatchToProps)(AddEducationalProgram);

