import { call, put } from "@redux-saga/core/effects";
import {
  loginFailure,
  loginSuccess,
  signupFailure,
  signupSuccess,
} from "../../Actions/auth";
import { requestLogin, requestSignUp } from "../requests/auth";

export function* handleLogin(action) {
  try {
    const response = yield call(requestLogin, action.payload);
    yield put(loginSuccess(response.data));
  } catch (err) {
    console.log(err);
    yield put(loginFailure());
  }
}

export function* handleSignup(action) {
  try {
    const response = yield call(requestSignUp, action.payload);
    yield put(signupSuccess(response.data));
  } catch (err) {
    console.log(err);
    yield put(signupFailure());
  }
}
