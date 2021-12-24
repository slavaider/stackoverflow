import {
  ADD_ANSWER_FAILED,
  ADD_ANSWER_SUCCESS,
  FETCH_ANSWERS_FAILED,
  FETCH_ANSWERS_SUCCESS,
} from "@store/actionTypes";
import { IAnswer } from "@store/model/IAnswer";

import { IAnswersActions } from "./types";

export function getAnswersSuccess(answers: IAnswer[]): IAnswersActions {
  return { type: FETCH_ANSWERS_SUCCESS, payload: answers };
}

export function getAnswersFailed(error: Error): IAnswersActions {
  return { type: FETCH_ANSWERS_FAILED, payload: error };
}

export function addAnswerSuccess(answer: IAnswer): IAnswersActions {
  return { type: ADD_ANSWER_SUCCESS, payload: answer };
}

export function addAnswerError(error: Error): IAnswersActions {
  return { type: ADD_ANSWER_FAILED, payload: error };
}
