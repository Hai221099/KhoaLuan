import { createReducer } from "./../../../utils/redux";
import { GET_SUBJECT_SUCCEED } from "../../../actions/educationalProgramDetail";

function requestSubjectSuccess(state, subject) {
  return subject;
}

export default createReducer([], {
  [GET_SUBJECT_SUCCEED]: requestSubjectSuccess,
});
