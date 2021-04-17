import { call, put, takeLatest } from "redux-saga/effects";
import { loginFactory } from "../../apis/user";
import { LOGIN_START, login } from "../../actions/user";

function* loginSaga(action) {
  try {
    const api = loginFactory();
    const response = yield call(api, action.payload);
    yield put(login.succeed(response));
    // localStorage.setItem("token", response);
    console.log(response);
  } catch (exception) {
    yield put(login.fail(exception));
    alert(exception);
  }
}

export default function* watchProcessUser() {
  yield takeLatest(LOGIN_START, loginSaga);
}
