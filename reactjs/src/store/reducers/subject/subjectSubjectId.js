import { createReducer } from "./../../../utils/redux";
import { GET_SUBJECT_SUBJECTID_SUCCEED } from "../../../actions/educationalProgramDetail";

function requestSubjectSuccess(state, subjectSubjectId) {
  return subjectSubjectId;
}

export default createReducer([], {
  [GET_SUBJECT_SUBJECTID_SUCCEED]: requestSubjectSuccess,
});
