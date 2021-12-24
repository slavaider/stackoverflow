import {
  ADD_ANSWER_SUCCESS,
  FETCH_ANSWERS_FAILED,
  FETCH_ANSWERS_SUCCESS,
} from "@store/actionTypes";
import { IAnswer } from "@store/model/IAnswer";

import { IAnswersActions } from "./types";

export function getAnswersSuccess(answers: IAnswer[]): IAnswersActions {
  return { type: FETCH_ANSWERS_SUCCESS, payload: answers };
}

export function getAnswersFailed(): IAnswersActions {
  return { type: FETCH_ANSWERS_FAILED };
}

export function addAnswerSuccess(answer: IAnswer): IAnswersActions {
  return { type: ADD_ANSWER_SUCCESS, payload: answer };
}
