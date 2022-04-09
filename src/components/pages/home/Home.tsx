import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setGameUser } from "../../../redux/actions";
import { User } from "../../../redux/reducers/gameUser";
import setLocalGameUser from "../../../helpers/setLocalGameUser";
import { Link } from "react-router-dom";
import "./Home.scss";
import { LoginUser } from "./logUser/LoginUser";
import "animate.css";

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
        <div className="home__logged">
          <p>
            <span className="logged__text">Cześć</span>{" "}
            <span className="logged__user">{tempGameUser}</span>
          </p>
          <div className="logged__box">
            <Link to="/play" className="logged__btn logged__btn--start">
              <span>Graj</span>
            </Link>
            <button
              className="logged__btn logged__btn--logout"
              onClick={() => {
                setLocalGameUser("");
                dispatch(setGameUser(""));
              }}
            >
              Zapomnij mnie
            </button>
          </div>
        </div>
      )}
      <h2>Instrukcje</h2>
      <span>
        <h3>Cel gry:</h3>Zebranie jak największej ilości monet
      </span>
      <span>
        <h3>Jak grać</h3>
        Postać samoczynnie idzie naprzód, aby zmienić kierunek wciśnij
        odpowiedni przycisk strzałki
      </span>
      <span>
        <h3>Zasady</h3>
        <ul>
          <li>Wyjście za mapę kończy grę</li>
          <li>Wejście na minę kończy grę</li>
          <li>
            Wraz z kolejnymi rundami gra będzie przyśpieszać, a ilość min rosnąć
          </li>
        </ul>
      </span>
    </div>
  );
}

export default Home;
