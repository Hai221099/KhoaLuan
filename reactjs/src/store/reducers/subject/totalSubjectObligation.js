import { createReducer } from "./../../../utils/redux";
import { GET_TOTAL_SUBJECT_OBLIGATION_SUCCEED } from "../../../actions/educationalProgramDetail";

function requestSubjectSuccess(state, totalSubjectObligation) {
  return totalSubjectObligation;
}

export default createReducer([], {
  [GET_TOTAL_SUBJECT_OBLIGATION_SUCCEED]: requestSubjectSuccess,
});
