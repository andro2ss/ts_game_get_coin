import React, { ReactElement, useEffect, useState } from "react";
import "./Game.scss";
import { GameField } from "./items/GameField";
import { useDispatch, useSelector } from "react-redux";
import { UserPosition } from "../../../redux/reducers/userPos";
import { setUserPos } from "../../../redux/actions";
import moveControl from "../../../helpers/moveControl";
import { useNavigate } from "react-router-dom";

function Game() {
  const [gameFields, setGameFields] = useState<any>();
  const [moveDirection, setMoveDirection] = useState<string>("left");
  const [tempUserPosition, setTempUserPosition] = useState<number>(-100);
  const [tempScore, setTempScore] = useState<number>(0);
  const [gameSpeed, setGameSpeed] = useState<number>(1000);
  const initUserPosition = useSelector((state: UserPosition) => state.userPos);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  if (tempUserPosition === -100) setTempUserPosition(initUserPosition);

  useEffect(() => {
    //Create Map
    if (!gameFields) {
      let tempMap = [];
      for (let i = 0; i < 100; i++) {
        tempMap.push(<GameField key={"gameField" + i} fieldNr={i} />);
      }
      setGameFields(tempMap);
    }

    // game logic
    if (tempUserPosition !== 999) {
      const interval = setInterval(() => {
        setTempUserPosition(moveControl(tempUserPosition, moveDirection));
        dispatch(setUserPos(moveControl(tempUserPosition, moveDirection)));
      }, gameSpeed);
      return () => clearInterval(interval);
    } else {
      navigate("/result", { replace: true });
    }
  }, [gameFields, moveDirection, tempUserPosition, gameSpeed]);
  return (
    <div className="game__container">
      {!gameFields
        ? "tak"
        : gameFields.map((item: ReactElement) => {
            return item;
          })}
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
  );
}

export default Game;
