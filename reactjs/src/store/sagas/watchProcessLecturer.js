import { call, put, takeLatest } from "redux-saga/effects";
import {
  getLecturerFactory,
  addLecturerFactory,
  deleteLecturerFactory,
  editLecturerFactory,
} from "./../../apis/lecturer";
import {
  getLecturers,
  GET_LECTURER_START,
  addLecturer,
  ADD_LECTURER_START,
  ADD_LECTURER_SUCCEED,
  DELETE_LECTURER_START,
  DELETE_LECTURER_SUCCEED,
  deleteLecturer,
  EDIT_LECTURER_START,
  EDIT_LECTURER_SUCCEED,
  editLecturer,
} from "../../actions/lecturer";

function* requestLecturersSaga(action) {
  try {
    const api = getLecturerFactory();
    const response = yield call(api);
    yield put(getLecturers.succeed(response.data));
  } catch (error) {
    yield put(getLecturers.fail(error));
    alert("get Student failed");
  }
}

function* addLecturerSaga(action) {
  try {
    const api = addLecturerFactory();
    const response = yield call(api, action.payload);
    yield put(addLecturer.succeed(response));
  } catch (exception) {
    yield put(addLecturer.fail(exception));
    alert(exception);
  }
}

function* requestLecturerSagaAfterAdd(action) {
  const api = getLecturerFactory();
  const response = yield call(api);
  yield put(getLecturers.succeed(response.data));
  alert("Add SuccessFully");
}

function* deleteLecturerSaga(action) {
  try {
    const api = deleteLecturerFactory();
    const response = yield call(api, action.payload);
    console.log(action.payload);
    yield put(deleteLecturer.succeed(response));
  } catch (exception) {
    yield put(deleteLecturer.fail(exception));
    alert("delete failed, try again");
  }
}

function* requestLecturerSagaAfterDelete(action) {
  const api = getLecturerFactory();
  const response = yield call(api);
  yield put(getLecturers.succeed(response.data));
  alert("Delete SuccessFully");
}

function* editLecturerSaga(action) {
  // console.log(action.payload)
  try {
    const api = editLecturerFactory();
    const response = yield call(api, action.payload);
    yield put(editLecturer.succeed(response));
  } catch (exception) {
    yield put(editLecturer.fail(exception));
    alert(exception);
  }
}

function* requestLecturerSagaAfterEdit(action) {
  const api = getLecturerFactory();
  const response = yield call(api);
  yield put(getLecturers.succeed(response.data));
  alert("Edit SuccessFully");
}

export default function* watchProcessLecturer() {
  yield takeLatest(GET_LECTURER_START, requestLecturersSaga);
  yield takeLatest(ADD_LECTURER_START, addLecturerSaga);
  yield takeLatest(ADD_LECTURER_SUCCEED, requestLecturerSagaAfterAdd);
  yield takeLatest(DELETE_LECTURER_START, deleteLecturerSaga);
  yield takeLatest(DELETE_LECTURER_SUCCEED, requestLecturerSagaAfterDelete);
  yield takeLatest(EDIT_LECTURER_START, editLecturerSaga);
  yield takeLatest(EDIT_LECTURER_SUCCEED, requestLecturerSagaAfterEdit);
}
