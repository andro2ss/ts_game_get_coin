import React from "react";
import { useDispatch } from "react-redux";
import { setGameUserDirection } from "../../../../../redux/reducers/gameUserDirection";
import "./ArrowBtnControlsBox.scss";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

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
        <ArrowBackIcon sx={{ fontSize: 40, color: "goldenrod" }} />
      </button>
      <div className="arrowBox__box">
        <button
          className="arrowBox__btn "
          onClick={() => {
            changeMoveDirection("up");
          }}
        >
          <ArrowUpwardIcon sx={{ fontSize: 40, color: "goldenrod" }} />
        </button>
        <button
          className="arrowBox__btn "
          onClick={() => {
            changeMoveDirection("down");
          }}
        >
          <ArrowDownwardIcon sx={{ fontSize: 40, color: "goldenrod" }} />
        </button>
      </div>

      <button
        className="arrowBox__btn"
        onClick={() => {
          changeMoveDirection("right");
        }}
      >
        <ArrowForwardIcon sx={{ fontSize: 40, color: "goldenrod" }} />
      </button>
    </div>
  );
}

export default ArrowBtnControlsBox;
