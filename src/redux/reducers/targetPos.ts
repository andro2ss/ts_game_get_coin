export const targetPos = (state: number = 55, action: any) => {
  switch (action.type) {
    case "SETUSERPOS":
      return action.payload;
    default:
      return state;
  }
};

export interface TargetPosition {
  targetPos: number;
}
