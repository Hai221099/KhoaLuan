export const LOGIN_START = "LOGIN_START";
export const LOGIN_SUCCEED = "LOGIN_SUCCEED";
export const LOGIN_FAILED = "LOGIN_FAILED";

export const login = {
  start: (user) => ({
    type: LOGIN_START,
    payload: user,
  }),
  succeed: (result) => ({
    type: LOGIN_SUCCEED,
    payload: result,
  }),
  fail: (error) => ({
    type: LOGIN_FAILED,
    payload: error,
  }),
};
