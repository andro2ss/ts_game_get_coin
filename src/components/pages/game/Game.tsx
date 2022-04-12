import React from "react";
import "./Game.scss";
import { ScoreBox } from "./items/ScoreBox";
import ArrowBtnControls from "./items/ArrowBtnControls";
import GameMap from "./items/gameMap/GameMap";
import { keyboardControl } from "./helpers/keyboardControl";
import { useDispatch } from "react-redux";
import { setGameUserDirection } from "../../../redux/reducers/gameUserDirection";

function Game() {
  // Keyboard listener
  const dispatch = useDispatch();
  document.addEventListener("keydown", (e) => {
    dispatch(setGameUserDirection(keyboardControl(e)));
  });

  return (
    <div className="game__container">
      <ScoreBox />
      <GameMap />
      <ArrowBtnControls />
    </div>
  );
}

export default Game;
