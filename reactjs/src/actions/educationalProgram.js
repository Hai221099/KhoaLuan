export const GET_EDUCATIONALPROGRAM_START = "GET_EDUCATIONALPROGRAM_START";
export const GET_EDUCATIONALPROGRAM_SUCCEED = "GET_EDUCATIONALPROGRAM_SUCCEED";
export const GET_EDUCATIONALPROGRAM_FAILED = "GET_EDUCATIONALPROGRAM_FAILED";

export const ADD_EDUCATIONALPROGRAM_START = "ADD_EDUCATIONALPROGRAM_START";
export const ADD_EDUCATIONALPROGRAM_SUCCEED = "ADD_EDUCATIONALPROGRAM_SUCCEED";
export const ADD_EDUCATIONALPROGRAM_FAILED = "ADD_EDUCATIONALPROGRAM_FAILED";

export const DELETE_EDUCATIONALPROGRAM_START = "DELETE_EDUCATIONALPROGRAM_START";
export const DELETE_EDUCATIONALPROGRAM_SUCCEED = "DELETE_EDUCATIONALPROGRAM_SUCCEED";
export const DELETE_EDUCATIONALPROGRAM_FAILED = "DELETE_EDUCATIONALPROGRAM_FAILED";

export const EDIT_EDUCATIONALPROGRAM_START = "EDIT_EDUCATIONALPROGRAM_START";
export const EDIT_EDUCATIONALPROGRAM_SUCCEED = "EDIT_EDUCATIONALPROGRAM_SUCCEED";
export const EDIT_EDUCATIONALPROGRAM_FAILED = "EDIT_EDUCATIONALPROGRAM_FAILED";



export const getEducationalPrograms = {
    start: () => ({
        type: GET_EDUCATIONALPROGRAM_START,
        payload: {},
    }),
    succeed: (result) => ({
        type: GET_EDUCATIONALPROGRAM_SUCCEED,
        payload: result
    }),
    fail: (error) => ({
        type: GET_EDUCATIONALPROGRAM_FAILED,
        payload: error
    })
    
}

export const addEducationalProgram = {
    start: (newEducationalProgram) => ({
        type: ADD_EDUCATIONALPROGRAM_START,
        payload: newEducationalProgram,
    }),
    succeed: (result) => ({
        type: ADD_EDUCATIONALPROGRAM_SUCCEED,
        payload: result
    }),
    fail: (error) => ({
        type: ADD_EDUCATIONALPROGRAM_FAILED,
        payload: error
    })
    
}

export const deleteEducationalProgram = {
    start: (id) => ({
        type: DELETE_EDUCATIONALPROGRAM_START,
        payload: id,
    }),
    succeed: (result) => ({
        type: DELETE_EDUCATIONALPROGRAM_SUCCEED,
        payload: result,
    }),
    fail: (error) => ({
        type: DELETE_EDUCATIONALPROGRAM_FAILED,
        payload: error,
    })
    
}

export const editEducationalProgram = {
    start: (editEducationalProgram) => ({
        type: EDIT_EDUCATIONALPROGRAM_START,
        payload: editEducationalProgram,
    }),
    succeed: (result) => ({
        type: EDIT_EDUCATIONALPROGRAM_SUCCEED,
        payload: result,
    }),
    fail: (error) => ({
        type: EDIT_EDUCATIONALPROGRAM_FAILED,
        payload: error,
    })
    
}