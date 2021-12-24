import {
  ADD_ANSWER,
  ADD_ANSWER_FAILED,
  ADD_ANSWER_SUCCESS,
  FETCH_ANSWERS,
  FETCH_ANSWERS_FAILED,
  FETCH_ANSWERS_SUCCESS,
} from "@store/actionTypes";
import { IAnswer } from "@store/model/IAnswer";

export interface IGetAnswersSuccess {
  type: typeof FETCH_ANSWERS_SUCCESS;
  payload: IAnswer[];
}

export interface IGetAnswersFailed {
  type: typeof FETCH_ANSWERS_FAILED;
  payload: Error;
}

export interface IGetAnswers {
  type: typeof FETCH_ANSWERS;
  payload: number;
}

export interface IPostAnswer {
  type: typeof ADD_ANSWER;
  id: number;
  token: string;
  content: string;
}

export interface IAddAnswerSuccess {
  type: typeof ADD_ANSWER_SUCCESS;
  payload: IAnswer;
}

export interface IAddAnswerFailed {
  type: typeof ADD_ANSWER_FAILED;
  payload: Error;
}

export type IAnswersActions =
  | IGetAnswersSuccess
  | IGetAnswersFailed
  | IGetAnswers
  | IAddAnswerSuccess
  | IAddAnswerFailed;
