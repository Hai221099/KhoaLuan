import { call, put, takeLatest } from "redux-saga/effects";
import {
  getFacultyFactory,
  getFacultyByIdFactory,
  getClassListFactory,
  addFacultyFactory,
  editFacultyFactory,
} from "../../apis/faculty";
import {
  getFaculties,
  GET_FACULTY_START,
  getFacultyById,
  GET_FACULTY_BY_ID_START,
  getClassById,
  GET_CLASS_LIST_START,
  addFaculty,
  ADD_FACULTY_START,
  ADD_FACULTY_SUCCEED,
  editFaculty,
  EDIT_FACULTY_START,
  EDIT_FACULTY_SUCCEED,
} from "../../actions/faculty";

function* requestFacultiesSaga(action) {
  try {
    const api = getFacultyFactory();
    const response = yield call(api);
    yield put(getFaculties.succeed(response.data));
  } catch (error) {
    yield put(getFaculties.fail(error));
    alert("get faculties failed");
  }
}

function* addFacultySaga(action) {
  try {
    const api = addFacultyFactory();
    const response = yield call(api, action.payload);
    yield put(addFaculty.succeed(response));
  } catch (exception) {
    yield put(addFaculty.fail(exception));
    alert(exception);
  }
}

function* requestFacultySagaAfterAdd(action) {
  const api = getFacultyFactory();
  const response = yield call(api);
  yield put(getFaculties.succeed(response.data));
  alert("Add SuccessFully");
}

function* editFacultySaga(action) {
  try {
    const api = editFacultyFactory();
    const response = yield call(api, action.payload);
    yield put(editFaculty.succeed(response));
  } catch (exception) {
    yield put(editFaculty.fail(exception));
    alert(exception);
  }
}

function* requestFacultySagaAfterEdit(action) {
  const api = getFacultyFactory();
  const response = yield call(api);
  yield put(getFaculties.succeed(response.data));
  alert("Edit SuccessFully");
}

function* requestFacultyByIdSaga(action) {
  try {
    const api = getFacultyByIdFactory();
    const response = yield call(api, action.payload);
    yield put(getFacultyById.succeed(response.data));
  } catch (error) {
    yield put(getFacultyById.fail(error));
    alert("get faculty failed");
  }
}

function* requestClassListSaga(action) {
  try {
    const api = getClassListFactory();
    const response = yield call(api, action.payload);
    yield put(getClassById.succeed(response.data));
  } catch (error) {
    yield put(getClassById.fail(error));
    // alert("get faculty failed");
  }
}

export default function* watchProcessFaculty() {
  yield takeLatest(GET_FACULTY_START, requestFacultiesSaga);
  yield takeLatest(GET_FACULTY_BY_ID_START, requestFacultyByIdSaga);
  yield takeLatest(GET_CLASS_LIST_START, requestClassListSaga);
  yield takeLatest(ADD_FACULTY_START, addFacultySaga);
  yield takeLatest(ADD_FACULTY_SUCCEED, requestFacultySagaAfterAdd);
  yield takeLatest(EDIT_FACULTY_START, editFacultySaga);
  yield takeLatest(EDIT_FACULTY_SUCCEED, requestFacultySagaAfterEdit);
}
