import React from "react";
import { useSelector } from "react-redux";
import { UserPosition } from "../../../../../../redux/reducers/userPos";
import { TargetPosition } from "../../../../../../redux/reducers/targetPos";

interface GameFieldInterface {
  fieldNr: number;
}

export function GameField({ fieldNr }: GameFieldInterface) {
  const userPosition = useSelector((state: UserPosition) => state.userPos);
  const targetPosition = useSelector(
    (state: TargetPosition) => state.targetPos
  );

  return (
    <div className="game__field">
      {fieldNr === userPosition ? <div className="user" /> : ""}
      {fieldNr === targetPosition && targetPosition !== userPosition ? (
        <div className="target" />
      ) : (
        ""
      )}
    </div>
  );
}
