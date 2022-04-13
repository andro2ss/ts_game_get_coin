import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUserScore, UserScore } from "../../../redux/reducers/userScore";
import { Link } from "react-router-dom";
import { setTargetPos } from "../../../redux/reducers/targetPos";
import { setUserPos } from "../../../redux/reducers/userPos";
import { GameRound, setGameRound } from "../../../redux/reducers/gameRound";
import { setMonstersPos } from "../../../redux/reducers/monstersPos";
import "./Result.scss";
import { GameUserName } from "../../../redux/reducers/gameUserName";
import sendScoreToServer from "../../../helpers/sendScoreToServer";
import { collection, onSnapshot } from "firebase/firestore";
import db from "../../../firebase";
import { ResultTable } from "./items/ResultTable";
import CircularProgress from "@mui/material/CircularProgress";

function Result() {
  const [serverControl, setServerControl] = useState<string>("rdyToSend");
  const [gameboard, setGameboard] = useState<any>();
  const userScore = useSelector((state: UserScore) => state.userScore);
  const gameRound = useSelector((state: GameRound) => state.gameRound);
  const userName = useSelector((state: GameUserName) => state.gameUserName);
  const dispatch = useDispatch();

  function btnHandle() {
    dispatch(setUserScore(-1));
    dispatch(setTargetPos(55));
    dispatch(setUserPos(55));
    dispatch(setGameRound(1));
    dispatch(setMonstersPos([]));
  }

  useEffect(() => {
    if (serverControl === "rdyToSend" && userName !== "") {
      setServerControl("sending");
      sendScoreToServer(userName, userScore, gameRound).then(() => {
        setServerControl("dataSend");
      });
    } else if (serverControl === "dataSend" || userName === "") {
      onSnapshot(collection(db, "gameboard"), (snapshot) => {
        setGameboard(
          snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
        );
        setServerControl("dataReceived");
      });
    }
  }, [serverControl, gameboard]);

  return (
    <div className="result__container">
      <h2 className="result__title">Koniec gry</h2>
      <h3 className="result__user">{userName}</h3>
      <div className="result__userScore">
        Twój wynik : <span className="score">{userScore}</span>
      </div>
      <button
        className="result__btn"
        onClick={() => {
          btnHandle();
        }}
      >
        <Link to="/play" className="btn__playAgain ">
          <span>Zagraj ponownie</span>
        </Link>
      </button>
      {gameboard ? (
        <ResultTable gameboard={gameboard} />
      ) : (
        <CircularProgress className="spinner" color="warning" />
      )}
    </div>
  );
}

export default Result;
