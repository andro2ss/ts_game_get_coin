import React, { ReactElement, useEffect, useState } from "react";
import "./Game.scss";
import { GameField } from "./items/GameField";

function Game() {
  const [gameFields, setGameFields] = useState<any>();

  useEffect(() => {
    if (!gameFields) {
      let tempMap = [];
      for (let i = 0; i < 100; i++) {
        tempMap.push(<GameField key={"gameField" + i} fieldNr={i} />);
      }
      setGameFields(tempMap);
    }
  }, [gameFields]);
  return (
    <div className="game__container">
      {!gameFields
        ? "tak"
        : gameFields.map((item: ReactElement) => {
            return item;
          })}
    </div>
  );
}

export default Game;
