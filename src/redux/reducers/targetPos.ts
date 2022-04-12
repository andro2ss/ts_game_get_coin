export const targetPos = (state: number = 55, action: any) => {
  switch (action.type) {
    case "SETTARGETPOS":
      return action.payload;
    default:
      return state;
  }
};

export interface TargetPosition {
  targetPos: number;
}

export const setTargetPos = (value: number) => {
  return {
    type: "SETTARGETPOS",
    payload: value,
  };
};
