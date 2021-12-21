import AuthReducer from "@store/reducers/AuthReducer";
import { applyMiddleware, combineReducers, createStore } from "redux";
import createSagaMiddleware from "redux-saga";

import PersonsReducer from "./reducers/PersonsReducer";
import mySaga from "./sagas";

const sagaMiddleware = createSagaMiddleware();

const reducer = combineReducers({
  persons: PersonsReducer,
  auth: AuthReducer,
});

const store = createStore(reducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(mySaga);

export type RootState = ReturnType<typeof store.getState>;

export default store;
