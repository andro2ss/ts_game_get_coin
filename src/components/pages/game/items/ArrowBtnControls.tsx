import React from "react";

function ArrowBtnControls() {
  return (
    <div>
      <button
        onClick={() => {
          // setMoveDirection("left");
        }}
      >
        {"<-"}
      </button>
      <button
        onClick={() => {
          // setMoveDirection("right");
        }}
      >
        {"->"}
      </button>
      <button
        onClick={() => {
          // setMoveDirection("up");
        }}
      >
        /\
      </button>
      <button
        onClick={() => {
          // setMoveDirection("down");
        }}
      >
        \/{" "}
      </button>
    </div>
  );
}

export default ArrowBtnControls;
