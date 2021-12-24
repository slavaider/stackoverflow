import api from "@config/api";
import {
  addAnswerError,
  addAnswerSuccess,
  getAnswersFailed,
  getAnswersSuccess,
} from "@store/actions/answers/answersActions";
import { IGetAnswers, IPostAnswer } from "@store/actions/answers/types";
import { ADD_ANSWER, FETCH_ANSWERS } from "@store/actionTypes";
import axios from "axios";
import { call, put, takeEvery } from "redux-saga/effects";

async function fetchAnswers(path: string, id: number) {
  return axios.get(
    `${path}/questions/${id}/answers?site=stackoverflow&key=${api.key}`
  );
}

function* getAnswers(action: IGetAnswers): any {
  try {
    const questions = yield call(fetchAnswers, api.path, action.payload);
    yield put(getAnswersSuccess(questions.data.items));
  } catch (error) {
    yield put(getAnswersFailed(error));
  }
}

async function postAnswer(
  path: string,
  id: number,
  token: string,
  content: string
) {
  const body = new FormData();
  body.append("site", "stackoverflow");
  body.append("key", api.key);
  body.append("access_token", token);
  body.append("body", content);
  return axios.post(`${path}/questions/${id}/answers/add`, body);
}

function* addAnswer(action: IPostAnswer): any {
  try {
    const questions = yield call(
      postAnswer,
      api.path,
      action.id,
      action.token,
      action.content
    );
    yield put(addAnswerSuccess(questions.data.items[0]));
  } catch (error) {
    yield put(addAnswerError(error));
  }
}

function* answersSaga(): any {
  yield takeEvery(FETCH_ANSWERS, getAnswers);
  yield takeEvery(ADD_ANSWER, addAnswer);
}

export default answersSaga;
