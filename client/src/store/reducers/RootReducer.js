import { combineReducers } from "redux";
import UIState from "./UIState";

const appReducer = combineReducers({
  uiState: UIState,
});

const rootReducer = (state, action) => {
  return appReducer(state, action);
};

export default rootReducer;
