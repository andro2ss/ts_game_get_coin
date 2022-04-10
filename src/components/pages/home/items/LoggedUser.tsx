import { Link } from "react-router-dom";
import React from "react";

export function LoggedUser(props: {
  tempGameUser: string;
  onClick: () => void;
}) {
  return (
    <div className="home__logged">
      <p>
        <span className="logged__text">Cześć</span>{" "}
        <span className="logged__user">{props.tempGameUser}</span>
      </p>
      <div className="logged__box">
        <Link to="/play" className="logged__btn logged__btn--start">
          <span>Graj</span>
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
