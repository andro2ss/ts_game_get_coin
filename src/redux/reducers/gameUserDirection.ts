export const gameUserDirection = (state = "left", action: any) => {
  switch (action.type) {
    case "SETGAMEUSERDIRECTION":
      return action.payload;
    default:
      return state;
  }
};

export interface GameUserDirection {
  gameUserDirection: string;
}

export const setGameUserDirection = (value: string) => {
  return {
    type: "SETGAMEUSERDIRECTION",
    payload: value,
  };
};
