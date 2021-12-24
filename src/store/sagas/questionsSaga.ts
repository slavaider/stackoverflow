import api from "@config/api";
import {
  getQuestionsFailed,
  getQuestionsSuccess,
  setLoading,
} from "@store/actions/questions/questionsActions";
import { IGetQuestions } from "@store/actions/questions/types";
import { FETCH_QUESTIONS } from "@store/actionTypes";
import IOptions from "@store/model/IOptions";
import axios from "axios";
import qs from "qs";
import { call, put, takeEvery } from "redux-saga/effects";

async function fetchQuestions(path: string, options: IOptions) {
  const params = qs.stringify(options);
  return axios.get(
    `${path}/questions?site=stackoverflow&${params}&key=${api.key}`
  );
}

function* getQuestions(action: IGetQuestions): any {
  try {
    yield put(setLoading(true));
    const questions = yield call(fetchQuestions, api.path, action.payload);
    yield put(getQuestionsSuccess(questions.data.items));
  } catch (error) {
    yield put(getQuestionsFailed(error));
  } finally {
    yield put(setLoading(false));
  }
}

function* questionsSaga(): any {
  yield takeEvery(FETCH_QUESTIONS, getQuestions);
}

export default questionsSaga;
