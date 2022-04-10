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
