export const GET_FACULTY_START = "GET_FACULTY_START";
export const GET_FACULTY_SUCCEED = "GET_FACULTY_SUCCEED";
export const GET_FACULTY_FAILED = "GET_FACULTY_FAILED";

export const ADD_FACULTY_START = "ADD_FACULTY_START";
export const ADD_FACULTY_SUCCEED = "ADD_FACULTY_SUCCEED";
export const ADD_FACULTY_FAILED = "ADD_FACULTY_FAILED";

export const EDIT_FACULTY_START = "EDIT_FACULTY_START";
export const EDIT_FACULTY_SUCCEED = "EDIT_FACULTY_SUCCEED";
export const EDIT_FACULTY_FAILED = "EDIT_FACULTY_FAILED";

export const GET_FACULTY_BY_ID_START = "GET_FACULTY_BY_ID_START";
export const GET_FACULTY_BY_ID_SUCCEED = "GET_FACULTY_BY_ID_SUCCEED";
export const GET_FACULTY_BY_ID_FAILED = "GET_FACULTY_BY_ID_FAILED";

export const GET_CLASS_LIST_START = "GET_CLASS_LIST_START";
export const GET_CLASS_LIST_SUCCEED = "GET_CLASS_LIST_SUCCEED";
export const GET_CLASS_LIST_FAILED = "GET_CLASS_LIST_FAILED";

export const getFaculties = {
  start: () => ({
    type: GET_FACULTY_START,
    payload: {},
  }),
  succeed: (result) => ({
    type: GET_FACULTY_SUCCEED,
    payload: result,
  }),
  fail: (error) => ({
    type: GET_FACULTY_FAILED,
    payload: error,
  }),
};

export const addFaculty = {
  start: (newFaculty) => ({
    type: ADD_FACULTY_START,
    payload: newFaculty,
  }),
  succeed: (result) => ({
    type: ADD_FACULTY_SUCCEED,
    payload: result,
  }),
  fail: (error) => ({
    type: ADD_FACULTY_FAILED,
    payload: error,
  }),
};

export const editFaculty = {
  start: (editFaculty) => ({
    type: EDIT_FACULTY_START,
    payload: editFaculty,
  }),
  succeed: (result) => ({
    type: EDIT_FACULTY_SUCCEED,
    payload: result,
  }),
  fail: (error) => ({
    type: EDIT_FACULTY_FAILED,
    payload: error,
  }),
};

export const getFacultyById = {
  start: (id) => ({
    type: GET_FACULTY_BY_ID_START,
    payload: id,
  }),
  succeed: (result) => ({
    type: GET_FACULTY_BY_ID_SUCCEED,
    payload: result,
  }),
  fail: (error) => ({
    type: GET_FACULTY_BY_ID_FAILED,
    payload: error,
  }),
};

export const getClassById = {
  start: (id) => ({
    type: GET_CLASS_LIST_START,
    payload: id,
  }),
  succeed: (result) => ({
    type: GET_CLASS_LIST_SUCCEED,
    payload: result,
  }),
  fail: (error) => ({
    type: GET_CLASS_LIST_FAILED,
    payload: error,
  }),
};
