import { createReducer } from "./../../../utils/redux";
import { GET_EDUCATIONALPROGRAMBYID_SUCCEED } from "../../../actions/educationalProgramDetail";

function requestEducationalProgramSuccess(state, educationalProgramDetail) {
  return educationalProgramDetail;
}

export default createReducer([], {
  [GET_EDUCATIONALPROGRAMBYID_SUCCEED]: requestEducationalProgramSuccess,
});
