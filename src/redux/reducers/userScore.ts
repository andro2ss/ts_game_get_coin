export const userScore = (state: number = -1, action: any) => {
  switch (action.type) {
    case "SETUSERSCORE":
      return action.payload;
    default:
      return state;
  }
};

export interface UserScore {
  userScore: number;
}

export const setUserScore = (value: number) => {
  return {
    type: "SETUSERSCORE",
    payload: value,
  };
};
