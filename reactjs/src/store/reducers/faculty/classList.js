import { createReducer } from "./../../../utils/redux";
import { GET_CLASS_LIST_SUCCEED } from "../../../actions/faculty";

function requestClassListSuccess(state, classList) {
  return classList;
}

export default createReducer([], {
  [GET_CLASS_LIST_SUCCEED]: requestClassListSuccess,
});
