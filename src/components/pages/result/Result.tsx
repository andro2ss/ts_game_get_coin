import React from "react";
import { useSelector } from "react-redux";
import { UserScore } from "../../../redux/reducers/userScore";

function Result() {
  const userScore = useSelector((state: UserScore) => state.userScore);

  return <div>Twój wynik: {userScore}</div>;
}

export default Result;
