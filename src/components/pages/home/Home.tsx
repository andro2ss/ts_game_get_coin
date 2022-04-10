import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setGameUser } from "../../../redux/actions";
import { User } from "../../../redux/reducers/gameUser";
import setLocalGameUser from "../../../helpers/setLocalGameUser";
import "./Home.scss";
import { LoginUser } from "./items/LoginUser";
import { LoggedUser } from "./items/LoggedUser";
import { GameInstructions } from "./items/GameInstructions";

function Home() {
  const [user, setUser] = useState("");
  const dispatch = useDispatch();
  const tempGameUser = useSelector((state: User) => state.gameUser);

  if (tempGameUser === "" && localStorage["gameUser"]) {
    dispatch(setGameUser(JSON.parse(localStorage.getItem("gameUser") || "")));
  }

  const handleOnSubmit = (e: any) => {
    e.preventDefault();
    dispatch(setGameUser(user));
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
            dispatch(setGameUser(""));
          }}
        />
      )}
      <GameInstructions />
    </div>
  );
}

export default Home;
