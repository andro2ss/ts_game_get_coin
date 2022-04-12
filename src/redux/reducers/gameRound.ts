export const gameRound = (state = 1, action: any) => {
  switch (action.type) {
    case "SETGAMEROUND":
      return action.payload;
    default:
      return state;
  }
};

export interface GameRound {
  gameRound: number;
}

export const setGameRound = (value: number) => {
  return {
    type: "SETGAMEROUND",
    payload: value,
  };
};
