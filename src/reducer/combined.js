import { combineReducers } from "redux";

import mainReducer from "./reducer";

const allReducer = combineReducers({
  category: mainReducer
});

export default allReducer;
