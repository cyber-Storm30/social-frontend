import axios from "axios";

export const axiosClient = axios.create({
  // baseURL: "http://localhost:5000/api",
  baseURL: " https://blooming-eyrie-45705.herokuapp.com/api",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});
