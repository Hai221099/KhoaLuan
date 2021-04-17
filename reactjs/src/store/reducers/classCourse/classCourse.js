import { createReducer } from "./../../../utils/redux";
import { GET_CLASSCOURSE_SUCCEED } from "../../../actions/classCourse";

function requestClassCourseSuccess(state, classCourse) {
  return classCourse;
}

export default createReducer([], {
  [GET_CLASSCOURSE_SUCCEED]: requestClassCourseSuccess,
});
