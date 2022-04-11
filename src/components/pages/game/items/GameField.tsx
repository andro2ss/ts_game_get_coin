import React from "react";

interface GameField {
  fieldNr: number;
  userPos: number;
  targetPos: number;
}

export function GameField({ fieldNr, userPos, targetPos }: GameField) {
  const tempUserPos = userPos;
  const tempTargetPos = targetPos;

  return (
    <div className="game__field">
      {fieldNr === tempUserPos ? <div className="user" /> : ""}
      {fieldNr === tempTargetPos && tempTargetPos !== tempUserPos ? (
        <div className="target" />
      ) : (
        ""
      )}
    </div>
  );
}
