export const gameUser = (state = "", action: any) => {
  switch (action.type) {
    case "SETGAMEUSER":
      return action.payload;
    default:
      return state;
  }
};

export interface User {
  gameUser: string;
}
