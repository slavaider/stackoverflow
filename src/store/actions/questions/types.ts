import {
  FETCH_QUESTIONS,
  FETCH_QUESTIONS_FAILED,
  FETCH_QUESTIONS_SUCCESS,
  SET_LOADING,
  SET_OPTIONS,
} from "@store/actionTypes";
import IOptions from "@store/model/IOptions";
import IQuestion from "@store/model/IQuestion";

export interface IGetQuestionsSuccess {
  type: typeof FETCH_QUESTIONS_SUCCESS;
  payload: IQuestion[];
}

export interface IGetQuestionsFailed {
  type: typeof FETCH_QUESTIONS_FAILED;
  payload: Error;
}

export interface IGetQuestions {
  type: typeof FETCH_QUESTIONS;
  payload: IOptions;
}

export interface ISetLoading {
  type: typeof SET_LOADING;
  payload: boolean;
}

export interface ISetOptions {
  type: typeof SET_OPTIONS;
  payload: IOptions;
}

export type IQuestionsActions =
  | IGetQuestionsSuccess
  | IGetQuestionsFailed
  | IGetQuestions
  | ISetLoading
  | ISetOptions;
