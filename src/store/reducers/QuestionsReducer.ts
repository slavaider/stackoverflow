import { IQuestionsActions } from "@store/actions/questions/types";
import {
  FETCH_QUESTIONS_FAILED,
  FETCH_QUESTIONS_SUCCESS,
  SET_LOADING,
  SET_OPTIONS,
} from "@store/actionTypes";
import IOptions, { Order, Sort } from "@store/model/IOptions";
import IQuestion from "@store/model/IQuestion";

interface IQuestions {
  options: IOptions;
  items: IQuestion[];
  loading: boolean;
  error: null | Error;
}

const initialState: IQuestions = {
  options: {
    order: Order.asc,
    sort: Sort.activity,
    pagesize: 5,
    page: 1,
  },
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
    case SET_OPTIONS: {
      return {
        ...state,
        options: action.payload,
      };
    }
    default:
      return state;
  }
}
