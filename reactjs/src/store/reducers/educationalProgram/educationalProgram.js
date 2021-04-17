import { createReducer } from "./../../../utils/redux";
import { GET_EDUCATIONALPROGRAM_SUCCEED } from "../../../actions/educationalProgram";

function requestEducationalProgramsSuccess(state, educationalProgram) {
  return educationalProgram;
}

export default createReducer([], {
  [GET_EDUCATIONALPROGRAM_SUCCEED]: requestEducationalProgramsSuccess,
});
