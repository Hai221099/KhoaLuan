import {connect} from "react-redux";
import { deleteEducationalProgram } from "../../actions/educationalProgram";
import DeleteEducationalProgram from '../../components/deletes/DeleteEducationalProgram';

const mapStateToProps = (state) => ({
    DeleteEducationalProgramState: state.string,
});

const mapDispatchToProps = {
    deleteEducationalProgramStart: deleteEducationalProgram.start,
}

export default connect (mapStateToProps, mapDispatchToProps)(DeleteEducationalProgram);

