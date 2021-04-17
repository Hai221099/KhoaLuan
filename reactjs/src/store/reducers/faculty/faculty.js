import { createReducer } from "./../../../utils/redux";
import { GET_FACULTY_SUCCEED } from "../../../actions/faculty";

function requestFacultiesSuccess(state, faculty) {
  return faculty;
}

export default createReducer([], {
  [GET_FACULTY_SUCCEED]: requestFacultiesSuccess,
});
