import { call, put, takeLatest } from "redux-saga/effects";
import {
  getLecturerClassCourseFactory,
  getClassCourseFactory,
  getStudentClassCourseFactory,
  getTotalClassCourseFactory,
} from "../../apis/classCourse";
import {
  getLecturerClassCourse,
  GET_LECTURER_CLASSCOURSE_START,
  getClassCourse,
  GET_CLASSCOURSE_START,
  getStudentClassCourse,
  GET_STUDENT_CLASSCOURSE_START,
  getTotalClassCourse,
  GET_TOTAL_CLASSCOURSE_START,
} from "../../actions/classCourse";

function* requestLecturerSaga(action) {
  try {
    const api = getLecturerClassCourseFactory();
    const response = yield call(api, action.payload);
    yield put(getLecturerClassCourse.succeed(response.data));
    console.log("123");
  } catch (error) {
    yield put(getLecturerClassCourse.fail(error));
    alert("Khong lay duoc thong tin giang vien");
  }
}

function* requestStudentSaga(action) {
  try {
    const api = getStudentClassCourseFactory();
    const response = yield call(api, action.payload);
    yield put(getStudentClassCourse.succeed(response.data));
  } catch (error) {
    yield put(getStudentClassCourse.fail(error));
    // alert("Khong lay duoc thong tin sinh vien");
  }
}

function* requestClassCourseSaga(action) {
  try {
    const api = getClassCourseFactory();
    const response = yield call(api, action.payload);
    yield put(getClassCourse.succeed(response));
  } catch (error) {
    yield put(getClassCourse.fail(error));
    alert("Khong lay duoc thong tin lop hoc");
  }
}

function* requestTotalClassCourseSaga(action) {
  try {
    const api = getTotalClassCourseFactory();
    const response = yield call(api);
    yield put(getTotalClassCourse.succeed(response.data));
  } catch (error) {
    yield put(getTotalClassCourse.fail(error));
    alert("Khong lay duoc danh sach lop hoc");
  }
}

export default function* watchProcessLecturerClassCourse() {
  yield takeLatest(GET_LECTURER_CLASSCOURSE_START, requestLecturerSaga);
  yield takeLatest(GET_CLASSCOURSE_START, requestClassCourseSaga);
  yield takeLatest(GET_STUDENT_CLASSCOURSE_START, requestStudentSaga);
  yield takeLatest(GET_TOTAL_CLASSCOURSE_START, requestTotalClassCourseSaga);
}
