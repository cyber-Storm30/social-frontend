import { takeLatest, all } from "@redux-saga/core/effects";
import { LOGIN_START, SIGNUP_START } from "../Actions/auth";
import { handleLogin, handleSignup } from "./handlers/auth";
import { handleGetPost } from "./handlers/posts";
import { FETCH_POST } from "../Actions/post";

export function* watcherSaga() {
  yield all([
    takeLatest(LOGIN_START, handleLogin),
    takeLatest(SIGNUP_START, handleSignup),
    takeLatest(FETCH_POST, handleGetPost),
  ]);
}
