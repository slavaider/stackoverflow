import { IQuestionsActions } from "@store/actions/questions/types";
import {
  FETCH_QUESTIONS_FAILED,
  FETCH_QUESTIONS_SUCCESS,
  SET_LOADING,
  SET_OPTIONS,
} from "@store/actionTypes";
import IOptions from "@store/model/IOptions";
import IQuestion from "@store/model/IQuestion";

export function getQuestionsSuccess(questions: IQuestion[]): IQuestionsActions {
  return { type: FETCH_QUESTIONS_SUCCESS, payload: questions };
}

export function getQuestionsFailed(error: Error): IQuestionsActions {
  return { type: FETCH_QUESTIONS_FAILED, payload: error };
}

export function setLoading(loading: boolean): IQuestionsActions {
  return {
    type: SET_LOADING,
    payload: loading,
  };
}
export function setOptions(options: IOptions): IQuestionsActions {
  return {
    type: SET_OPTIONS,
    payload: options,
  };
}
