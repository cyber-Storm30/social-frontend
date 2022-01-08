import axios from "axios";

export const requestgetPost = () => {
  const res = axios.get("http://localhost:5000/api/posts");
  return res;
};
