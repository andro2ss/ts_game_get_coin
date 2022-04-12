export const monstersPos = (state: number[] = [], action: any) => {
  switch (action.type) {
    case "SETMONSTERSPOS":
      return action.payload;
    default:
      return state;
  }
};

export interface MonstersPosition {
  monstersPos: number[];
}

export const setMonstersPos = (value: number[]) => {
  return {
    type: "SETMONSTERSPOS",
    payload: value,
  };
};
