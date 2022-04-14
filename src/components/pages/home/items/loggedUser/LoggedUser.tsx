import { Link } from "react-router-dom";
import React from "react";
import "./LoggedUser.scss";

export function LoggedUser(props: {
  tempGameUser: string;
  onClick: () => void;
}) {
  return (
    <div className="home__logged">
      <div className="logged__box">
        <span className="logged__text">Cześć</span>{" "}
        <span className="logged__user">{props.tempGameUser}</span>
      </div>
      <div className="logged__box">
        <Link to="/play" className="logged__btn logged__btn--start">
          <span>Start</span>
        </Link>
        <button
          className="logged__btn logged__btn--logout"
          onClick={props.onClick}
        >
          Zapomnij mnie
        </button>
      </div>
    </div>
  );
}
