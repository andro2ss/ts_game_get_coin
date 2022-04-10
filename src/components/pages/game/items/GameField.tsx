import React from "react";
import { useSelector } from "react-redux";
import { UserPosition } from "../../../../redux/reducers/userPos";
interface GameField {
  fieldNr: number;
}
export function GameField({ fieldNr }: GameField) {
  const tempUserPos = useSelector((state: UserPosition) => state.userPos);

  return (
    <div className="game__field">
      {fieldNr === tempUserPos ? <div className="user" /> : ""}
    </div>
  );
}
