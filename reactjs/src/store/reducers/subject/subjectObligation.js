import { createReducer } from "./../../../utils/redux";
import { GET_SUBJECT_OBLIGATION_SUCCEED } from "../../../actions/educationalProgramDetail";

function requestSubjectSuccess(state, subjectObligation) {
  return subjectObligation;
}

export default createReducer([], {
  [GET_SUBJECT_OBLIGATION_SUCCEED]: requestSubjectSuccess,
});
