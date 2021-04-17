import { call, put, takeLatest } from "redux-saga/effects";
import {
  getHVFactory,
  getEducationalProgramByIdFactory,
  getSubjectByIdFactory,
  getSubjectsFactory,
  addSubjectFactory,
  getSubjectObligationByIdFactory,
  getTotalSubjectObligationFactory,
  getSubjectSubjectIdFactory,
  getNewIdSubjectFactory,
  addSubjectSubjectIdFactory,
} from "../../apis/educationalProgramDetail";
import {
  getHV,
  GET_HV_START,
  getEducationalProgramById,
  GET_EDUCATIONALPROGRAMBYID_START,
  getSubjectById,
  GET_SUBJECT_START,
  getSubjects,
  GET_TOTAL_SUBJECT_START,
  addSubject,
  ADD_SUBJECT_START,
  ADD_SUBJECT_SUCCEED,
  getSubjectObligationById,
  GET_SUBJECT_OBLIGATION_START,
  getTotalSubjectObligation,
  GET_TOTAL_SUBJECT_OBLIGATION_START,
  getSubjectSubjectId,
  GET_SUBJECT_SUBJECTID_START,
  getNewSubjectId,
  GET_NEW_SUBJECT_ID_START,
  addSubjectSubjectId,
  ADD_SUBJECT_SUBJECTID_START,
} from "../../actions/educationalProgramDetail";

function* requestStudentSaga(action) {
  try {
    const api = getHVFactory();
    const response = yield call(api, action.payload);
    yield put(getHV.succeed(response.data));
  } catch (error) {
    yield put(getHV.fail(error));
    alert("chuong trinh dao tao fail");
  }
}

function* requestEducationalProgramSaga(action) {
  try {
    const api = getEducationalProgramByIdFactory();
    const response = yield call(api, action.payload);
    yield put(getEducationalProgramById.succeed(response.data));
  } catch (error) {
    yield put(getEducationalProgramById.fail(error));
    alert("chuong trinh dao tao fail");
  }
}

function* requestSubjectSaga(action) {
  try {
    const api = getSubjectByIdFactory();
    const response = yield call(api, action.payload);
    yield put(getSubjectById.succeed(response));
  } catch (error) {
    yield put(getSubjectById.fail(error));
    alert("chuong trinh dao tao fail");
  }
}

function* requestSubjectObligationSaga(action) {
  try {
    const api = getSubjectObligationByIdFactory();
    const response = yield call(api, action.payload);
    yield put(getSubjectObligationById.succeed(response));
  } catch (error) {
    yield put(getSubjectObligationById.fail(error));
    alert("chuong trinh dao tao fail");
  }
}

function* requestTotalSubjectsObligationSaga(action) {
  try {
    const api = getTotalSubjectObligationFactory();
    const response = yield call(api);
    yield put(getTotalSubjectObligation.succeed(response));
  } catch (error) {
    yield put(getTotalSubjectObligation.fail(error));
    alert("chuong trinh dao tao fail");
  }
}

function* requestTotalSubjectSaga(action) {
  try {
    const api = getSubjectsFactory();
    const response = yield call(api);
    yield put(getSubjects.succeed(response.data));
  } catch (error) {
    yield put(getSubjects.fail(error));
    alert("get Subject failed");
  }
}

function* requestSubjectSubjectIdSaga(action) {
  try {
    const api = getSubjectSubjectIdFactory();
    const response = yield call(api);
    yield put(getSubjectSubjectId.succeed(response.data));
  } catch (error) {
    yield put(getSubjectSubjectId.fail(error));
    alert("get Subject SubjectId failed");
  }
}

function* requestNewSubjectIdSaga(action) {
  try {
    const api = getNewIdSubjectFactory();
    const response = yield call(api);
    yield put(getNewSubjectId.succeed(response));
  } catch (error) {
    yield put(getNewSubjectId.fail(error));
    alert("get new subject ID failed");
  }
}

function* addSubjectSaga(action) {
  try {
    const api = addSubjectFactory();
    const response = yield call(api, action.payload);
    yield put(addSubject.succeed(response));
  } catch (exception) {
    yield put(addSubject.fail(exception));
    alert(exception);
  }
}

function* addSubjectSubjectIdSaga(action) {
  try {
    const api = addSubjectSubjectIdFactory();
    const response = yield call(api, action.payload);
    yield put(addSubjectSubjectId.succeed(response));
  } catch (exception) {
    yield put(addSubjectSubjectId.fail(exception));
    alert(exception);
  }
}

function* requestSubjectSagaAfterAdd(action) {
  alert("Add SuccessFully");
}

export default function* watchProcessEducationalProgramDetail() {
  yield takeLatest(GET_HV_START, requestStudentSaga);
  yield takeLatest(
    GET_EDUCATIONALPROGRAMBYID_START,
    requestEducationalProgramSaga
  );
  yield takeLatest(GET_SUBJECT_START, requestSubjectSaga);
  yield takeLatest(GET_TOTAL_SUBJECT_START, requestTotalSubjectSaga);
  yield takeLatest(GET_NEW_SUBJECT_ID_START, requestNewSubjectIdSaga);
  yield takeLatest(GET_SUBJECT_OBLIGATION_START, requestSubjectObligationSaga);
  yield takeLatest(GET_SUBJECT_SUBJECTID_START, requestSubjectSubjectIdSaga);
  yield takeLatest(
    GET_TOTAL_SUBJECT_OBLIGATION_START,
    requestTotalSubjectsObligationSaga
  );
  yield takeLatest(ADD_SUBJECT_START, addSubjectSaga);
  yield takeLatest(ADD_SUBJECT_SUCCEED, requestNewSubjectIdSaga);
  yield takeLatest(ADD_SUBJECT_SUBJECTID_START, addSubjectSubjectIdSaga);
}
