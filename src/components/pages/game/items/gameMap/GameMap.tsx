import React, { useEffect, useState } from "react";
import { GameField } from "./items/GameField";
import { useDispatch, useSelector } from "react-redux";
import {
  setUserPos,
  UserPosition,
} from "../../../../../redux/reducers/userPos";
import {
  setTargetPos,
  TargetPosition,
} from "../../../../../redux/reducers/targetPos";
import {
  setUserScore,
  UserScore,
} from "../../../../../redux/reducers/userScore";
import { useNavigate } from "react-router-dom";
import { createMap } from "../../helpers/CreateMap";
import moveControl from "../../helpers/moveControl";
import newTargetPosition from "../../helpers/newTargetPosition";
import { GameUserDirection } from "../../../../../redux/reducers/gameUserDirection";
import { GameRound } from "../../../../../redux/reducers/gameRound";
import {
  MonstersPosition,
  setMonstersPos,
} from "../../../../../redux/reducers/monstersPos";
import moveMonsters from "../../helpers/moveMonsters";
import "./GameMap.scss";
import { GameUserName } from "../../../../../redux/reducers/gameUserName";

function GameMap() {
  const [gameFields, setGameFields] = useState<number[]>();
  const [gameStep, setGameStep] = useState<number>(0);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // REDUX Variable
  const userName = useSelector((state: GameUserName) => state.gameUserName);
  const gameRound = useSelector((state: GameRound) => state.gameRound);
  const gameUserDir = useSelector(
    (state: GameUserDirection) => state.gameUserDirection
  );
  const userPosition = useSelector((state: UserPosition) => state.userPos);
  const targetPosition = useSelector(
    (state: TargetPosition) => state.targetPos
  );
  const monstersPosition = useSelector(
    (state: MonstersPosition) => state.monstersPos
  );
  const userScore = useSelector((state: UserScore) => state.userScore);

  useEffect(() => {
    createMap(gameFields, setGameFields);

    if (userName === "") {
      navigate("/", { replace: true });
    }

    //Get Point
    if (userPosition === targetPosition) {
      dispatch(setUserScore(userScore + 1));
      dispatch(setTargetPos(newTargetPosition(userPosition, monstersPosition)));
    }

    for (let i = 0; i < monstersPosition.length; i++) {
      if (userPosition === monstersPosition[i]) {
        navigate("/result", { replace: true });
      }
      if (targetPosition === monstersPosition[i]) {
        dispatch(
          setTargetPos(newTargetPosition(userPosition, monstersPosition))
        );
      }
    }

    if (userPosition !== 999) {
      //Round Control interval
      const gameInterval = setInterval(() => {
        setGameStep(gameStep + 1);
        dispatch(setUserPos(moveControl(userPosition, gameUserDir)));
        dispatch(setMonstersPos(moveMonsters(monstersPosition)));
      }, Math.floor(500 / gameRound));
      return () => clearInterval(gameInterval);
    } else {
      navigate("/result", { replace: true });
    }
  }, [gameFields, gameStep, gameUserDir, monstersPosition]);
  return (
    <div className="game__mapBox">
      {!gameFields
        ? "Tworzę mapę"
        : gameFields.map((item) => {
            return <GameField key={"gameField" + item} fieldNr={item} />;
          })}
    </div>
  );
}

export default GameMap;
