import { createReducer } from "./../../../utils/redux";
import { GET_FACULTY_BY_ID_SUCCEED } from "../../../actions/faculty";

function requestFacultySuccess(state, faculty) {
  return faculty;
}

export default createReducer([], {
  [GET_FACULTY_BY_ID_SUCCEED]: requestFacultySuccess,
});
