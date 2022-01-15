export const FETCH_POST = "fetchPost";
export const SET_POST = "setPost";
export const SET_SINGLE_POST = "setSinglePost";

export const fetchPost = () => {
  return {
    type: FETCH_POST,
  };
};

export const setPost = (data) => {
  return {
    type: SET_POST,
    payload: data,
  };
};

export const setSinglePost = (data) => {
  return {
    type: SET_SINGLE_POST,
    payload: data,
  };
};
