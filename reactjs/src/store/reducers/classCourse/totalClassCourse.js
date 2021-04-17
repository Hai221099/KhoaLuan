import { createReducer } from "./../../../utils/redux";
import { GET_TOTAL_CLASSCOURSE_SUCCEED } from "../../../actions/classCourse";

function requestClassCourseSuccess(state, totalClassCourse) {
  return totalClassCourse;
}

export default createReducer([], {
  [GET_TOTAL_CLASSCOURSE_SUCCEED]: requestClassCourseSuccess,
});
