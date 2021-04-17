import { call, put, takeLatest } from "redux-saga/effects";
import { getStudentFactory , addStudentFactory , deleteStudentFactory , editStudentFactory} from "./../../apis/student"
import { getStudents , GET_STUDENT_START, addStudent , ADD_STUDENT_START, ADD_STUDENT_SUCCEED , DELETE_STUDENT_START , DELETE_STUDENT_SUCCEED, deleteStudent  , EDIT_STUDENT_START , EDIT_STUDENT_SUCCEED , editStudent } from "../../actions/student"


function* requestStudentsSaga(action) {
        try {
        const api = getStudentFactory();
        const response = yield call(api);
        yield put(getStudents.succeed(response.data));
   }
   catch (error) {
       yield put(getStudents.fail(error));
       alert('get Student failed')
   }
}

function* addStudentSaga(action) {
    try {
        const api = addStudentFactory();
        const response = yield call(api, action.payload);
        yield put (addStudent.succeed(response));
    } catch (exception) {
        yield put(addStudent.fail(exception))
        alert(exception)
    }
}

function* requestStudentSagaAfterAdd (action) {
    const api = getStudentFactory();
    const response = yield call(api);
    yield put(getStudents.succeed(response.data));
    alert ('Add SuccessFully')
} 

function* deleteStudentSaga(action) {
    try {
        const api = deleteStudentFactory();
        const response = yield call(api, action.payload);
        console.log(action.payload)
        yield put(deleteStudent.succeed(response));
    }   catch(exception) {
        yield put(deleteStudent.fail(exception));
        alert('delete failed, try again')
    }
}

function* requestStudentSagaAfterDelete (action) {
    const api = getStudentFactory();
    const response = yield call(api);
    yield put(getStudents.succeed(response.data));
    alert ('Delete SuccessFully')
} 

function* editStudentSaga(action) {
    // console.log(action.payload)
    try {
        const api = editStudentFactory();
        const response = yield call(api, action.payload);
        yield put(editStudent.succeed(response));
    }   catch(exception) {
        yield put(editStudent.fail(exception));
        alert(exception)
    }
}

function* requestStudentSagaAfterEdit (action) {
    const api = getStudentFactory();
    const response = yield call(api);
    yield put(getStudents.succeed(response.data));
    alert ('Edit SuccessFully')
} 

export default function* watchProcessStudent() {
    yield takeLatest(GET_STUDENT_START, requestStudentsSaga);
    yield takeLatest(ADD_STUDENT_START, addStudentSaga);
    yield takeLatest(ADD_STUDENT_SUCCEED, requestStudentSagaAfterAdd);
    yield takeLatest(DELETE_STUDENT_START, deleteStudentSaga);
    yield takeLatest(DELETE_STUDENT_SUCCEED, requestStudentSagaAfterDelete);
    yield takeLatest(EDIT_STUDENT_START , editStudentSaga);
    yield takeLatest(EDIT_STUDENT_SUCCEED, requestStudentSagaAfterEdit);
}