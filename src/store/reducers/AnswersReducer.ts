import { IAnswersActions } from "@store/actions/answers/types";
import {
  ADD_ANSWER_SUCCESS,
  FETCH_ANSWERS_FAILED,
  FETCH_ANSWERS_SUCCESS,
} from "@store/actionTypes";
import { IAnswer } from "@store/model/IAnswer";

interface IAnswers {
  items: IAnswer[];
}

const initialState: IAnswers = {
  items: [],
};

export default function AnswersReducer(
  state = initialState,
  action: IAnswersActions
): IAnswers {
  switch (action.type) {
    case FETCH_ANSWERS_SUCCESS: {
      return {
        items: action.payload,
      };
    }
    case FETCH_ANSWERS_FAILED: {
      return {
        items: [],
      };
    }
    case ADD_ANSWER_SUCCESS: {
      return {
        items: [...state.items, action.payload],
      };
    }
    default:
      return state;
  }
}
