export const userPos = (state: number = 55, action: any) => {
  switch (action.type) {
    case "SETUSERPOS":
      return action.payload;
    default:
      return state;
  }
};

export interface UserPosition {
  userPos: number;
}
