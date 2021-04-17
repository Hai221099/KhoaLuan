export const GET_STUDENT_START = "GET_STUDENT_START";
export const GET_STUDENT_SUCCEED = "GET_STUDENT_SUCCEED";
export const GET_STUDENT_FAILED = "GET_STUDENT_FAILED";

export const ADD_STUDENT_START = "ADD_STUDENT_START";
export const ADD_STUDENT_SUCCEED = "ADD_STUDENT_SUCCEED";
export const ADD_STUDENT_FAILED = "ADD_STUDENT_FAILED";

export const DELETE_STUDENT_START = "DELETE_STUDENT_START";
export const DELETE_STUDENT_SUCCEED = "DELETE_STUDENT_SUCCEED";
export const DELETE_STUDENT_FAILED = "DELETE_STUDENT_FAILED";

export const EDIT_STUDENT_START = "EDIT_STUDENT_START";
export const EDIT_STUDENT_SUCCEED = "EDIT_STUDENT_SUCCEED";
export const EDIT_STUDENT_FAILED = "EDIT_STUDENT_FAILED";



export const getStudents = {
    start: () => ({
        type: GET_STUDENT_START,
        payload: {},
    }),
    succeed: (result) => ({
        type: GET_STUDENT_SUCCEED,
        payload: result
    }),
    fail: (error) => ({
        type: GET_STUDENT_FAILED,
        payload: error
    })
    
}

export const addStudent = {
    start: (newStudent) => ({
        type: ADD_STUDENT_START,
        payload: newStudent,
    }),
    succeed: (result) => ({
        type: ADD_STUDENT_SUCCEED,
        payload: result
    }),
    fail: (error) => ({
        type: ADD_STUDENT_FAILED,
        payload: error
    })
    
}

export const deleteStudent = {
    start: (id) => ({
        type: DELETE_STUDENT_START,
        payload: id,
    }),
    succeed: (result) => ({
        type: DELETE_STUDENT_SUCCEED,
        payload: result,
    }),
    fail: (error) => ({
        type: DELETE_STUDENT_FAILED,
        payload: error,
    })
    
}

export const editStudent = {
    start: (editStudent) => ({
        type: EDIT_STUDENT_START,
        payload: editStudent,
    }),
    succeed: (result) => ({
        type: EDIT_STUDENT_SUCCEED,
        payload: result,
    }),
    fail: (error) => ({
        type: EDIT_STUDENT_FAILED,
        payload: error,
    })
    
}