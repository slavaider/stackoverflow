import AnswersReducer from "@store/reducers/AnswersReducer";
import AuthReducer from "@store/reducers/AuthReducer";
import { applyMiddleware, combineReducers, createStore } from "redux";
import createSagaMiddleware from "redux-saga";

import QuestionsReducer from "./reducers/QuestionsReducer";
import AnswersSaga from "./sagas/answersSaga";
import QuestionsSaga from "./sagas/questionsSaga";

const sagaMiddleware = createSagaMiddleware();

const reducer = combineReducers({
  questions: QuestionsReducer,
  answers: AnswersReducer,
  auth: AuthReducer,
});

const store = createStore(reducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(QuestionsSaga);
sagaMiddleware.run(AnswersSaga);

export type RootState = ReturnType<typeof store.getState>;

export default store;
