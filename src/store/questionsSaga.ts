import api from "@config/api";
import {
  getQuestionsFailed,
  getQuestionsSuccess,
  setLoading,
} from "@store/actions/questions/questionsActions";
import { IGetQuestions } from "@store/actions/questions/types";
import IOptions from "@store/model/IOptions";
import { FETCH_QUESTIONS } from "@store/reducers/actionTypes";
import qs from "qs";
import { call, put, takeEvery } from "redux-saga/effects";

async function fetchQuestions(path: string, options: IOptions, token: string) {
  const params = qs.stringify(options);
  const response = await fetch(
    `${path}/questions?site=stackoverflow&${params}&key=${api.key}&access_token=${token}`
  );
  return response.json();
}

function* getQuestions(action: IGetQuestions): any {
  try {
    yield put(setLoading(true));
    const questions = yield call(
      fetchQuestions,
      api.path,
      action.payload,
      action.token
    );
    yield put(getQuestionsSuccess(questions.items));
  } catch (e) {
    yield put(getQuestionsFailed());
  } finally {
    yield put(setLoading(false));
  }
}

function* mySaga(): any {
  yield takeEvery(FETCH_QUESTIONS, getQuestions);
}

export default mySaga;
