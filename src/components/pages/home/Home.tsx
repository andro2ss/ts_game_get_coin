import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import setLocalGameUser from "../game/helpers/setLocalGameUser";
import "./Home.scss";
import { LoginUser } from "./items/loginUser/LoginUser";
import { LoggedUser } from "./items/loggedUser/LoggedUser";
import { Instructions } from "./items/instructions/Instructions";
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
      <h1 className="home__title">Get Coin</h1>
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
      <Instructions />
    </div>
  );
}

export default Home;
