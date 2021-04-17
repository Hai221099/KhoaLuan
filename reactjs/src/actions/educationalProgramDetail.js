export const GET_EDUCATIONALPROGRAMBYID_START =
  "GET_EDUCATIONALPROGRAMBYID_START";
export const GET_EDUCATIONALPROGRAMBYID_SUCCEED =
  "GET_EDUCATIONALPROGRAMBYID_SUCCEED";
export const GET_EDUCATIONALPROGRAMBYID_FAILED =
  "GET_EDUCATIONALPROGRAMBYID_FAILED";

export const GET_HV_START = "GET_HV_START";
export const GET_HV_SUCCEED = "GET_HV_SUCCEED";
export const GET_HV_FAILED = "GET_HV_FAILED";

export const GET_SUBJECT_START = "GET_SUBJECT_START";
export const GET_SUBJECT_SUCCEED = "GET_SUBJECT_SUCCEED";
export const GET_SUBJECT_FAILED = "GET_SUBJECT_FAILED";

export const GET_TOTAL_SUBJECT_START = "GET_TOTAL_SUBJECT_START";
export const GET_TOTAL_SUBJECT_SUCCEED = "GET_TOTAL_SUBJECT_SUCCEED";
export const GET_TOTAL_SUBJECT_FAILED = "GET_TOTAL_SUBJECT_FAILED";

export const ADD_SUBJECT_START = "ADD_SUBJECT_START";
export const ADD_SUBJECT_SUCCEED = "ADD_SUBJECT_SUCCEED";
export const ADD_SUBJECT_FAILED = "ADD_SUBJECT_FAILED";

export const ADD_SUBJECT_SUBJECTID_START = "ADD_SUBJECT_SUBJECTID_START";
export const ADD_SUBJECT_SUBJECTID_SUCCEED = "ADD_SUBJECT_SUBJECTID_SUCCEED";
export const ADD_SUBJECT_SUBJECTID_FAILED = "ADD_SUBJECT_SUBJECTID_FAILED";

export const GET_SUBJECT_OBLIGATION_START = "GET_SUBJECT_OBLIGATION_START";
export const GET_SUBJECT_OBLIGATION_SUCCEED = "GET_SUBJECT_OBLIGATION_SUCCEED";
export const GET_SUBJECT_OBLIGATION_FAILED = "GET_SUBJECT_OBLIGATION_FAILED";

export const GET_TOTAL_SUBJECT_OBLIGATION_START =
  "GET_TOTAL_SUBJECT_OBLIGATION_START";
export const GET_TOTAL_SUBJECT_OBLIGATION_SUCCEED =
  "GET_TOTAL_SUBJECT_OBLIGATION_SUCCEED";
export const GET_TOTAL_SUBJECT_OBLIGATION_FAILED =
  "GET_TOTAL_SUBJECT_OBLIGATION_FAILED";

export const GET_SUBJECT_SUBJECTID_START = "GET_SUBJECT_SUBJECTID_START";
export const GET_SUBJECT_SUBJECTID_SUCCEED = "GET_SUBJECT_SUBJECTID_SUCCEED";
export const GET_SUBJECT_SUBJECTID_FAILED = "GET_SUBJECT_SUBJECTID_FAILED";

export const GET_NEW_SUBJECT_ID_START = "GET_NEW_SUBJECT_ID_START";
export const GET_NEW_SUBJECT_ID_SUCCEED = "GET_NEW_SUBJECT_ID_SUCCEED";
export const GET_NEW_SUBJECT_ID_FAILED = "GET_NEW_SUBJECT_ID_FAILED";

export const getHV = {
  start: (id) => ({
    type: GET_HV_START,
    payload: id,
  }),
  succeed: (result) => ({
    type: GET_HV_SUCCEED,
    payload: result,
  }),
  fail: (error) => ({
    type: GET_HV_FAILED,
    payload: error,
  }),
};

export const getEducationalProgramById = {
  start: (id) => ({
    type: GET_EDUCATIONALPROGRAMBYID_START,
    payload: id,
  }),
  succeed: (result) => ({
    type: GET_EDUCATIONALPROGRAMBYID_SUCCEED,
    payload: result,
  }),
  fail: (error) => ({
    type: GET_EDUCATIONALPROGRAMBYID_FAILED,
    payload: error,
  }),
};

export const getSubjectById = {
  start: (id) => ({
    type: GET_SUBJECT_START,
    payload: id,
  }),
  succeed: (result) => ({
    type: GET_SUBJECT_SUCCEED,
    payload: result,
  }),
  fail: (error) => ({
    type: GET_SUBJECT_FAILED,
    payload: error,
  }),
};

export const getSubjectObligationById = {
  start: (id) => ({
    type: GET_SUBJECT_OBLIGATION_START,
    payload: id,
  }),
  succeed: (result) => ({
    type: GET_SUBJECT_OBLIGATION_SUCCEED,
    payload: result,
  }),
  fail: (error) => ({
    type: GET_SUBJECT_OBLIGATION_FAILED,
    payload: error,
  }),
};

export const getTotalSubjectObligation = {
  start: () => ({
    type: GET_TOTAL_SUBJECT_OBLIGATION_START,
    payload: {},
  }),
  succeed: (result) => ({
    type: GET_TOTAL_SUBJECT_OBLIGATION_SUCCEED,
    payload: result,
  }),
  fail: (error) => ({
    type: GET_TOTAL_SUBJECT_OBLIGATION_FAILED,
    payload: error,
  }),
};

export const getSubjectSubjectId = {
  start: () => ({
    type: GET_SUBJECT_SUBJECTID_START,
    payload: {},
  }),
  succeed: (result) => ({
    type: GET_SUBJECT_SUBJECTID_SUCCEED,
    payload: result,
  }),
  fail: (error) => ({
    type: GET_SUBJECT_SUBJECTID_FAILED,
    payload: error,
  }),
};

export const getNewSubjectId = {
  start: () => ({
    type: GET_NEW_SUBJECT_ID_START,
    payload: {},
  }),
  succeed: (result) => ({
    type: GET_NEW_SUBJECT_ID_SUCCEED,
    payload: result,
  }),
  fail: (error) => ({
    type: GET_NEW_SUBJECT_ID_FAILED,
    payload: error,
  }),
};

export const getSubjects = {
  start: (id) => ({
    type: GET_TOTAL_SUBJECT_START,
    payload: id,
  }),
  succeed: (result) => ({
    type: GET_TOTAL_SUBJECT_SUCCEED,
    payload: result,
  }),
  fail: (error) => ({
    type: GET_TOTAL_SUBJECT_FAILED,
    payload: error,
  }),
};

export const addSubject = {
  start: (newSubject) => ({
    type: ADD_SUBJECT_START,
    payload: newSubject,
  }),
  succeed: (result) => ({
    type: ADD_SUBJECT_SUCCEED,
    payload: result,
  }),
  fail: (error) => ({
    type: ADD_SUBJECT_FAILED,
    payload: error,
  }),
};
export const addSubjectSubjectId = {
  start: (newSubject) => ({
    type: ADD_SUBJECT_SUBJECTID_START,
    payload: newSubject,
  }),
  succeed: (result) => ({
    type: ADD_SUBJECT_SUBJECTID_SUCCEED,
    payload: result,
  }),
  fail: (error) => ({
    type: ADD_SUBJECT_SUBJECTID_FAILED,
    payload: error,
  }),
};
