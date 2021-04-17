export const GET_LECTURER_CLASSCOURSE_START = "GET_LECTURER_CLASSCOURSE_START";
export const GET_LECTURER_CLASSCOURSE_SUCCEED =
  "GET_LECTURER_CLASSCOURSE_SUCCEED";
export const GET_LECTURER_CLASSCOURSE_FAILED =
  "GET_LECTURER_CLASSCOURSE_FAILED";

export const GET_CLASSCOURSE_START = "GET_CLASSCOURSE_START";
export const GET_CLASSCOURSE_SUCCEED = "GET_CLASSCOURSE_SUCCEED";
export const GET_CLASSCOURSE_FAILED = "GET_CLASSCOURSE_FAILED";

export const GET_TOTAL_CLASSCOURSE_START = "GET_TOTAL_CLASSCOURSE_START";
export const GET_TOTAL_CLASSCOURSE_SUCCEED = "GET_TOTAL_CLASSCOURSE_SUCCEED";
export const GET_TOTAL_CLASSCOURSE_FAILED = "GET_TOTAL_CLASSCOURSE_FAILED";

export const GET_STUDENT_CLASSCOURSE_START = "GET_STUDENT_CLASSCOURSE_START";
export const GET_STUDENT_CLASSCOURSE_SUCCEED =
  "GET_STUDENT_CLASSCOURSE_SUCCEED";
export const GET_STUDENT_CLASSCOURSE_FAILED = "GET_STUDENT_CLASSCOURSE_FAILED";

export const getLecturerClassCourse = {
  start: (id) => ({
    type: GET_LECTURER_CLASSCOURSE_START,
    payload: id,
  }),
  succeed: (result) => ({
    type: GET_LECTURER_CLASSCOURSE_SUCCEED,
    payload: result,
  }),
  fail: (error) => ({
    type: GET_LECTURER_CLASSCOURSE_FAILED,
    payload: error,
  }),
};

export const getClassCourse = {
  start: (id) => ({
    type: GET_CLASSCOURSE_START,
    payload: id,
  }),
  succeed: (result) => ({
    type: GET_CLASSCOURSE_SUCCEED,
    payload: result,
  }),
  fail: (error) => ({
    type: GET_CLASSCOURSE_FAILED,
    payload: error,
  }),
};

export const getTotalClassCourse = {
  start: () => ({
    type: GET_TOTAL_CLASSCOURSE_START,
    payload: {},
  }),
  succeed: (result) => ({
    type: GET_TOTAL_CLASSCOURSE_SUCCEED,
    payload: result,
  }),
  fail: (error) => ({
    type: GET_TOTAL_CLASSCOURSE_FAILED,
    payload: error,
  }),
};

export const getStudentClassCourse = {
  start: (id) => ({
    type: GET_STUDENT_CLASSCOURSE_START,
    payload: id,
  }),
  succeed: (result) => ({
    type: GET_STUDENT_CLASSCOURSE_SUCCEED,
    payload: result,
  }),
  fail: (error) => ({
    type: GET_STUDENT_CLASSCOURSE_FAILED,
    payload: error,
  }),
};
