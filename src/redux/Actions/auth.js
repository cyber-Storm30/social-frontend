export const LOGIN_START = "loginStart";
export const LOGIN_SUCCESS = "loginSuccess";
export const LOGIN_FAILURE = "loginFailure";
export const LOGOUT = "logout";
export const SIGNUP_START = "signupStart";
export const SIGNUP_SUCCESS = "signupSuccess";
export const SIGNUP_FAILURE = "signupFailure";

export const loginStart = (data) => {
  return {
    type: LOGIN_START,
    payload: data,
  };
};

export const loginSuccess = (data) => {
  return {
    type: LOGIN_SUCCESS,
    payload: data,
  };
};

export const loginFailure = () => {
  return {
    type: LOGIN_FAILURE,
  };
};

export const logout = () => {
  return {
    type: LOGOUT,
  };
};

export const signupStart = (data) => {
  return {
    type: SIGNUP_START,
    payload: data,
  };
};

export const signupSuccess = (data) => {
  return {
    type: SIGNUP_SUCCESS,
    payload: data,
  };
};

export const signupFailure = () => {
  return {
    type: SIGNUP_FAILURE,
  };
};
