import { IQuestionsActions } from "@store/actions/questions/types";
import IQuestion from "@store/model/IQuestion";
import {
  FETCH_QUESTIONS_FAILED,
  FETCH_QUESTIONS_SUCCESS,
  SET_LOADING,
} from "@store/reducers/actionTypes";

interface IQuestions {
  items: IQuestion[];
  loading: boolean;
}

const initialState: IQuestions = {
  items: [],
  loading: false,
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
      };
    }
    case FETCH_QUESTIONS_FAILED: {
      return {
        ...state,
        items: [],
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
