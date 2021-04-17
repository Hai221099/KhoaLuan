import { createReducer } from "./../../../utils/redux";
import { GET_HV_SUCCEED } from "../../../actions/educationalProgramDetail";

function requestStudentSuccess(state, studentDetail) {
  return studentDetail;
}

export default createReducer([], {
  [GET_HV_SUCCEED]: requestStudentSuccess,
});
