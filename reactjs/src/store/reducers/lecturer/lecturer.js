import { createReducer } from "./../../../utils/redux";
import { GET_LECTURER_SUCCEED } from "../../../actions/lecturer";

function requestLecturersSuccess(state, lecturer) {
  return lecturer;
}

export default createReducer([], {
  [GET_LECTURER_SUCCEED]: requestLecturersSuccess,
});
