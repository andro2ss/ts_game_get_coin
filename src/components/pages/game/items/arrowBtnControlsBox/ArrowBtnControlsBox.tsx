import React from "react";
import { useDispatch } from "react-redux";
import { setGameUserDirection } from "../../../../../redux/reducers/gameUserDirection";
import "./ArrowBtnControlsBox.scss";

function ArrowBtnControlsBox() {
  const dispatch = useDispatch();

  function changeMoveDirection(newDirection: string) {
    dispatch(setGameUserDirection(newDirection));
  }

  return (
    <div className="game__arrowBox">
      <button
        className="arrowBox__btn"
        onClick={() => {
          changeMoveDirection("left");
        }}
      >
        {"<-"}
      </button>
      <div className="arrowBox__box">
        <button
          className="arrowBox__btn "
          onClick={() => {
            changeMoveDirection("up");
          }}
        >
          /\
        </button>
        <button
          className="arrowBox__btn "
          onClick={() => {
            changeMoveDirection("down");
          }}
        >
          \/{" "}
        </button>
      </div>

      <button
        className="arrowBox__btn"
        onClick={() => {
          changeMoveDirection("right");
        }}
      >
        {"->"}
      </button>
    </div>
  );
}

export default ArrowBtnControlsBox;
