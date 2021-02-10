import {combineReducers} from "redux";
import {userReducer} from "./userReducer";
import {counterReducer} from "./counterReducer";

export const allReducer = combineReducers({
  count: counterReducer,
  user: userReducer
})
