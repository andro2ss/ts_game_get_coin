export const gameUserName = (state = "", action: any) => {
  switch (action.type) {
    case "SETGAMEUSERNAME":
      return action.payload;
    default:
      return state;
  }
};

export interface GameUserName {
  gameUserName: string;
}

export const setGameUserName = (value: string) => {
  return {
    type: "SETGAMEUSERNAME",
    payload: value,
  };
};
