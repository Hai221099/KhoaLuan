import { createReducer } from "./../../../utils/redux";
import { LOGIN_SUCCEED } from "../../../actions/user";

function requestLoginSuccess(state, userInfor) {
  return userInfor;
}

export default createReducer([], {
  [LOGIN_SUCCEED]: requestLoginSuccess,
});
