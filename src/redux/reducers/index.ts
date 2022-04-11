import { combineReducers } from "redux";
import { gameUser } from "./gameUser";
import { userPos } from "./userPos";
import { userScore } from "./userScore";
import { targetPos } from "./targetPos";

const allReducers = combineReducers({
  gameUser,
  userPos,
  userScore,
  targetPos,
});

export default allReducers;
