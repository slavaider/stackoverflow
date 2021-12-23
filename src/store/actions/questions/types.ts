import IOptions from "@store/model/IOptions";
import IQuestion from "@store/model/IQuestion";
import {
  FETCH_QUESTIONS,
  FETCH_QUESTIONS_FAILED,
  FETCH_QUESTIONS_SUCCESS,
  SET_LOADING,
} from "@store/reducers/actionTypes";

export interface IGetQuestionsSuccess {
  type: typeof FETCH_QUESTIONS_SUCCESS;
  payload: IQuestion[];
}

export interface IGetQuestionsFailed {
  type: typeof FETCH_QUESTIONS_FAILED;
}

export interface IGetQuestions {
  type: typeof FETCH_QUESTIONS;
  payload: IOptions;
  token: string;
}
export interface ISetLoading {
  type: typeof SET_LOADING;
  payload: boolean;
}

export type IQuestionsActions =
  | IGetQuestionsSuccess
  | IGetQuestionsFailed
  | IGetQuestions
  | ISetLoading;