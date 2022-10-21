import { axiosClient } from "../../../Services/apiClient";

export const requestLogin = ({ email, password }) => {
  const response = axiosClient.post("/auth/login", {
    email: email,
    password: password,
  });
  return response;
};

export const requestSignUp = ({ email, password, firstname, lastname }) => {
  const response = axiosClient.post("auth/register", {
    email,
    password,
    firstname,
    lastname,
  });
  return response;
};
