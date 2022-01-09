import axios from "axios";

export const requestLogin = ({ email, password }) => {
  const response = axios.post("http://localhost:5000/api/auth/login", {
    email: email,
    password: password,
  });
  return response;
};

export const requestSignUp = ({ email, password, firstname, lastname }) => {
  const response = axios.post("http://localhost:5000/api/auth/register", {
    email,
    password,
    firstname,
    lastname,
  });
  return response;
};
