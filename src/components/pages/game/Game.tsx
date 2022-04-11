import React, { useEffect, useState } from "react";
import "./Game.scss";
import { GameField } from "./items/GameField";
import { useDispatch, useSelector } from "react-redux";
import { UserPosition } from "../../../redux/reducers/userPos";
import { setUserScore } from "../../../redux/actions";
import moveControl from "../../../helpers/moveControl";
import { useNavigate } from "react-router-dom";
import { UserScore } from "../../../redux/reducers/userScore";
import { TargetPosition } from "../../../redux/reducers/targetPos";
import newTargetPosition from "../../../helpers/newTargetPosition";
import { keyboardControl } from "../../../helpers/keyboardControl";
import timeToEndRound from "../../../helpers/timeToEndRound";
import { setEndRoundTime } from "../../../helpers/setEndRoundTime";

function Game() {
  const [gameFields, setGameFields] = useState<number[]>();
  const [moveDirection, setMoveDirection] = useState<string>("left");
  const [tempUserPosition, setTempUserPosition] = useState<number>(-100);
  const [tempTargetPosition, setTempTargetPosition] = useState<number>(-100);
  const [gameSpeed, setGameSpeed] = useState<number>(1000);
  const [gameRound, setGameRound] = useState<number>(1);
  const [tempEndDate, setTempEndDate] = useState<Date>();
  const [timer, setTimer] = useState<number>();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const initUserPosition = useSelector((state: UserPosition) => state.userPos);
  const initTargetPosition = useSelector(
    (state: TargetPosition) => state.targetPos
  );
  const userScore = useSelector((state: UserScore) => state.userScore);

  if (tempUserPosition === -100) setTempUserPosition(initUserPosition);
  if (tempTargetPosition === -100) setTempTargetPosition(initTargetPosition);
  console.log("render");

  useEffect(() => {
    console.log(gameSpeed);

    //Create Map
    if (!gameFields) {
      document.addEventListener("keydown", (e) => {
        setMoveDirection(keyboardControl(e));
      });
      let tempMap: number[] = [];
      for (let i = 0; i < 100; i++) {
        tempMap.push(i);
      }
      setGameFields(tempMap);
    }

    // game logic
    if (tempUserPosition !== 999) {
      const interval = setInterval(() => {
        // Round Timer
        const currentTime: Date = new Date();
        if (!tempEndDate) {
          setTempEndDate(setEndRoundTime());
        } else {
          setTimer(timeToEndRound(currentTime, tempEndDate));
        }
        if (timer && timer <= 0) {
          setTempEndDate(setEndRoundTime());
          setGameRound(gameRound + 1);
          setGameSpeed(gameSpeed * 0.9);
        }

        setTempUserPosition(moveControl(tempUserPosition, moveDirection));

        if (tempUserPosition === tempTargetPosition) {
          dispatch(setUserScore(userScore + 1));
          setTempTargetPosition(newTargetPosition(tempUserPosition));
        }
      }, gameSpeed);
      return () => clearInterval(interval);
    } else {
      navigate("/result", { replace: true });
    }
  }, [gameFields, timer, tempUserPosition, gameSpeed]);
  return (
    <div className="game__container">
      <div className="game__scoreBox">
        <h2>Runda {gameRound}</h2> <span> Następna za {timer} </span>
        <span>
          Twój wynik: <span>{userScore >= 0 ? userScore : "0"}</span>
        </span>
      </div>
      <div className="game__mapBox">
        {!gameFields
          ? "tak"
          : gameFields.map((item) => {
              return (
                <GameField
                  key={"gameField" + item}
                  fieldNr={item}
                  userPos={tempUserPosition}
                  targetPos={tempTargetPosition}
                />
              );
            })}
      </div>
      <div>
        <button
          onClick={() => {
            setMoveDirection("left");
          }}
        >
          {"<-"}
        </button>
        <button
          onClick={() => {
            setMoveDirection("right");
          }}
        >
          {"->"}
        </button>
        <button
          onClick={() => {
            setMoveDirection("up");
          }}
        >
          /\
        </button>
        <button
          onClick={() => {
            setMoveDirection("down");
          }}
        >
          \/{" "}
        </button>
      </div>
    </div>
  );
}

export default Game;
