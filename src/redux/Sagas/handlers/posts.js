import { call, put } from "@redux-saga/core/effects";
import { setPost } from "../../Actions/post";
import { requestgetPost } from "../requests/posts";

export function* handleGetPost() {
  try {
    const response = yield call(requestgetPost);
    yield put(setPost(response.data.data));
  } catch (err) {
    console.log(err);
  }
}
