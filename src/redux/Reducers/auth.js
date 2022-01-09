import {
  LOGIN_FAILURE,
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGOUT,
  SIGNUP_FAILURE,
  SIGNUP_START,
  SIGNUP_SUCCESS,
} from "../Actions/auth";

const initialstate = {
  user: null,
  isFetching: false,
  error: false,
  token: null,
};

export const authReducer = (state = initialstate, action) => {
  switch (action.type) {
    case LOGIN_START: {
      return {
        user: null,
        isFetching: true,
        error: false,
        token: null,
      };
    }
    case LOGIN_SUCCESS: {
      return {
        user: action.payload.newUser,
        isFetching: false,
        error: false,
        token: action.payload.accessToken,
      };
    }
    case LOGIN_FAILURE: {
      return {
        user: null,
        isFetching: false,
        error: true,
        token: null,
      };
    }
    case LOGOUT: {
      return {
        user: null,
        isFetching: false,
        error: false,
        token: null,
      };
    }
    case SIGNUP_START: {
      return {
        user: null,
        isFetching: true,
        error: false,
        token: null,
      };
    }
    case SIGNUP_SUCCESS: {
      console.log(action.payload);
      return {
        user: action.payload,
        isFetching: false,
        error: false,
        token: null,
      };
    }
    case SIGNUP_FAILURE: {
      return {
        user: null,
        isFetching: false,
        error: true,
        token: null,
      };
    }
    default:
      return state;
  }
};
