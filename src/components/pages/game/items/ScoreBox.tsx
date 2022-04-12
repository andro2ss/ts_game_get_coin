import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { UserScore } from "../../../../redux/reducers/userScore";
import { setEndTime } from "../../../../helpers/timeCounter/setEndTime";
import timeCounter from "../../../../helpers/timeCounter/timeCounter";
import { GameRound, setGameRound } from "../../../../redux/reducers/gameRound";

export function ScoreBox() {
  const [tempEndDate, setTempEndDate] = useState<Date>();
  const [timer, setTimer] = useState<number>();
  const dispatch = useDispatch();

  const userScore = useSelector((state: UserScore) => state.userScore);
  const currentRound = useSelector((state: GameRound) => state.gameRound);

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
        setTempEndDate(setEndTime());
        dispatch(setGameRound(currentRound + 1));
      }
    }, 100);
    return () => clearInterval(timeInterval);
  }, [timer, tempEndDate]);

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
