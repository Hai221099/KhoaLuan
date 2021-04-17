import { createReducer } from "./../../../utils/redux";
import { GET_STUDENT_CLASSCOURSE_SUCCEED } from "../../../actions/classCourse";

function requestStudentsSuccess(state, student) {
  return student;
}

export default createReducer([], {
  [GET_STUDENT_CLASSCOURSE_SUCCEED]: requestStudentsSuccess,
});
