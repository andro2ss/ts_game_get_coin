import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setUserScore,
  UserScore,
} from "../../../../../redux/reducers/userScore";
import { setEndTime } from "../../../../../helpers/timeCounter/setEndTime";
import timeCounter from "../../../../../helpers/timeCounter/timeCounter";
import {
  GameRound,
  setGameRound,
} from "../../../../../redux/reducers/gameRound";
import { setMonstersPos } from "../../../../../redux/reducers/monstersPos";
import newMonsterPosition from "../../helpers/newMonsterPosition";
import { UserPosition } from "../../../../../redux/reducers/userPos";
import { TargetPosition } from "../../../../../redux/reducers/targetPos";
import "./ScoreBox.scss";

export function ScoreBox() {
  const [tempEndDate, setTempEndDate] = useState<Date>();
  const [timer, setTimer] = useState<number>();
  const [stateControl, setStateControl] = useState<number>(0);
  const dispatch = useDispatch();

  const userScore = useSelector((state: UserScore) => state.userScore);
  const currentRound = useSelector((state: GameRound) => state.gameRound);

  const userPosition = useSelector((state: UserPosition) => state.userPos);
  const targetPosition = useSelector(
    (state: TargetPosition) => state.targetPos
  );
  if (!tempEndDate) {
    setTempEndDate(setEndTime());
  }

  useEffect(() => {
    const timeInterval = setInterval(() => {
      const currentTimeAuto: Date = new Date();
      if (tempEndDate) {
        setTimer(timeCounter(currentTimeAuto, tempEndDate));
      }

      if (timer && timer <= 0) {
        setStateControl(1);
        if (stateControl === 1) {
          setTempEndDate(setEndTime());
          dispatch(setGameRound(currentRound + 1));
          dispatch(setUserScore(userScore + 10));
          dispatch(
            setMonstersPos(
              newMonsterPosition(userPosition, targetPosition, currentRound)
            )
          );
          setStateControl(0);
        }
      }
    }, 100);
    return () => clearInterval(timeInterval);
  }, [timer, tempEndDate, stateControl]);

  return (
    <div className="game__scoreBox">
      <h2 className="scoreBox__title">
        Runda <span>{currentRound}</span>
      </h2>
      <div className="scoreBox__infoBox">
        <span> Następna za: {timer && timer < 0 ? "0" : timer}</span>
        <span>
          Twój wynik:{" "}
          <span className="score">{userScore >= 0 ? userScore : "0"}</span>
        </span>
      </div>
    </div>
  );
}
