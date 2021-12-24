import { IQuestionsActions } from "@store/actions/questions/types";
import {
  FETCH_QUESTIONS_FAILED,
  FETCH_QUESTIONS_SUCCESS,
  SET_LOADING,
} from "@store/actionTypes";
import IQuestion from "@store/model/IQuestion";

export function getQuestionsSuccess(questions: IQuestion[]): IQuestionsActions {
  return { type: FETCH_QUESTIONS_SUCCESS, payload: questions };
}

export function getQuestionsFailed(): IQuestionsActions {
  return { type: FETCH_QUESTIONS_FAILED };
}

export function setLoading(loading: boolean): IQuestionsActions {
  return {
    type: SET_LOADING,
    payload: loading,
  };
}
