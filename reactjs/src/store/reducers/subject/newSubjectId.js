import { createReducer } from "./../../../utils/redux";
import { GET_NEW_SUBJECT_ID_SUCCEED } from "../../../actions/educationalProgramDetail";

function requestSubjectSuccess(state, newSubjectId) {
  return newSubjectId;
}

export default createReducer([], {
  [GET_NEW_SUBJECT_ID_SUCCEED]: requestSubjectSuccess,
});
