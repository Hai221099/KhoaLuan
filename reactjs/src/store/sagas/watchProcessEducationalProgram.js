import { call, put, takeLatest } from "redux-saga/effects";
import {
  getEducationalProgramFactory,
  addEducationalProgramFactory,
  deleteEducationalProgramFactory,
  editEducationalProgramFactory,
} from "./../../apis/educationalProgram";
import {
  getEducationalPrograms,
  GET_EDUCATIONALPROGRAM_START,
  addEducationalProgram,
  ADD_EDUCATIONALPROGRAM_START,
  ADD_EDUCATIONALPROGRAM_SUCCEED,
  DELETE_EDUCATIONALPROGRAM_START,
  DELETE_EDUCATIONALPROGRAM_SUCCEED,
  deleteEducationalProgram,
  EDIT_EDUCATIONALPROGRAM_START,
  EDIT_EDUCATIONALPROGRAM_SUCCEED,
  editEducationalProgram,
} from "../../actions/educationalProgram";

function* requestEducationalProgramsSaga(action) {
  try {
    const api = getEducationalProgramFactory();
    const response = yield call(api);
    yield put(getEducationalPrograms.succeed(response.data));
  } catch (error) {
    yield put(getEducationalPrograms.fail(error));
    alert("get educational program failed");
  }
}

function* addEducationalProgramSaga(action) {
  try {
    const api = addEducationalProgramFactory();
    const response = yield call(api, action.payload);
    yield put(addEducationalProgram.succeed(response));
  } catch (exception) {
    yield put(addEducationalProgram.fail(exception));
    alert(exception);
  }
}

function* requestEducationalProgramSagaAfterAdd(action) {
  const api = getEducationalProgramFactory();
  const response = yield call(api);
  yield put(getEducationalPrograms.succeed(response.data));
  alert("Add SuccessFully");
}

function* deleteEducationalProgramSaga(action) {
  try {
    const api = deleteEducationalProgramFactory();
    const response = yield call(api, action.payload);
    yield put(deleteEducationalProgram.succeed(response));
  } catch (exception) {
    yield put(deleteEducationalProgram.fail(exception));
    alert("delete failed, try again");
  }
}

function* requestEducationalProgramSagaAfterDelete(action) {
  const api = getEducationalProgramFactory();
  const response = yield call(api);
  yield put(getEducationalPrograms.succeed(response.data));
  alert("Delete SuccessFully");
}

function* editEducationalProgramSaga(action) {
  // console.log(action.payload)
  try {
    const api = editEducationalProgramFactory();
    const response = yield call(api, action.payload);
    yield put(editEducationalProgram.succeed(response));
  } catch (exception) {
    yield put(editEducationalProgram.fail(exception));
    alert(exception);
  }
}

function* requestEducationalProgramSagaAfterEdit(action) {
  const api = getEducationalProgramFactory();
  const response = yield call(api);
  yield put(getEducationalPrograms.succeed(response.data));
  alert("Edit SuccessFully");
}

export default function* watchProcessEducationalProgram() {
  yield takeLatest(
    GET_EDUCATIONALPROGRAM_START,
    requestEducationalProgramsSaga
  );
  yield takeLatest(ADD_EDUCATIONALPROGRAM_START, addEducationalProgramSaga);
  yield takeLatest(
    ADD_EDUCATIONALPROGRAM_SUCCEED,
    requestEducationalProgramSagaAfterAdd
  );
  yield takeLatest(
    DELETE_EDUCATIONALPROGRAM_START,
    deleteEducationalProgramSaga
  );
  yield takeLatest(
    DELETE_EDUCATIONALPROGRAM_SUCCEED,
    requestEducationalProgramSagaAfterDelete
  );
  yield takeLatest(EDIT_EDUCATIONALPROGRAM_START, editEducationalProgramSaga);
  yield takeLatest(
    EDIT_EDUCATIONALPROGRAM_SUCCEED,
    requestEducationalProgramSagaAfterEdit
  );
}
