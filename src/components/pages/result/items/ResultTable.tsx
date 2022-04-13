import React from "react";
import "./ResultTable.scss";

export interface GameboardPosition {
  id: string;
  user: string;
  round: number;
  score: number;
}

export function ResultTable({ gameboard }: any) {
  return (
    <div className="result__table">
      <h4 className="table__title">Najlepsze wyniki</h4>
      <div className="table__header">
        <span>Nr</span>
        <span>Gracz</span>
        <span>Rundy</span>
        <span>Pkt</span>
      </div>
      {gameboard
        .sort((a: GameboardPosition, b: GameboardPosition) => {
          return b.score - a.score;
        })
        .filter((item: GameboardPosition, index: number) => {
          return index < 10;
        })
        .map((gameboardPosition: GameboardPosition, index: number) => {
          return (
            <div className="table__content" key={gameboardPosition.id}>
              <span>{index + 1}</span>
              <span>{gameboardPosition.user}</span>
              <span>{gameboardPosition.round}</span>
              <span>{gameboardPosition.score}</span>
            </div>
          );
        })}
    </div>
  );
}
