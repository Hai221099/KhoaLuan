import { createReducer } from "./../../../utils/redux";
import { GET_STUDENT_SUCCEED } from "../../../actions/student";

function requestStudentsSuccess(state, student) {
  return student;
}

export default createReducer([], {
  [GET_STUDENT_SUCCEED]: requestStudentsSuccess,
});
