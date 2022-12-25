import { legacy_createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import { reducer as AuthReducer } from "./Auth/reducer";
import { reducer as BlogReducer } from "./Blog/reducer";

const rootReducer = combineReducers({
  AuthReducer,
  BlogReducer,
});

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
