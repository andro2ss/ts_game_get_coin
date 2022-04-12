import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import setLocalGameUser from "../game/helpers/setLocalGameUser";
import "./Home.scss";
import { LoginUser } from "./items/LoginUser";
import { LoggedUser } from "./items/LoggedUser";
import { GameInstructions } from "./items/GameInstructions";
import {
  GameUserName,
  setGameUserName,
} from "../../../redux/reducers/gameUserName";

function Home() {
  const [user, setUser] = useState("");
  const dispatch = useDispatch();
  const tempGameUser = useSelector((state: GameUserName) => state.gameUserName);

  if (tempGameUser === "" && localStorage["gameUser"]) {
    dispatch(
      setGameUserName(JSON.parse(localStorage.getItem("gameUser") || ""))
    );
  }

  const handleOnSubmit = (e: any) => {
    e.preventDefault();
    dispatch(setGameUserName(user));
    setLocalGameUser(user);
  };

  return (
    <div className="home__container">
      <h1 className="home__title">Zbierz monetę</h1>
      {tempGameUser === "" ? (
        <LoginUser
          onSubmit={(e) => {
            handleOnSubmit(e);
          }}
          onChange={(e) => {
            setUser(e.target.value);
          }}
        />
      ) : (
        <LoggedUser
          tempGameUser={tempGameUser}
          onClick={() => {
            setLocalGameUser("");
            dispatch(setGameUserName(""));
          }}
        />
      )}
      <GameInstructions />
    </div>
  );
}

export default Home;
