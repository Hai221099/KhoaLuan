import { all, fork } from "redux-saga/effects";
import watchProcessEducationalProgram from "./watchProcessEducationalProgram";
import watchProcessEducationalProgramDetail from "./watchProcessEducationalProgramDetail";
import watchProcessStudent from "./watchProcessStudent";
import watchProcessLecturer from "./watchProcessLecturer";
import watchProcessLecturerClassCourse from "./watchProcessLecturerClassCourse";
import watchProcessFaculty from "./watchProcessFaculty";
import watchProcessUser from "./watchProcessUser";
function* rootSaga() {
  yield all([
    fork(watchProcessEducationalProgram),
    fork(watchProcessStudent),
    fork(watchProcessEducationalProgramDetail),
    fork(watchProcessLecturer),
    fork(watchProcessLecturerClassCourse),
    fork(watchProcessFaculty),
    fork(watchProcessUser),
  ]);
}

export default rootSaga;
