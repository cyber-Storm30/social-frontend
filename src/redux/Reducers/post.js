import { FETCH_POST, SET_POST, SET_SINGLE_POST } from "../Actions/post";

const initialstate = {
  posts: [],
  post: null,
};

export const postReducer = (state = initialstate, action) => {
  switch (action.type) {
    case SET_POST: {
      return {
        ...state,
        posts: action.payload,
      };
    }
    case SET_SINGLE_POST: {
      return {
        ...state,
        post: action.payload,
      };
    }
    default:
      return state;
  }
};
