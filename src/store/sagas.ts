import api from "@config/api";
import { call, put, takeEvery } from "redux-saga/effects";

// worker Saga: will be fired on USER_FETCH_REQUESTED actions

async function test(path: string) {
  const response = await fetch(
    `${path}/questions?order=desc&sort=activity&site=stackoverflow`
  );
  return response.json();
}

function* fetchUser(action: never): any {
  try {
    const user = yield call(test, api.path);
    console.log(user);
    yield put({ type: "USER_FETCH_SUCCEEDED", user: "123" });
  } catch (e) {
    yield put({ type: "USER_FETCH_FAILED", message: e.message });
  }
}

function* mySaga() {
  yield takeEvery("USER_FETCH_REQUESTED", fetchUser);
}

export default mySaga;
