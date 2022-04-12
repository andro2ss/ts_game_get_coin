import { combineReducers } from "redux";
import { gameUserName } from "./gameUserName";
import { userPos } from "./userPos";
import { userScore } from "./userScore";
import { targetPos } from "./targetPos";
import { gameRound } from "./gameRound";
import { gameUserDirection } from "./gameUserDirection";
import { monstersPos } from "./monstersPos";

const allReducers = combineReducers({
  gameUserName,
  userPos,
  userScore,
  targetPos,
  gameRound,
  gameUserDirection,
  monstersPos,
});

export default allReducers;
