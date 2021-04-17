export const GET_LECTURER_START = "GET_LECTURER_START";
export const GET_LECTURER_SUCCEED = "GET_LECTURER_SUCCEED";
export const GET_LECTURER_FAILED = "GET_LECTURER_FAILED";

export const ADD_LECTURER_START = "ADD_LECTURER_START";
export const ADD_LECTURER_SUCCEED = "ADD_LECTURER_SUCCEED";
export const ADD_LECTURER_FAILED = "ADD_LECTURER_FAILED";

export const DELETE_LECTURER_START = "DELETE_LECTURER_START";
export const DELETE_LECTURER_SUCCEED = "DELETE_LECTURER_SUCCEED";
export const DELETE_LECTURER_FAILED = "DELETE_LECTURER_FAILED";

export const EDIT_LECTURER_START = "EDIT_LECTURER_START";
export const EDIT_LECTURER_SUCCEED = "EDIT_LECTURER_SUCCEED";
export const EDIT_LECTURER_FAILED = "EDIT_LECTURER_FAILED";

export const getLecturers = {
  start: () => ({
    type: GET_LECTURER_START,
    payload: {},
  }),
  succeed: (result) => ({
    type: GET_LECTURER_SUCCEED,
    payload: result,
  }),
  fail: (error) => ({
    type: GET_LECTURER_FAILED,
    payload: error,
  }),
};

export const addLecturer = {
  start: (newLecturer) => ({
    type: ADD_LECTURER_START,
    payload: newLecturer,
  }),
  succeed: (result) => ({
    type: ADD_LECTURER_SUCCEED,
    payload: result,
  }),
  fail: (error) => ({
    type: ADD_LECTURER_FAILED,
    payload: error,
  }),
};

export const deleteLecturer = {
  start: (id) => ({
    type: DELETE_LECTURER_START,
    payload: id,
  }),
  succeed: (result) => ({
    type: DELETE_LECTURER_SUCCEED,
    payload: result,
  }),
  fail: (error) => ({
    type: DELETE_LECTURER_FAILED,
    payload: error,
  }),
};

export const editLecturer = {
  start: (editLecturer) => ({
    type: EDIT_LECTURER_START,
    payload: editLecturer,
  }),
  succeed: (result) => ({
    type: EDIT_LECTURER_SUCCEED,
    payload: result,
  }),
  fail: (error) => ({
    type: EDIT_LECTURER_FAILED,
    payload: error,
  }),
};
