import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUserScore, UserScore } from "../../../redux/reducers/userScore";
import { Link } from "react-router-dom";
import { setTargetPos } from "../../../redux/reducers/targetPos";
import { setUserPos } from "../../../redux/reducers/userPos";
import { setGameRound } from "../../../redux/reducers/gameRound";

function Result() {
  const userScore = useSelector((state: UserScore) => state.userScore);
  const dispatch = useDispatch();

  return (
    <div>
      Twój wynik: {userScore}
      <button
        onClick={() => {
          dispatch(setUserScore(-1));
          dispatch(setTargetPos(55));
          dispatch(setUserPos(55));
          dispatch(setGameRound(1));
        }}
      >
        <Link to="/play" className="logged__btn logged__btn--start">
          <span>Jeszcze raz</span>
        </Link>
      </button>
    </div>
  );
}

export default Result;
