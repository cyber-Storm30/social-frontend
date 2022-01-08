import { FETCH_POST, SET_POST } from "../Actions/post";

const initialstate = {
  posts: [],
};

export const postReducer = (state = initialstate, action) => {
  switch (action.type) {
    case SET_POST: {
      return {
        posts: action.payload,
      };
    }
    default:
      return state;
  }
};
