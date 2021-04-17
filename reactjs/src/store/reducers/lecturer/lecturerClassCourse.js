import { createReducer } from "./../../../utils/redux";
import { GET_LECTURER_CLASSCOURSE_SUCCEED } from "../../../actions/classCourse";

function requestLecturersSuccess(state, lecturer) {
  return lecturer;
}

export default createReducer([], {
  [GET_LECTURER_CLASSCOURSE_SUCCEED]: requestLecturersSuccess,
});
