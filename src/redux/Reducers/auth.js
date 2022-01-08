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
};

export const authReducer = (state = initialstate, action) => {
  switch (action.type) {
    case LOGIN_START: {
      return {
        user: null,
        isFetching: true,
        error: false,
      };
    }
    case LOGIN_SUCCESS: {
      return {
        user: action.payload.newUser,
        isFetching: false,
        error: false,
      };
    }
    case LOGIN_FAILURE: {
      return {
        user: null,
        isFetching: false,
        error: true,
      };
    }
    case LOGOUT: {
      return {
        user: null,
        isFetching: false,
        error: false,
      };
    }
    case SIGNUP_START: {
      return {
        user: null,
        isFetching: true,
        error: false,
      };
    }
    case SIGNUP_SUCCESS: {
      return {
        user: action.payload,
        isFetching: false,
        error: false,
      };
    }
    case SIGNUP_FAILURE: {
      return initialstate;
    }
    default:
      return state;
  }
};
