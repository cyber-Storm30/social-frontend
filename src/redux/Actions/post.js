export const FETCH_POST = "fetchPost";
export const SET_POST = "setPost";

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
