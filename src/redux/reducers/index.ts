import { combineReducers } from "redux";
import { gameUser } from "./gameUser";
import { userPos } from "./userPos";

const allReducers = combineReducers({ gameUser, userPos });

export default allReducers;
