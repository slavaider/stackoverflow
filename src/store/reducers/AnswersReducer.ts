import { IAnswersActions } from "@store/actions/answers/types";
import {
  ADD_ANSWER_FAILED,
  ADD_ANSWER_SUCCESS,
  FETCH_ANSWERS_FAILED,
  FETCH_ANSWERS_SUCCESS,
} from "@store/actionTypes";
import { IAnswer } from "@store/model/IAnswer";

interface IAnswers {
  items: IAnswer[];
  error: null | Error;
}

const initialState: IAnswers = {
  items: [],
  error: null,
};

export default function AnswersReducer(
  state = initialState,
  action: IAnswersActions
): IAnswers {
  switch (action.type) {
    case FETCH_ANSWERS_SUCCESS: {
      return {
        items: action.payload,
        error: null,
      };
    }
    case FETCH_ANSWERS_FAILED: {
      return {
        items: [],
        error: action.payload,
      };
    }
    case ADD_ANSWER_SUCCESS: {
      return {
        items: [...state.items, action.payload],
        error: null,
      };
    }
    case ADD_ANSWER_FAILED: {
      return {
        ...state,
        error: action.payload,
      };
    }
    default:
      return state;
  }
}
