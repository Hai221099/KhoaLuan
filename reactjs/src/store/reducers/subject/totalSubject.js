import { createReducer } from "./../../../utils/redux";
import { GET_TOTAL_SUBJECT_SUCCEED } from "../../../actions/educationalProgramDetail";

function requestSubjectSuccess(state, totalSubjects) {
  return totalSubjects;
}

export default createReducer([], {
  [GET_TOTAL_SUBJECT_SUCCEED]: requestSubjectSuccess,
});
