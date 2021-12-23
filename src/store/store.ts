import AuthReducer from "@store/reducers/AuthReducer";
import { applyMiddleware, combineReducers, createStore } from "redux";
import createSagaMiddleware from "redux-saga";

import mySaga from "./questionsSaga";
import QuestionsReducer from "./reducers/QuestionsReducer";

const sagaMiddleware = createSagaMiddleware();

const reducer = combineReducers({
  questions: QuestionsReducer,
  auth: AuthReducer,
});

const store = createStore(reducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(mySaga);

export type RootState = ReturnType<typeof store.getState>;

export default store;
