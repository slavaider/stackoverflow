import { IQuestionsActions } from "@store/actions/questions/types";
import {
  FETCH_QUESTIONS_FAILED,
  FETCH_QUESTIONS_SUCCESS,
  SET_LOADING,
} from "@store/actionTypes";
import IQuestion from "@store/model/IQuestion";

interface IQuestions {
  items: IQuestion[];
  loading: boolean;
  error: null | Error;
}

const initialState: IQuestions = {
  items: [],
  loading: false,
  error: null,
};

export default function QuestionsReducer(
  state = initialState,
  action: IQuestionsActions
): IQuestions {
  switch (action.type) {
    case FETCH_QUESTIONS_SUCCESS: {
      return {
        ...state,
        items: action.payload,
        error: null,
      };
    }
    case FETCH_QUESTIONS_FAILED: {
      return {
        ...state,
        items: [],
        error: action.payload,
      };
    }
    case SET_LOADING: {
      return {
        ...state,
        loading: action.payload,
      };
    }
    default:
      return state;
  }
}
