import React from "react";
import { useSelector } from "react-redux";
import { UserPosition } from "../../../../../../redux/reducers/userPos";
import { TargetPosition } from "../../../../../../redux/reducers/targetPos";
import { MonstersPosition } from "../../../../../../redux/reducers/monstersPos";
import uniId from "../../../../../../helpers/UniqeID";
import "./GameField.scss";

interface GameFieldInterface {
  fieldNr: number;
}

export function GameField({ fieldNr }: GameFieldInterface) {
  const userPosition = useSelector((state: UserPosition) => state.userPos);
  const targetPosition = useSelector(
    (state: TargetPosition) => state.targetPos
  );
  const monstersPosition = useSelector(
    (state: MonstersPosition) => state.monstersPos
  );

  return (
    <div className="game__field">
      {fieldNr === userPosition ? <div className="user" /> : ""}
      {fieldNr === targetPosition && targetPosition !== userPosition ? (
        <div className="target" />
      ) : (
        ""
      )}
      {monstersPosition.length > 0
        ? monstersPosition
            .filter((item) => {
              return item === fieldNr;
            })
            .map((item) => {
              return <div className="monster" key={uniId()} />;
            })
        : ""}
    </div>
  );
}
