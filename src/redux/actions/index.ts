export const setGameUser = (value: string) => {
  return {
    type: "SETGAMEUSER",
    payload: value,
  };
};

export const setUserPos = (value: number) => {
  return {
    type: "SETUSERPOS",
    payload: value,
  };
};

export const setUserScore = (value: number) => {
  return {
    type: "SETUSERSCORE",
    payload: value,
  };
};

export const setTargetPos = (value: number) => {
  return {
    type: "SETTARGETPOS",
    payload: value,
  };
};
